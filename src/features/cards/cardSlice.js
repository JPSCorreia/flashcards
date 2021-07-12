import { createSlice } from "@reduxjs/toolkit";

const cardSliceOptions = {
  name: 'cards',
  initialState: {
    cards: {

    }
  },
  reducers: {

    addCard: (state, action) => {
      let obj = action.payload;
      state.cards[action.payload.id] = obj;
    }

  }
  
}


export const cardsSlice = createSlice(cardSliceOptions);

export const cardsSelector = (state) => state.cards.cards;

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
