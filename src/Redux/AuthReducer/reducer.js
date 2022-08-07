import * as types from "./actionTypes";
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};
export const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.USER_LOGIN_SUCESS:
      return {
        ...oldState,
        isLoading: false,
        isAuth: true,
        token: action.payload,
        isError: false,
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        token: "",
        isError: true,
      };
    default:
      return oldState;
  }
};
