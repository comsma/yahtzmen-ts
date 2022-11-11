import {CartI, CartItemI} from "../interfaces/cart.interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: CartI = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItemI>) =>{
            const index = state.items.findIndex((obj) => obj.itemId === action.payload.itemId)
            if(index > -1) {
                state.items[index].itemQty += action.payload.itemQty
            } else {
                state.items.push(action.payload)
            }
        },
        removeItem: (state, action: PayloadAction<String>) => {
            //finds object by itemId
            const index = state.items.findIndex((obj) => obj.itemId === action.payload)
            state.items.splice(index, 1)
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer