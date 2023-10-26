import mongoose from "mongoose";
import { user } from "@/@types/user"

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userid: {
      type: Number,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.models.User || mongoose.model<user>('User', userSchema);
export default UserModel