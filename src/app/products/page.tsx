"use client";

import React from "react";
import ProductCard from "@/components/productCard";
import { prod } from "@/@types/product";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState<any>({ data: [] });
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    let url = "/api/products";
    if (filter) {
      url += `?filter=${encodeURIComponent(filter)}`;
    }

    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [filter]);

  const handleButtonClick = (filterValue: string) => {
    setFilter(filterValue);
  };

  if (!products) return <p>No products data found</p>;

  return (
    <div className="bg-background grid md:flex mt-8">
      <div className="hidden md:block md:w-1/5">
        <div className="pb-12 space-y-4 py-4">
          <div className="px-4 py-2">
            <h2 className="mb-4 px-4 text-2xl font-semibold tracking-tight">
              Filters
            </h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full text-lg justify-start"
                onClick={() => handleButtonClick("Wearables")}
              >
                Wearables
              </Button>
              <Button
                variant="ghost"
                className="w-full text-lg justify-start"
                onClick={() => handleButtonClick("Audio")}
              >
                Audio
              </Button>
              <Button
                variant="ghost"
                className="w-full text-lg justify-start"
                onClick={() => handleButtonClick("Computing")}
              >
                Computing
              </Button>
              <Button
                variant="ghost"
                className="w-full text-lg justify-start"
                onClick={() => handleButtonClick("")}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 md:m-0 md:flex flex-wrap justify-evenly">
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

// async function getProducts() {
//   const axios = require("axios");
//   try {
//     const res = await axios.get("http://localhost:3000/api/products");
//     return res.data;
//   } catch (error) {
//     console.error("Fetch failed:", error);
//     throw error;
//   }
// }

// export default async function Products() {
// const [filter, setFilter] = useState<string>("");

// const products = await getProducts();
// console.log("products", products);

// const handleButtonClick = (filterValue: string) => {
//   setFilter(filterValue);
//   console.log(filter);
// };
