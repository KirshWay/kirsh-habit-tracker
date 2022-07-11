import Habits from "@apiRequests/habits";
import { Habit } from "@interfaces/index";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Habit[] = [];

export const getAllHabits = createAsyncThunk("habits/getAllHabits", async (_, { rejectWithValue }) => {
  await Habits.getAll().then(({ data }) => console.log(data));
});

export const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    add: (state) => {
      state.push({
        id: Date.now(),
        title: "new habit",
        timesWeek: 3,
      });
    },
  },
});

export const { add } = habitSlice.actions;

export default habitSlice.reducer;
