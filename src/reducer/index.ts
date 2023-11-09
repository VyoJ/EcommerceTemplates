"use client";

import { CartState, CartAction } from "@/@types/globalTypes";
import { Item } from "@/@types/globalTypes";

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD":
      const existingItem = state.items.find(
        (item: Item) => item.prodid === action.payload.prodid
      );

      // console.log("existing",existingItem);

      if (existingItem) {
        // console.log("exist")
        return {
          ...state,
          items: state.items.map((item: Item) =>
            item.prodid === action.payload.prodid
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // console.log("not exist");
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter(
          (item: Item) => item.prodid !== action.payload.prodid
        ),
      };
    default:
      return state;
  }
};