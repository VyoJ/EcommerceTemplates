import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import UserModel from "@/models/user";
import bcrypt from "bcryptjs";

interface UserPayload {
  name: string;
  email: string;
  password: string;
}

export const POST = async (request: NextResponse) => {
  const body: UserPayload = await request.json();
  const output = new UserModel(body);
  try {
    await connectDB();
    const user = await UserModel.findOne({ email: output.email });
    if (user) {
      return NextResponse.json(
        {
          status: 400,
          errors: {
            email: "Email is already used.",
          },
        },
        { status: 200 }
      );
    } else {
      const salt = bcrypt.genSaltSync(10);
      output.password = bcrypt.hashSync(output.password, salt);
      await UserModel.create(output);
      return NextResponse.json(
        { status: 200, msg: "User Created successfully!" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
