import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/types";

type UserState = {
  name: string | null;
  // userId: string | null;
};

const initialState: UserState = {
  name: "",
  // userId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      console.log(action.payload, "action.payload");

      state.name = action.payload.name;
      // state.userId = action.payload.userId;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
