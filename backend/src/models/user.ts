import mongoose, { Schema, Document, Model } from "mongoose";

export interface UserInterface extends Document {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
}

export const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: String, required: true },
  password: { type: String, required: true },
});

export const UserModel: Model<UserInterface> = mongoose.model(
  "User",
  UserSchema
);
