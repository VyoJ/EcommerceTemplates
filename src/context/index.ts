import { createContext } from "react";
import { cartState } from "@/@types/globalTypes";

export const ctx = createContext<cartState | null>(null)

const contextProvider=({children})=>{
    return (
        <ctx.Provider>
        {children}
        </ctx.Provider>
    )
}