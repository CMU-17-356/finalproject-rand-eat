import express, { Application } from "express";
import bodyParser from "body-parser";
// import Routes from "./routes";
import mongoose from "mongoose";
import cors from "cors";

var mongoDBUrl = "TODO";

mongoose.connect(mongoDBUrl);

var db = mongoose.connection;

db.on("error", function (err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function () {
  console.log("Mongoose connection successful.");
});

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// const routes: Routes = new Routes(app);
const port = 8080;

app.get("/", (req, res) => {
  res.status(200).send("Hello Group 3! - Riccardo Santoni");
});

app.listen(port, () => {
  console.log(`Dronuts listening on localhost:${port}`);
});
