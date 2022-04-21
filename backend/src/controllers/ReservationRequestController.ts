import { Request, Response, NextFunction } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import { ReservationRequestModel } from "../models/ReservationRequest";
import * as winston from "winston";

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
      new ReservationRequestModel(req.body).save(function (err) {
        if (err) {
          apiErrorHandler(err, req, res, "Create reservationrequest failed.");
        } else {
          res.sendStatus(201);
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
