import ProductCard from "@/components/productCard";
import { Sidebar } from "@/components/sidebar";
import { prod } from "@/models/products";

async function getProducts() {
  try {
    const res = await fetch(`http://localhost:3000/api/products`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}

//Both slug based and normal all-products pages not working now
//All products page is showing only one product for some reason
export default async function Products() {
  const products = await getProducts();
  console.log(products);
  return (
    <div className="bg-background grid md:flex mt-8">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="md:flex flex-wrap justify-between">
        {products.map((products:prod, index: number) => (
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