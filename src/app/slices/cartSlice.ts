import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../api/queries/productsQuery";

const initialState = {
    cart: [] as Product[]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart(state, action) {
            state.cart.push(action.payload)
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer
