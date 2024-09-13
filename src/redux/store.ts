import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice/Cart";

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;