"use client";

// import CartCard from "@/components/cartCard";
// import { CartContext } from "@/context";
// import React, { useContext, useEffect } from "react";
// import { AddToCartProps } from "@/components/addToCart";

// function Cart() {
//   const { state, dispatch } = useContext(CartContext);
//   useEffect(() => {
//     console.log(state);
//     }, [state]);
//   console.log(state)

//   return (
//     <div className="h-[calc(100vh-75px)] pt-20">
//       <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
//       <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//         <div className="rounded-lg md:w-2/3">
//           {state.items.map((products: AddToCartProps, index: number) => (
//             <div key={index}>
//               <CartCard
//                 name={products.name}
//                 img={products.img}
//                 price={products.price}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="mt-6 h-full rounded-lg border  p-6 shadow-md md:mt-0 md:w-1/3">
//           <div className="mb-2 flex justify-between">
//             <p>Subtotal</p>
//             <p>1000</p>
//           </div>
//           <div className="flex justify-between">
//             <p>Shipping</p>
//             <p>100</p>
//           </div>
//           <hr className="my-4" />
//           <div className="flex justify-between">
//             <p className="text-lg font-bold">Total</p>
//             <div className="">
//               <p className="mb-1 text-lg font-bold">1100</p>
//               <p className="text-sm text-gray-700">including GST</p>
//             </div>
//           </div>
//           <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
//             Check out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;

import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context";
import React, { useContext, useEffect } from "react";
import { AddToCartProps } from "@/components/addToCart";
import CartCard from "@/components/cartCard";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);
  let total: number = 0;

  const calculateTotal = () => {
    console.log(total);
    total = state.items.reduce((total, product) => total + product.price, 0);
    console.log(total);
    return total;
  };

  useEffect(() => {
    total = calculateTotal();
    console.log(state);
  }, [state]);
  console.log(state);

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-16 mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-8">
          Shopping Cart
        </h1>
        <div className="grid lg:grid-cols-3 gap-8 md:gap-20">
          <div className="lg:col-span-2">
            <Card>
              <CardContent>
                <div className="flex items-center justify-between py-4 lg:mx-4 border-b">
                  <h2 className="text-lg md:text-xl font-semibold">Product</h2>
                  <h2 className="text-lg md:text-xl font-semibold mr-14">
                    Price
                  </h2>
                </div>
                {state.items.map((products: AddToCartProps, index: number) => (
                  <div key={index}>
                    <CartCard
                      name={products.name}
                      img={products.img}
                      price={products.price}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Cart Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between py-4 border-b">
                  <h2 className="text-lg font-semibold">Subtotal</h2>
                  <h2 className="text-lg font-semibold">₹ {total}</h2>
                </div>
                <div className="flex items-center justify-between py-4 border-b">
                  <h2 className="text-lg font-semibold">Tax and Shipping</h2>
                  <h2 className="text-lg font-semibold">₹ 100</h2>
                </div>
                <div className="flex items-center justify-between py-4 border-b">
                  <h2 className="text-lg font-semibold">Total</h2>
                  <h2 className="text-lg font-semibold">₹ {total+100}</h2>
                </div>
                <Button className="w-full mt-6" size="lg">
                  Checkout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
