import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

store.subscribe(() => {
    const state = store.getState()
    localStorage.setItem('cart', JSON.stringify(state.cart.cart))
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export default store