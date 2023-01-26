import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IPizza} from "../../models/IPizza";
import { CalcTotalPrice } from "../../utils/utils";

interface basketState {
    items: IPizza[],
    totalPrice: number
}

const initialState: basketState = {
    items: [],
    totalPrice: 0
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers:{
    add(state, action: PayloadAction<IPizza>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if(findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }
      state.totalPrice = CalcTotalPrice(state.items);
    },
    minus(state, action: PayloadAction<IPizza>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem && findItem.count === 1) {
        state.items = state.items.filter( el => el.id !== action.payload.id)
      } else if(findItem) {
        findItem.count--;
      }
      state.totalPrice = CalcTotalPrice(state.items);
    }
  }
});


export default basketSlice.reducer;