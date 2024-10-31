import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Starship } from "../hooks/types";

const initialState: Starship[] = [];

const slice = createSlice({
  name: "ships",
  initialState,
  reducers: {
    addShip(state, action: PayloadAction<Starship>) {
      state.push(action.payload);
    },
    removeShip(state, action: PayloadAction<Starship["url"]>) {
      const index = state.findIndex((ship) => ship.url === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addShip, removeShip } = slice.actions;

export const shipsReducer = slice.reducer;
