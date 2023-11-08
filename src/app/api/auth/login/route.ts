import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import UserModel from "@/models/user";
import bcrypt from "bcryptjs";
import { signIn } from "next-auth/react";

export const POST = async (request: NextResponse) => {
  const body = await request.json();
  console.log(body.params);
  const output = new UserModel(body);
  try {
    await connectDB();
    const user = await UserModel.findOne({ email: output.email });
    if (user) {
      const checkPassword = bcrypt.compareSync(output.password!, user.password);
      console.info("the password check returned ", checkPassword);
      if (checkPassword) {
        return NextResponse.json(
          { status: 200,
             message: "User Logged in successfully!",
             data:{
              email:user.email,
              password:output.password
             }
             },
          { status: 200 }
        );
      }
      return NextResponse.json(
        {
          status: 400,
          errors: {
            email: "Please check your credentials.",
          },
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          status: 400,
          errors: {
            email: "No User found in our system with above email.",
          },
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { status: 400 },
      { status: 200 }
    );
  }
};
