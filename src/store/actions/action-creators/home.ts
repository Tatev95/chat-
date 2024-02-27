import { SET_USERS } from "../action-types/home";

export const setNewUsers = (payload: any) => ({
  type: SET_USERS,
  payload,
});

// kanch  store.dishpatch(setUsers([{id:1}]))
