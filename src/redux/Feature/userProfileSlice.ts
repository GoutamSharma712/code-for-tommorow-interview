// src/features/counter/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface CardState {
  cardData: any;
}

const initialState: CardState = {
  cardData: [],
};

const cardSlice: any = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCardData: (state, action) => {
      state.cardData = action.payload;
    },
   
  },
});

export const { setCardData } = cardSlice.actions;

export default cardSlice.reducer;
