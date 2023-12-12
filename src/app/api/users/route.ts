import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import UserModel from "@/models/user";

export const GET = async (request: NextRequest) => {
  try {
    await connectDB();

    const queryParam = request.nextUrl.searchParams.get("email");
    const users = await UserModel.find({ email: queryParam });
    if (users.length !== 0) {
      return new NextResponse(JSON.stringify({ data: users }), {
        status: 202,
      });
    } else {
      return new NextResponse("None found", {
        status: 200,
      });
    }
  } catch (err) {
    return new NextResponse("Some Error", { status: 500 });
  }
};