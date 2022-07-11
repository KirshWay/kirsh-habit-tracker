import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import HabitReducer from "@store/slices/habitSlice";

export const store = configureStore({
  reducer: {
    habit: HabitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
