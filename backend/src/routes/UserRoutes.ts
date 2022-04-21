import { Router } from "express";
import UserController from "../controllers/UserController";

class UserRoutes {
  router = Router();
  userController = new UserController();

  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").get(this.userController.findAll);
    this.router.route("/").post(this.userController.create);
    this.router.route("/:id").get(this.userController.findOne);
    this.router.route("/:id").put(this.userController.update);
    this.router.route("/:id").delete(this.userController.delete);
  }
}
export default new UserRoutes().router;
