import { createSlice } from '@reduxjs/toolkit'

const priceFromString = (price) => {
  try {
    return price.match(/\d+/)[0]/1;
  } catch (e) {
    console.error(`Failed to parse price. ${e}`);
  }
}

const initialCartState = {
  count: 0,
  total: 0, 
  items: {},
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    ...initialCartState,
  },
  reducers: {
    addItem: (state, action) => {
      const itemId = action.payload.id;
      const price = priceFromString(action.payload.price);
      state.count += 1;
      state.total += price;

      if (state.items[itemId]) {
        state.items[itemId].count += 1;
      } else {
        state.items[itemId] = {
          count: 1,
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price
        };
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload.id;
      const price = priceFromString(action.payload.price);
      if (!state.items[itemId]) return state;

      state.count -= 1;
      state.total -= price;

      if (state.items[itemId]) {
        state.items[itemId].count -= 1;
      }

      if (state.items[itemId].count <= 0) {
        delete state.items[itemId];
      }
    },
    removeProduct: (state, action) => {
      const itemId = action.payload.id;
      const price = priceFromString(action.payload.price);
      if (!state.items[itemId]) return state;

      state.count -= state.items[itemId].count;
      state.total -= (state.items[itemId].count * price);

      delete state.items[itemId];
    },
    emptyCart: (state) => {
      state = {...initialCartState};
      return state;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, removeProduct, emptyCart } = cartSlice.actions

export default cartSlice.reducer