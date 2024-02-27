import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";

export const userSelector = (state: RootState) => state.user;

export const userNameSelector = createSelector(
  userSelector,
  (user) => user.name
);
// export const userIdSelector = createSelector(userSelector, (user) => user.userId);
