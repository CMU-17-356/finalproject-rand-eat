import mongoose, { Schema, Document, Model } from "mongoose";
import { RestaurantInterface, RestaurantSchema } from "./Restaurant";
import { UserInterface, UserSchema } from "./User";

export interface ReservationInterface extends Document {
  name: string;
  restaurant: RestaurantInterface;
  user: UserInterface;
  date: Date;
  numGuests: number;
  confirmation: string;
}

export const ReservationSchema = new Schema({
  name: { type: String, required: true },
  restaurant: { type: RestaurantSchema, required: true },
  user: { type: UserSchema, required: true },
  date: { type: Date, required: true },
  numGuests: { type: Number, required: true },
  confirmation: { type: String, required: true },
});

export const ReservationModel: Model<ReservationInterface> = mongoose.model(
  "Reservation",
  ReservationSchema
);
