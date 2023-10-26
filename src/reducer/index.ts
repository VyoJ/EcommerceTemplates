import { cartState, ActionInterface } from "@/@types/globalTypes";
import { prod } from "@/@types/product";

export const initialState: cartState = {
    products: []
}

export const reducerFn = (state: cartState, action: ActionInterface): cartState => {
    const { type, payload } = action

    switch(type){
        case "ADD_PRODUCTS":
            return {
                ...state,
                products: payload as prod[]
            }
        default: return state
    }\]
}