import { Application } from "express";
import userRouter from "./UserRoutes";
import locationRouter from "./LocationRoutes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/v1/users", userRouter);
    app.use("/api/v1/users", locationRouter);
  }
}
