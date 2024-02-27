import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login-slice";
import toDosReducer from "./toDos-slice";
import usersReducer from "./users-slice";
import userReducer from "./user-slice";
import { useDispatch } from "react-redux";
import sharedReducer from "./shared/shared-slice";
import { timeOut } from "./middleware/timeOut";
import { logger } from "./middleware/logger";
import { homeReducer } from "./home/home-reducer";

export const store = configureStore({
  reducer: {
    // logIn: loginReducer,
    // toDos: toDosReducer,
    users: usersReducer,
    user: userReducer,
    // shared: sharedReducer,
    // home: homeReducer,
  },

  middleware: (getDefaultMiddleWare: any) =>
    getDefaultMiddleWare().concat(timeOut, logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
