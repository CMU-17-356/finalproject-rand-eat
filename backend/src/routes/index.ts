import { Application } from "express";
import userRouter from "./UserRoutes";
import locationRouter from "./LocationRoutes";
import restaurantRouter from "./RestaurantRoutes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/v1/users", userRouter);
    app.use("/api/v1/locations", locationRouter);
    app.use("/api/v1/restaurants", restaurantRouter);
  }
}
