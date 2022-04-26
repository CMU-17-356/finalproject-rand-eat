import mongoose, { Schema, Document, Model } from "mongoose";
import { LocationInterface, LocationSchema } from "./Location";

export interface RestaurantInterface extends Document {
  name: string;
  location: LocationInterface;
  email: string;
  phone_number: string;
}

export const RestaurantSchema = new Schema({
  name: { type: String, required: true },
  location: { type: LocationSchema, required: true },
  email: { type: String },
  phone_number: { type: String },
});

export const RestaurantModel: Model<RestaurantInterface> = mongoose.model(
  "Restaurant",
  RestaurantSchema
);
