"use client";

import ProductCard from "@/components/productCard";
import { Sidebar } from "@/components/sidebar";
import { products } from "@/data/products";

export default function Products() {
  return (
    <div className="bg-background grid md:flex mt-8">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="md:flex flex-wrap justify-between">
        {products.map((products) => (
          <div key={products.id}>
            <ProductCard
              id={products.id}
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
