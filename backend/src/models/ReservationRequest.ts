import mongoose, { Schema, Document, Model } from "mongoose";
import { LocationInterface, LocationSchema } from "./Location";
import { UserInterface, UserSchema } from "./User";

export interface ReservationRequestInterface extends Document {
  user: UserInterface;
  location: LocationInterface;
  date?: Date;
  numGuests?: number;
  cost?: string;
  cuisinePreference?: [string];
}

export const ReservationRequestSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "UserSchema" },
  location: { type: LocationSchema, required: true },
  date: { type: Date },
  numGuests: { type: Number },
  cost: { type: Number },
  cuisinePreference: { type: [String] },
});

export const ReservationRequestModel: Model<ReservationRequestInterface> =
  mongoose.model("ReservationRequest", ReservationRequestSchema);
