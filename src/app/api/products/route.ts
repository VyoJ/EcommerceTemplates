import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Product from "@/models/products";
import prod from "@/models/products";

export const GET = async (request: NextResponse) => {
  try {
    await connectDB();

    const products = await Product.find({});
    console.log(products);

    return new NextResponse(JSON.stringify({data:products}), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request: NextResponse) => {
  const body = await request.json();

  const newProduct = new Product(body);

  try {
    await connectDB();

    await newProduct.save();

    return new NextResponse("Product has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};