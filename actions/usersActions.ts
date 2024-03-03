"use server";

import { User } from "@/models/userSchema";
import { connect } from "@/utils/dbConfig";

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
    const newUser = await new User({ ...userPayload });
    const userResp = await newUser.save();

    return userResp ?? null;
  } catch (err: any) {
    console.log(err.message);
    return null;
  }
}
