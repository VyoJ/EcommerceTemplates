"use client"

import React, { useContext } from "react";
// import { AppContext } from "@/context";
// import { Operations } from "@/@types/globalTypes";
import { Button } from "./ui/button";

const AddToCart = () => {
  // const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <Button
        // onClick={() => {
        //   dispatch({
        //     type: Operations.Add,
        //   });
        //   console.log(state.shoppingCart)
        // }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
