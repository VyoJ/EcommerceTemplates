"use client";

import ProductCard from "@/components/productCard";
import { Sidebar } from "@/components/sidebar";
import { products } from "@/data/products";

export default function Products() {
  return (
    <div className="bg-background flex">
      <Sidebar />
      {products.map((products) => (
        <ProductCard
          name={products.name}
          img={products.img}
          desc={products.desc}
          price={products.price}
          rating={products.rating}
          specs={products.specs}
        />
      ))}
    </div>
  );
}