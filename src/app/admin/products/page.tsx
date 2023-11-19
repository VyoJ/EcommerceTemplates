import AdminSidebar from "@/components/adminSidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prod } from "@/@types/product";
import ProductCard from "@/components/productCard";
import { PlusSquare } from "lucide-react";

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

async function AdminProducts() {
  const products = await getProducts();

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="grid w-full h-16 items-center">
        <div className="m-8">
          <Button>
            <Link href="/admin/products/add" className="flex items-center">
              <PlusSquare className="mr-2"/>
              Add Product
            </Link>
          </Button>
        </div>
        <div className="flex justify-evenly flex-wrap mx-4 mt-4">
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
    </div>
  );
}

export default AdminProducts;
