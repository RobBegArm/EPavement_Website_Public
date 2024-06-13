import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
  isOpen: boolean;
}

const initialMenuState: MenuState = { isOpen: false };

const menuSlice = createSlice({
  name: "menu",
  initialState: initialMenuState,
  reducers: {
    toggleMenu: (state): void => {
      state.isOpen = !state.isOpen;
    },
    openMenu: (state): void => {
      state.isOpen = true;
    },
    closeMenu: (state): void => {
      state.isOpen = false;
    },
  },
});

export const { toggleMenu, openMenu, closeMenu } = menuSlice.actions;

export const menuReducer = menuSlice.reducer;
