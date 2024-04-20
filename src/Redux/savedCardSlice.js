import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

export const CardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload);
    },
    removeCard(state, action) {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },
  },
});

export const { addCard,removeCard } = CardSlice.actions;
export default CardSlice.reducer;
