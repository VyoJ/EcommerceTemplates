import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import UserModel from "@/models/user";

export const GET = async (
  request: NextResponse,
  { params }: { params: { username: String; password: String } }
) => {
  try {
    await connectDB();

    console.log(`Details: `, params);

    const users = await UserModel.find({
      name: params.username,
      password: params.password,
    });
    console.log(users);

    return new NextResponse(JSON.stringify({ data: users }), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request: NextResponse) => {
  const body = await request.json();

  const newUser = new UserModel(body);

  try {
    await connectDB();

    await newUser.save();

    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
