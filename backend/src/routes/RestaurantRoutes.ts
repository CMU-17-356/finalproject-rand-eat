import { Router } from "express";
import RestaurantController from "../controllers/RestaurantController";

class RestaurantRoutes {
  router = Router();
  restaurantController = new RestaurantController();

  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").get(this.restaurantController.findAll);
    this.router.route("/").post(this.restaurantController.create);
    this.router.route("/:id").get(this.restaurantController.findOne);
    this.router.route("/:id").put(this.restaurantController.update);
    this.router.route("/:id").delete(this.restaurantController.delete);
  }
}
export default new RestaurantRoutes().router;
