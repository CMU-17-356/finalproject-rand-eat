import mongoose, { Schema, Document, Model } from "mongoose";

export interface LocationInterface extends Document {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

export const LocationSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
});

export const LocationModel: Model<LocationInterface> = mongoose.model(
  "Location",
  LocationSchema
);
