import { Request, Response, NextFunction } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import { ReservationRequestModel } from "../models/ReservationRequest";
import * as winston from "winston";
import axios from "axios";
import { ReservationModel, ReservationInterface } from "../models/Reservation";

export default class ReservationRequestController {
  constructor() {}

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      ReservationRequestModel.find(
        req.query,
        function (err, reservationrequests) {
          if (err) {
            apiErrorHandler(
              err,
              req,
              res,
              "Find all reservationrequests failed."
            );
          } else {
            res.json(reservationrequests);
          }
        }
      );
    } catch (err) {
      apiErrorHandler(err, req, res, "Find all reservationrequests failed.");
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      ReservationRequestModel.findById(
        req.params.id,
        function (err, reservationrequest) {
          if (err) {
            apiErrorHandler(
              err,
              req,
              res,
              "Find reservationrequest by id failed."
            );
          } else {
            res.json(reservationrequest);
          }
        }
      );
    } catch (err) {
      apiErrorHandler(err, req, res, "Find reservationrequest by id failed.");
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      new ReservationRequestModel(req.body).save(async function (err, result) {
        if (err) {
          apiErrorHandler(err, req, res, "Create reservationrequest failed.");
        } else {
          // Create reservation. Poll various restaurants given filter criteria
          const locationRes = await axios.post(
            "https://worldwide-restaurants.p.rapidapi.com/typeahead",
            {
              language: "en_US",
              q: req.body.location.city,
            },
            {
              headers: {
                "content-type": "application/json",
                "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
                "X-RapidAPI-Key":
                  "e8a9328cd1msh20b885ea27319b6p192189jsnd2b26f149fcc",
              },
            }
          );

          const locationId =
            locationRes.data.results.data[0].result_object.location_id;

          const restaurantRes = await axios.post(
            "https://worldwide-restaurants.p.rapidapi.com/search",
            {
              language: "en_US",
              limit: "30",
              location_id: locationId,
              currency: "USD",
            },
            {
              headers: {
                "content-type": "application/json",
                "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
                "X-RapidAPI-Key":
                  "e8a9328cd1msh20b885ea27319b6p192189jsnd2b26f149fcc",
              },
            }
          );

          const restaurants = restaurantRes.data.results.data;
          const restaurant =
            restaurants[Math.floor(Math.random() * restaurants.length)];

          console.log(restaurant);

          const reservation = {
            name: "Reservation",
            user: req.body.user,
            reservationRequest: result._id,
            restaurant: {
              name: restaurant.name,
              location: {
                street: restaurant.address_obj.street1,
                city: restaurant.address_obj.city,
                state: restaurant.address_obj.state,
                zipcode: restaurant.postalcode
                  ? restaurant.postalcode
                  : req.body.location.zipcode,
              },
              email: restaurant.email,
              phone_number: restaurant.phone,
            },
            date: req.body.date,
            numGuests: req.body.numGuests,
          };

          new ReservationModel(reservation).save(function (err) {
            console.log(err);
          });

          res.status(201).json(result);
        }
      });
    } catch (err) {
      apiErrorHandler(err, req, res, "Create reservationrequest failed.");
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      ReservationRequestModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { upsert: true, runValidators: true },
        function (err) {
          console.log(req.body);
          if (err) {
            apiErrorHandler(err, req, res, "Update reservationrequest failed.");
          } else {
            res.sendStatus(200);
          }
        }
      );
    } catch (err) {
      apiErrorHandler(err, req, res, "Update reservationrequest failed.");
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      ReservationRequestModel.deleteOne(
        { _id: req.params.id },
        function (err, deleteRes) {
          if (err) {
            apiErrorHandler(err, req, res, "Delete reservationrequest failed.");
          } else if (deleteRes.deletedCount == 0) {
            res.sendStatus(204);
          } else {
            res.sendStatus(200);
          }
        }
      );
    } catch (err) {
      apiErrorHandler(err, req, res, "Delete reservationrequest failed.");
    }
  }
}
