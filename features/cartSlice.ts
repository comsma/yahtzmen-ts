import { CartI, CartItemI } from '../interfaces/cart.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CartI = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItemI>) => {
            //finds object by itemId if exists
            const index = state.items.findIndex(
                (obj) => obj.itemId === action.payload.itemId
            )
            if (index > -1) {
                alert('Item is already in the cart')
            } else {
                state.items.push(action.payload)
            }
        },
        removeItem: (state, action: PayloadAction<String>) => {
            //finds object by itemId
            const index = state.items.findIndex(
                (obj) => obj.itemId === action.payload
            )
            state.items.splice(index, 1)
        },
        incrementItem: (state, action: PayloadAction<String>) => {
            const index = state.items.findIndex(
                (obj) => obj.itemId === action.payload
            )
            // increments item qty
            state.items[index].itemQty += 1
        },
        decrementItem: (state, action: PayloadAction<String>) => {
            const index = state.items.findIndex(
                (obj) => obj.itemId === action.payload
            )
            // decrements item qty
            if (state.items[index].itemQty <= 1) {
                state.items.splice(index, 1)
            } else {
                state.items[index].itemQty -= 1
            }
        },
        emptyCart: (state) => {
            state.items.length = 0
        },
    },
})

export const { addItem, removeItem, incrementItem, decrementItem, emptyCart } =
    cartSlice.actions

export default cartSlice.reducer
