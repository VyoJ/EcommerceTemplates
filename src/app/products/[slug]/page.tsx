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
    console.log("res",res)
    if (res.status!=200) {
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
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 grid-flow-row justify-items-center align-items-center mt-6 md:mt-12">
        <div className="">
          <Image
            src={prod.img}
            alt="Product Pic"
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="space-y-6 mx-8 mt-8 md:mt-0 justify-self-start">
          <h1 className="text-4xl font-bold tracking-tighter">
            {prod.name}
          </h1>
          <div className="flex space-x-1">{prod.rating}</div>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            ₹ {prod.price}
          </p>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            {prod.desc}
          </p>
          <div className="w-54 h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900">
            <AddToCart prodid={prod.prodid} name={prod.name} img={prod.img} price={prod.price}/>
          </div>
        </div>
      </section>
      <p className="text-base text-zinc-500 dark:text-zinc-400 m-8">
        {prod.specs}
      </p>
    </>
  );
}
