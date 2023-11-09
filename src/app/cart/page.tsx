"use client";

import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context";
import React, { useContext, useEffect, useState } from "react";
import { AddToCartProps } from "@/components/addToCart";
import CartCard from "@/components/cartCard";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let totalPrice = state.items.reduce((total, product) => total + product.price, 0);
    setTotal(totalPrice); // update the state variable
  };

  useEffect(() => {
    calculateTotal();
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
                      prodid={products.prodid}
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
