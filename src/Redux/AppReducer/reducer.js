import * as types from "./actionTypes";
const initialState = {
  musicRecords: [],
  isLoading: false,
  isError: false,
};
export const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case types.GET_MUSIC_RECORD_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    case types.GET_MUSIC_RECORD_SUCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        musicRecords: action.payload,
      };
    case types.GET_MUSIC_RECORD_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    default:
      return oldState;
  }
};
