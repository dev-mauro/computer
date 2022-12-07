import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemCount: 0,
  items: []
}
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
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;
export { cartSlice };