import { Request, Response, NextFunction } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import { ReservationModel } from "../models/Reservation";
import * as winston from "winston";

export default class ReservationsController {
  constructor() {}

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      ReservationModel.find(req.query, function (err, reservations) {
        if (err) {
          apiErrorHandler(err, req, res, "Find all reservations failed.");
        } else {
          res.json(reservations);
        }
      });
    } catch (err) {
      apiErrorHandler(err, req, res, "Find all reservations failed.");
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      ReservationModel.findById(req.params.id, function (err, reservation) {
        if (err) {
          apiErrorHandler(err, req, res, "Find reservation by id failed.");
        } else {
          res.json(reservation);
        }
      });
    } catch (err) {
      apiErrorHandler(err, req, res, "Find reservation by id failed.");
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      new ReservationModel(req.body).save(function (err) {
        if (err) {
          apiErrorHandler(err, req, res, "Create reservation failed.");
        } else {
          res.sendStatus(201);
        }
      });
    } catch (err) {
      apiErrorHandler(err, req, res, "Create reservation failed.");
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      ReservationModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { upsert: true, runValidators: true },
        function (err) {
          console.log(req.body);
          if (err) {
            apiErrorHandler(err, req, res, "Update reservation failed.");
          } else {
            res.sendStatus(200);
          }
        }
      );
    } catch (err) {
      apiErrorHandler(err, req, res, "Update reservation failed.");
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      ReservationModel.deleteOne(
        { _id: req.params.id },
        function (err, deleteRes) {
          if (err) {
            apiErrorHandler(err, req, res, "Delete reservation failed.");
          } else if (deleteRes.deletedCount == 0) {
            res.sendStatus(204);
          } else {
            res.sendStatus(200);
          }
        }
      );
    } catch (err) {
      apiErrorHandler(err, req, res, "Delete reservation failed.");
    }
  }
}
