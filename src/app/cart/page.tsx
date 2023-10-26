import CartCard from "@/components/cartCard";
import { products } from "@/data/products";
import { Product } from "@/data/products";

function Cart() {
  console.log(products);
  return (
    <div className="h-[calc(100vh-75px)] pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {products.map((products: Product, index: number) => (
            <div key={index}>
              <CartCard
                name={products.name}
                img={products.img}
                desc={products.desc}
                price={products.price}
                specs={products.specs}
              />
            </div>
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border  p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p>Subtotal</p>
            <p>1000</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>100</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">1100</p>
              <p className="text-sm text-gray-700">including GST</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
