"use client";

import React, { useContext } from "react";
import { CartContext } from "@/context";
// import { Operations } from "@/@types/globalTypes";
import { Button } from "./ui/button";

export interface AddToCartProps {
  prodid: string;
  name: string;
  img: string;
  price: number;
}

const AddToCart = ({ prodid, name, img, price }: AddToCartProps) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <Button
        onClick={() => {
          dispatch({
            type: "ADD",
            payload: { prodid, name, img, price },
          });
          console.log(state);
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
