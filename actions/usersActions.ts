"use server";

import { User } from "@/models/userSchema";
import { connect } from "@/utils/dbConfig";
import { getRouteLink, makeid } from "@/utils/helperFunctions";

connect();

export async function loginUser(userPayload: any) {
  try {
    const user = await User.findOne({ email: userPayload?.email });

    if (user && userPayload?.password == user.password) return user;
    return null;
  } catch (err: any) {
    console.log(err.message);
    return null;
  }
}

export async function signupUser(userPayload: any) {
  try {
    let newUsername = getRouteLink(userPayload.fullName) + "-" + makeid(5);

    const finalPayload = {
      username: newUsername,
      ...userPayload,
    };

    const newUser = await new User({ ...finalPayload });
    const userResp = await newUser.save();

    return userResp ?? null;
  } catch (err: any) {
    console.log(err.message);
    return null;
  }
}

export async function updateUserDetails(userPayload: any) {
  try {
    const updateResp = await User.updateOne(
      {
        email: userPayload?.email,
      },
      {
        fullName: userPayload.fullName,
        avatarURL: userPayload.avatarURL,
        designation: userPayload.designation,
      }
    );

    return updateResp ?? null;
  } catch (err: any) {
    console.log(err.message);
    return null;
  }
}

export async function getUserDetails(email: string) {
  try {
    const userDetails = await User.findOne({ email: email }).select(
      "-password"
    );

    return userDetails;
  } catch {
    return null;
  }
}

export async function searchUsers(searchText: string) {
  try {
    const userDetails = await User.aggregate([
      {
        $match: {
          $or: [
            {
              fullName: {
                $regex: searchText,
                $options: "i",
              },
            },
            {
              email: {
                $regex: searchText,
                $options: "i",
              },
            },
            {
              designation: {
                $regex: searchText,
                $options: "i",
              },
            },
          ],
        },
      },
      {
        $project: {
          fullName: 1,
          username: 1,
          email: 1,
          designation: 1,
          avatarURL: 1,
          createdAt: 1,
        },
      },
    ]);

    return userDetails;
  } catch {
    return [];
  }
}
