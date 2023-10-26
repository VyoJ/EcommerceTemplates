import { prod } from "@/@types/product";

export type cartState = {
  products: prod[];
};

export interface ActionInterface {
  type: string;
  payload: unknown;
}
