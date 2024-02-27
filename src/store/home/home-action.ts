import { SET_USERS } from "../actions/action-types/home";

interface SetUserAction {
  type: typeof SET_USERS;
  payload: {
    name: string;
    id: number;
  };
}

export type UserActionTypes = SetUserAction;

export const setUser = (name: string, id: number): UserActionTypes => {
  return {
    type: SET_USERS,
    payload: {
      name,
      id,
    },
  };
};

// export const setUser = (payload: any, delayMs?: number): UserActionTypes => {
//   return {
//     type: SET_USERS,
//     payload,
//     delayMs,
//   };
// };
