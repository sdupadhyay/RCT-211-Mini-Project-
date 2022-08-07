import * as types from "./actionTypes";
import axios from "axios";
export const getMusicRecord = (params) => (dispatch) => {
  dispatch({ type: types.GET_MUSIC_RECORD_REQUEST });
  axios
    .get("https://sumitfirstapi.herokuapp.com/albums", params)
    .then((res) => {
      dispatch({
        type: types.GET_MUSIC_RECORD_SUCESS,
        payload: res.data,
      });
    })
    .catch((res) => dispatch({ type: types.GET_MUSIC_RECORD_FAILURE }));
};
