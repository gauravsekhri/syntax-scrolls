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
          "userDetails.avatarURL": 1,
        },
      },
    ]);
    return posts;
  } catch (err: any) {
    console.log(err);
  }
};

export async function newPost(postPayload: postPayload) {
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

export async function getUserPosts(email: string) {
  try {
    const postsList = await Posts.aggregate([
      {
        $match: {
          createdBy: email,
        },
      },
      {
        $sort: { createdAt: -1 },
      },
    ]);

    return postsList ?? [];
  } catch (err: any) {
    console.log(err.message);
    return [];
  }
}

export async function searchPosts(searchText: string) {
  try {
    const posts = await Posts.aggregate([
      {
        $match: {
          $and: [
            {
              isPublished: true,
            },
            {
              $or: [
                {
                  postTitle: {
                    $regex: searchText,
                    $options: "i",
                  },
                },
                {
                  description: {
                    $regex: searchText,
                    $options: "i",
                  },
                },
                {
                  createdBy: {
                    $regex: searchText,
                    $options: "i",
                  },
                },
              ],
            },
          ],
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
          "userDetails.avatarURL": 1,
        },
      },
    ]);

    return posts;
  } catch (err: any) {
    console.log(err.message);
    return [];
  }
}
