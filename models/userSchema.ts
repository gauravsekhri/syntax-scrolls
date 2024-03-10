import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide fullName"],
    },
    username: {
      type: String,
      required: [true, "Please provide username"],
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      unique: true,
    },
    designation: {
      type: String,
      required: false,
      default: "Creative Writer",
    },
    avatarURL: {
      type: String,
      required: false,
      default:
        "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
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
    isVisitor: {
      type: Boolean,
      default: false,
    },
    savedPosts: {
      type: [],
      default: [],
    },
    lastActiveTime: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

export const User =
  mongoose?.models?.user || mongoose.model("user", userSchema);
