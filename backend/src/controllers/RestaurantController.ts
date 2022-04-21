import { Request, Response, NextFunction } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import { RestaurantModel } from "../models/Restaurant";
import * as winston from "winston";

export default class RestaurantsController {
  constructor() {}

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      RestaurantModel.find(req.query, function (err, restaurants) {
        if (err) {
          apiErrorHandler(err, req, res, "Find all restaurants failed.");
        } else {
          res.json(restaurants);
        }
      });
    } catch (err) {
      apiErrorHandler(err, req, res, "Find all restaurants failed.");
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      RestaurantModel.findById(req.params.id, function (err, restaurant) {
        if (err) {
          apiErrorHandler(err, req, res, "Find restaurant by id failed.");
        } else {
          res.json(restaurant);
        }
      });
    } catch (err) {
      apiErrorHandler(err, req, res, "Find restaurant by id failed.");
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      new RestaurantModel(req.body).save(function (err) {
        if (err) {
          apiErrorHandler(err, req, res, "Create restaurant failed.");
        } else {
          res.sendStatus(201);
        }
      });
    } catch (err) {
      apiErrorHandler(err, req, res, "Create restaurant failed.");
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      RestaurantModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { upsert: true, runValidators: true },
        function (err) {
          console.log(req.body);
          if (err) {
            apiErrorHandler(err, req, res, "Update restaurant failed.");
          } else {
            res.sendStatus(200);
          }
        }
      );
    } catch (err) {
      apiErrorHandler(err, req, res, "Update restaurant failed.");
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      RestaurantModel.deleteOne(
        { _id: req.params.id },
        function (err, deleteRes) {
          if (err) {
            apiErrorHandler(err, req, res, "Delete restaurant failed.");
          } else if (deleteRes.deletedCount == 0) {
            res.sendStatus(204);
          } else {
            res.sendStatus(200);
          }
        }
      );
    } catch (err) {
      apiErrorHandler(err, req, res, "Delete restaurant failed.");
    }
  }
}
