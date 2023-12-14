import Image from "next/image";
import { Button } from "@/components/ui/button";
import AddToCart from "@/components/addToCart";

interface PageProps {
  params: {
    slug: String;
  };
}

async function getProductbyId({ params }: PageProps) {
  const { slug } = params;
  const axios = require("axios");
  console.log(slug);

  try {
    const res = await axios.get(`http://localhost:3000/api/products/${slug}`);
    console.log("res", res);
    if (res.status != 200) {
      throw new Error("Failed to fetch data");
    }
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}

export default async function prodPage({ params }: PageProps) {
  const prod = await getProductbyId({ params });
  console.log(prod);
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center md:flex-row gap-6 md:gap-12 max-w-6xl px-4 mx-auto py-6">
        <div className="md:w-1/2">
          <Image
            alt={prod.name}
            className="object-cover w-full rounded-lg overflow-hidden"
            height={300}
            src={prod.img}
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width={300}
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{prod.name}</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            ₹ {prod.price}
          </p>
          <hr className="my-6" />
          <p className="text-base text-gray-700 dark:text-gray-300">
            {prod.desc}
          </p>
          <hr className="my-6" />
          <div className="space-y-2">
            <h2 className="font-semibold text-lg">Additional Information:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>{prod.specs}</li>
              <li>Product Rating: {prod.rating}</li>
            </ul>
          </div>
          <AddToCart
            prodid={prod.prodid}
            name={prod.name}
            img={prod.img}
            price={prod.price}
          />
        </div>
      </div>
    </div>
  );
}
