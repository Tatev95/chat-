import { SET_USERS } from "../actions/action-types/home";
import { UserActionTypes } from "./home-action";

interface UserState {
  name: string | null;
  id: number | null;
}

const initialState: UserState = {
  name: null,
  id: null,
};

export const homeReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
      };
    default:
      return state;
  }
};
