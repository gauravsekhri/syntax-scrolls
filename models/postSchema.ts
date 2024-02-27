import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: [true, "Please provide postId."],
      unique: true,
    },
    img: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: [true, "Please provide title."],
    },
    description: {
      type: String,
      default: "",
    },
    tags: {
      type: [],
      default: [],
    },
    routeLink: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      required: [true, "Please provide content."],
    },
    createdBy: {
      type: String,
      default: "",
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    metaDescription: {
      type: String,
      default: "",
    },
    metaKeywords: {
      type: [],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Posts = mongoose.models.Posts || mongoose.model("Posts", postSchema);

export default Posts;
