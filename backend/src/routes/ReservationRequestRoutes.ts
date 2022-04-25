import { Router } from "express";
import ReservationRequestController from "../controllers/ReservationRequestController";

class ReservationRequestRoutes {
  router = Router();
  reservationrequestController = new ReservationRequestController();

  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").get(this.reservationrequestController.findAll);
    this.router.route("/").post(this.reservationrequestController.create);
    this.router.route("/:id").get(this.reservationrequestController.findOne);
    this.router.route("/:id").put(this.reservationrequestController.update);
    this.router.route("/:id").delete(this.reservationrequestController.delete);
  }
}
export default new ReservationRequestRoutes().router;
