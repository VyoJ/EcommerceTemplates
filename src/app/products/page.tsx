// "use client"

import ProductCard from "@/components/productCard";
// import { Sidebar } from "@/components/sidebar";
import { prod } from "@/@types/product";
import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";

async function getProducts() {
  const axios = require("axios");
  try {
    const res = await axios.get("http://localhost:3000/api/products");
    return res.data;
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}

export default async function Products() {
  // const [filter, setFilter] = useState<string>("");

  const products = await getProducts();
  console.log("products", products);

  // const handleButtonClick = (filterValue: string) => {
  //   setFilter(filterValue);
  //   console.log(filter);
  // };


  return (
    <div className="bg-background grid md:flex mt-8">
      <div className="hidden md:block">
        <div className="pb-12 space-y-4 py-4">
          {/* <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Discover
              </h2>
              <div className="space-y-1">
                <Button variant="secondary" className="w-full justify-start">
                  Category 1
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Category 2
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Category 3
                </Button>
              </div>
            </div> */}
          <div className="px-4 py-2">
            <h2 className="mb-4 px-4 text-2xl font-semibold tracking-tight">
              Filters
            </h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full text-lg justify-start"
                // onClick={() => handleButtonClick("Wearables")}
              >
                Wearables
              </Button>
              <Button
                variant="ghost"
                className="w-full text-lg justify-start"
                // onClick={() => handleButtonClick("Audio")}
              >
                Audio
              </Button>
              <Button
                variant="ghost"
                className="w-full text-lg justify-start"
                // onClick={() => handleButtonClick("Computing")}
              >
                Computing
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex flex-wrap justify-between">
        {products.data.map((products: prod, index: number) => (
          <div key={index}>
            <ProductCard
              id={products._id}
              prodid={products.prodid}
              name={products.name}
              img={products.img}
              desc={products.desc}
              price={products.price}
              rating={products.rating}
              specs={products.specs}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
