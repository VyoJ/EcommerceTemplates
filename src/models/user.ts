import mongoose from "mongoose";

const { Schema } = mongoose;

export interface user {
    userid: number;
    name: string;
    email: string;
    pwd: string;
  }

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

export default mongoose.model("User", userSchema);