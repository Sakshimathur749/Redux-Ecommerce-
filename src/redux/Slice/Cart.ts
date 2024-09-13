import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../type/type";


export interface CartItem extends Product {
  totalAmount:number,
  quantity:number,
}
interface CartState {
  products: CartItem[];
}
const initialState: CartState = {
  products:[],  
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.totalAmount = item.price * item.quantity;
      } else {
        state.products.push({ 
          ...action.payload, 
          quantity: 1, 
          totalAmount: action.payload.price // Initialize totalAmount
        });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          item.totalAmount = item.price * item.quantity;
        } else {
          state.products = state.products.filter(item => item.id !== action.payload);
        }
      }
  }}
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer