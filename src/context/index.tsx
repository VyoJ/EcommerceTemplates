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

  // const addToCart = (product: any) => {
  //   const updatedCart = [...state.items, product];
  //   dispatch({
  //     type: "ADD",
  //     payload: {
  //       items: updatedCart,
  //     },
  //   });
  // };

  // const removeFromCart = (id: string) => {
  //   const updatedCart = state.items.filter(
  //     (currentProduct: any) => currentProduct.id !== id
  //   );
  //   dispatch({
  //     type: "REMOVE",
  //     payload: {
  //       items: updatedCart,
  //     },
  //   });
  // };

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// "use client"

// // import React, { createContext, useReducer, Dispatch } from "react";
// // import { cartStateType } from "@/@types/globalTypes";
// // import { prod } from "@/@types/product";
// // import { productReducer } from "@/reducer";
// // import { ProductActions } from "@/@types/globalTypes";

// // const cartState: cartStateType = { products: [] }

// // const AppContext = createContext<{
// //   state: cartStateType;
// //   dispatch: Dispatch<ProductActions>;
// // }> ({
// //   state: cartState,
// //   dispatch: () => null,
// // });

// // const ReducerFn = (
// //   products: prod[],
// //   action: ProductActions
// // ) => ({
// //   products: productReducer(products, action),
// // });

// // const AppProvider = ({ children }: { children: any }) => {
// //   const [state, dispatch] = useReducer(ReducerFn, initialState);

// //   return (
// //     <AppContext.Provider value={{ state, dispatch }}>
// //       {children}
// //     </AppContext.Provider>
// //   );
// // };

// // export { AppProvider, AppContext };

// import React, { createContext, useReducer, Dispatch } from "react";
// import {
//   productReducer,
//   shoppingCartReducer,
//   ProductActions,
//   ShoppingCartActions,
// } from "@/reducer/index";
// import { Operations } from "@/@types/globalTypes";

// type ProductType = {
//   id: string;
//   name: string;
//   price: number;
// };

// type InitialStateType = {
//   products: ProductType[];
//   shoppingCart: number;
// };

// const initialState = {
//   products: [],
//   shoppingCart: 0,
// };

// const AppContext = createContext<{
//   state: InitialStateType;
//   dispatch: Dispatch<ProductActions | ShoppingCartActions>;
// }>({
//   state: initialState,
//   dispatch: () => null,
// });

// const mainReducer = (
//   { products, shoppingCart }: InitialStateType,
//   action: ProductActions | ShoppingCartActions
// ) => ({
//   products: productReducer(products, action),
//   shoppingCart: shoppingCartReducer(shoppingCart, action),
// });

// const AppProvider = ({ children }: { children: any }) => {
//   const [state, dispatch] = useReducer(mainReducer, initialState);

//   return (
//     <AppContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export { AppProvider, AppContext };

// // const cartState = {
// //   products: [],
// // };

// // const AppContext = createContext<{
// //   state: cartStateType;
// //   dispatch: React.Dispatch<any>;
// // }>({
// //   state: cartState,
// //   dispatch: () => null,
// // });

// // const mainReducer = ({ products, shoppingCart }, action) => ({
// //   products: productReducer(products, action),
// //   shoppingCart: shoppingCartReducer(shoppingCart, action),
// // });

// // const AppProvider: React.FC = ({ children }) => {
// //   const [state, dispatch] = useReducer(mainReducer, initialState);

// //   return (
// //     <AppContext.Provider value={{state, dispatch}}>
// //       {children}
// //     </AppContext.Provider>
// //   )
// // }

// // export { AppContext, AppProvider };
