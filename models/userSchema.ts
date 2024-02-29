import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide fullName"],
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isKeyAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const User =
  mongoose?.models?.user || mongoose.model("user", userSchema);
