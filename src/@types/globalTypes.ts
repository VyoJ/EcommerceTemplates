import { prod } from "@/@types/product";

export type registerErrorType = {
  email?: string;
  name?: string;
  password?: string;
};

export type LoginPayloadType = {
  email: string;
  password: string;
};

export type LoginErrorType = {
  email?: string;
  password?: string;
};


export type cartStateType = {
  products: prod[];
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export interface ActionInterface {
  type: string;
  payload: unknown;
}

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined ? { type: Key;} : {
        type: Key;
        payload: M[Key];
      };
};

export enum Operations {
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT",
}

export type ProductPayload = {
  [Operations.Create]: prod;
  [Operations.Delete]: { id: string };
};

export type ShoppingCartPayload = {
  [Operations.Add]: undefined;
};