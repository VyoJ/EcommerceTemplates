"use client"

// import { ActionMap, Operations, ProductPayload, ShoppingCartPayload } from "@/@types/globalTypes";
// import { prod } from "@/@types/product";
// import { ProductActions } from "@/@types/globalTypes";

// export const productReducer = (
//   state: prod[],
//   action: ProductActions
// ) => {
//   switch (action.type) {
//     case Operations.Create:
//       return [
//         ...state,
//         {
//           products: action.payload as prod
//         }
//       ];
//     case Operations.Delete:
//       return [...state.filter((product) => product.prodid !== action.payload.id)];
//     default:
//       return state;
//   }
// };






import { ActionMap, Operations, ProductPayload, ShoppingCartPayload } from "@/@types/globalTypes";
import { prod } from "@/@types/product";

type ProductType = {
  id: string;
  name: string;
  price: number;
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Operations.Create:
      return [
        ...state,
        {
          prodid: action.payload.prodid,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case Operations.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

export type ShoppingCartActions = ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Operations.Add:
      return state + 1;
    default:
      return state;
  }
};




// import { cartState, ActionInterface } from "@/@types/globalTypes";
// import { prod } from "@/@types/product";

// export const initialState: cartState = {
//     products: []
// }

// export const reducerFn = (state: cartState, action: ActionInterface): cartState => {
//     const { type, payload } = action

//     switch(type){
//         case "ADD_PRODUCTS":
//             return {
//                 ...state,
//                 products: payload as prod[]
//             }
//         default: return state
//     }
// }