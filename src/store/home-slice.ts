import { createSlice } from "@reduxjs/toolkit";

type logInState = {
  users: [] | null;
};

const initialState: logInState = {
  users: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setUser: (state: any, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = homeSlice.actions;

export default homeSlice.reducer;
