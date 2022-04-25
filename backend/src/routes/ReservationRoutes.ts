import { Router } from "express";
import ReservationController from "../controllers/ReservationController";

class ReservationRoutes {
  router = Router();
  reservationController = new ReservationController();

  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").get(this.reservationController.findAll);
    this.router.route("/").post(this.reservationController.create);
    this.router.route("/:id").get(this.reservationController.findOne);
    this.router.route("/:id").put(this.reservationController.update);
    this.router.route("/:id").delete(this.reservationController.delete);
  }
}
export default new ReservationRoutes().router;
