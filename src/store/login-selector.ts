import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";

export const signInSelector = (state: RootState) => state.users;

export const userSelector = createSelector(
  signInSelector,
  (signIn) => signIn.usersList
);
