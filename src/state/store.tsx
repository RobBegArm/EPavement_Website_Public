import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./menu";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export const rootReducer = combineReducers({
  menu: menuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
