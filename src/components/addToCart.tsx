"use client";

import React, { useContext } from "react";
import { CartContext } from "@/context";
// import { Operations } from "@/@types/globalTypes";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export interface AddToCartProps {
  prodid: string;
  name: string;
  img: string;
  price: number;
}

const AddToCart = ({ prodid, name, img, price }: AddToCartProps) => {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);
  const { toast } = useToast();

  return (
    <div>
      <Button
        onClick={() => {
          dispatch({
            type: "ADD",
            payload: { prodid, name, img, price },
          });
          toast({
            title: "Product added to cart",
          });
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
