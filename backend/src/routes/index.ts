import { Application } from "express";
import userRouter from "./UserRoutes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/v1/users", userRouter);
  }
}
