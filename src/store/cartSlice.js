import { createSlice } from '@reduxjs/toolkit';
import { getLocalCart } from '../helpers';

const initialState = getLocalCart() || {
  itemCount: 0,
  items: []
};
/*
items:
  [{
    item: {id: , model: , brand: , ...},
    qty: 2,
  },
  {...}]


payload:
{
  item: {id: , model: ...},
  qty: 2,
}
*/

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.itemCount += payload.qty;
      state.items.push(payload);
    },
    removeItem: (state, {payload}) => {
      state.itemCount -= payload.qty;
      state.items = state.items.filter(({item}) => item.id != payload.item.id);
    },
    clearCart: (state, action) => {
      state.itemCount = 0;
      state.items = [];
    },
    setCart: (state, {payload}) => {
      state.itemCount = payload.itemCount;
      state.items = payload.items;
    }
  }
});

export const { addItem, removeItem, clearCart, setCart } = cartSlice.actions;
export { cartSlice };