"use server";

import { postPayload } from "@/interfaces";
import Posts from "@/models/postSchema";
import { connect } from "@/utils/dbConfig";
import { v4 as uuidv4 } from "uuid";

connect();

export const fetchAllPublicPosts = async () => {
  try {
    const posts = await Posts.aggregate([
      {
        $match: {
          isPublished: true,
        },
      },
      {
        $sort: { createdAt: -1 },
      },
      {
        $addFields: {
          postDetails: "$$ROOT",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "createdBy",
          foreignField: "email",
          as: "userDetails",
        },
      },
      { $unwind: "$userDetails" },
      {
        $project: {
          postDetails: 1,
          "userDetails.fullName": 1,
          "userDetails.email": 1,
        },
      },
    ]);
    return posts;
  } catch (err: any) {
    console.log(err);
  }
};

export async function newPost(postPayload: postPayload) {
  console.log("userPayload", postPayload);
  const postId = await uuidv4();

  try {
    const newPost = await new Posts({
      postId: "pId-" + postId,
      ...postPayload,
    });
    const postResp = await newPost.save();

    return postResp ?? null;
  } catch (err: any) {
    console.log(err.message);
    return null;
  }
}

export async function getPostByLink(routeLink: string) {
  console.log(routeLink);
  try {
    const postDetails = await Posts.aggregate([
      {
        $match: {
          routeLink: routeLink,
        },
      },
      {
        $sort: { createdAt: -1 },
      },
      {
        $addFields: {
          postDetails: "$$ROOT",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "createdBy",
          foreignField: "email",
          as: "userDetails",
        },
      },
      { $unwind: "$userDetails" },
      {
        $project: {
          postDetails: 1,
          "userDetails.fullName": 1,
          "userDetails.email": 1,
        },
      },
    ]);

    return postDetails ? postDetails[0] : null;
  } catch (err: any) {
    console.log(err.message);
    return null;
  }
}
