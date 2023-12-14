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

export type Item = {
  prodid: string;
  name: string;
  img: string;
  price: number;
  quantity: number;
};

export type CartState = {
  items: Item[];
};

export type CartAction = {
  type: string;
  payload: any;
};