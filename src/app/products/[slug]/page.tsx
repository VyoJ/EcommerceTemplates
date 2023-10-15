// "use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: {
    slug: number;
  };
}

async function getProductbyId({ params }: PageProps) {
  const { slug } = params;
  console.log(slug);

  try {
    const res = await fetch(`http://localhost:3000/api/products/${slug}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}

export default async function prodPage({ params }: PageProps) {
  const prod = await getProductbyId({params});
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
          <h1 className="text-4xl font-bold tracking-tighter">{prod.name}</h1>
          <div className="flex space-x-1">{prod.rating}</div>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            ₹ {prod.price}
          </p>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            {prod.desc}
          </p>
          <Button className="w-54 h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900">
            Add to Cart
          </Button>
        </div>
      </section>
      <p className="text-base text-zinc-500 dark:text-zinc-400 m-8">
        {prod.specs}
      </p>
    </>
  );
}


// Old Logic:
// const prod = products.find((product) => {
//   return product.id == slug;
// });

// if (prod == undefined) return notFound;