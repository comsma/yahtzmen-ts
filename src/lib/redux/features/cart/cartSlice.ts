import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartI {
  items: CartItemI[];
}

interface CartItemI {
  id: string;
  name: string;
  qty: number;
  image: string;
  price: number;
}

const initialState: CartI = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemI>) => {
      //finds an object by itemId if exists
      const index = state.items.findIndex(
        (obj) => obj.id === action.payload.id,
      );
      if (index > -1) {
        alert("Item is already in the cart");
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<String>) => {
      //finds object by itemId
      const index = state.items.findIndex(
        (obj) => obj.id === action.payload,
      );
      state.items.splice(index, 1);
    },
    incrementItem: (state, action: PayloadAction<String>) => {
      const index = state.items.findIndex(
        (obj) => obj.id === action.payload,
      );
      // increments item qty
      state.items[index].qty += 1;
    },
    decrementItem: (state, action: PayloadAction<String>) => {
      const index = state.items.findIndex(
        (obj) => obj.id === action.payload,
      );
      // decrements item qty
      if (state.items[index].qty <= 1) {
        state.items.splice(index, 1);
      } else {
        state.items[index].qty -= 1;
      }
    },
    emptyCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, incrementItem, decrementItem, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
