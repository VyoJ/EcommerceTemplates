import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Product from "@/models/products";

export const GET = async (
  request: NextResponse,
  { params }: { params: { id: String } }
) => {
  const { id } = params;

  console.log(`Id:`, id);
  try {
    await connectDB();

    const prod = await Product.find({ prodid: id });

    return new NextResponse(JSON.stringify(prod), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (
  request: NextResponse,
  { params }: { params: { id: String } }
) => {
  const { id } = params;

  try {
    await connectDB();

    await Product.findByIdAndDelete(id);

    return new NextResponse("Product has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
