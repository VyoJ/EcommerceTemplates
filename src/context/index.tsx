"use client";

import { createContext,useReducer } from "react";
import { CartState, CartAction } from "@/@types/globalTypes";
import { cartReducer } from "@/reducer";

const initialState: CartState = {
  items: [],
};

export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};