import { Request, Response, NextFunction } from "express";
import { apiErrorHandler } from "./../handlers/errorHandler";
import { UserModel } from "../models/User";
import * as winston from "winston";

export default class UsersController {
  constructor() {}

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      UserModel.find(req.query, function (err, users) {
        if (err) {
          apiErrorHandler(err, req, res, "Find all users failed.");
        } else {
          res.json(users);
        }
      });
    } catch (err) {
      apiErrorHandler(err, req, res, "Find all users failed.");
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      UserModel.findById(req.params.id, function (err, user) {
        if (err) {
          apiErrorHandler(err, req, res, "Find user by id failed.");
        } else {
          res.json(user);
          //console.log(res);
        }
      });
    } catch (err) {
      apiErrorHandler(err, req, res, "Find user by id failed.");
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      new UserModel(req, res).save(function (err, result) {
        if (err) {
          apiErrorHandler(err, req, res, "Create user failed.");
        } else {
          res.status(201).json(result);
        }
      });
    } catch (err) {
      apiErrorHandler(err, req, res, "Create user failed.");
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      UserModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { upsert: true, runValidators: true },
        function (err) {
          console.log(req.body);
          if (err) {
            apiErrorHandler(err, req, res, "Update user failed.");
          } else {
            res.sendStatus(200);
          }
        }
      );
    } catch (err) {
      apiErrorHandler(err, req, res, "Update user failed.");
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      UserModel.deleteOne({ _id: req.params.id }, function (err, deleteRes) {
        if (err) {
          apiErrorHandler(err, req, res, "Delete user failed.");
        } else if (deleteRes.deletedCount == 0) {
          res.sendStatus(204);
        } else {
          res.sendStatus(200);
        }
      });
    } catch (err) {
      apiErrorHandler(err, req, res, "Delete user failed.");
    }
  }
}
