import ProductCard from "@/components/productCard";
import { Sidebar } from "@/components/sidebar";
import { prod } from "@/@types/product";

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
  const products = await getProducts();
  console.log("products", products);
  return (
    <div className="bg-background grid md:flex mt-8">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="md:flex flex-wrap justify-between">
        {products.data.map((products: prod, index: number) => (
          <div key={index}>
            <ProductCard
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
