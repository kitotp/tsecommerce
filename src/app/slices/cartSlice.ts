import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../api/queries/productsQuery";



function loadCart(): Product[] {
    const saved = localStorage.getItem('cart')
    if (!saved) return []
    try {
        return JSON.parse(saved) as Product[]
    } catch {
        console.warn('Failed to parse cart from localStorage')
        return []
    }
}

const initialState = {
    cart: loadCart()
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart(state, action) {
            const product = state.cart.find(item => item.id === action.payload.id)

            if (product) {
                product.quantity++
            }
            else {
                state.cart.push(action.payload)
            }

        },
        removeFromCart(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        incItem(state, action) {
            const product = state.cart.find(item => item.id === action.payload)
            if (product) {
                product.quantity++
            }
        },
        decItem(state, action) {
            const product = state.cart.find(item => item.id === action.payload)
            if (product) {
                if (product.quantity === 1) {
                    state.cart = state.cart.filter(item => item.id !== action.payload)
                }
                else {
                    product.quantity--
                }
            }
        }
    }
})

export const { addToCart, removeFromCart, incItem, decItem } = cartSlice.actions
export default cartSlice.reducer
