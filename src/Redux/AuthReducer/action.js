import * as types from "./actionTypes";
import axios from "axios";
export const login = (data) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post("https://reqres.in/api/login", data)
    .then((res) =>
      dispatch({ type: types.USER_LOGIN_SUCESS, payload: res.data.token })
    )
    .catch((e) => dispatch({ type: types.USER_LOGIN_FAILURE }));
};
export const updateMusicRecords = (id, updateData) => (dispatch) => {
  axios
    .patch(`https://sumitfirstapi.herokuapp.com/albums/${id}`, updateData)
    .then((res) => dispatch({ type: types.UPDATE_MUSIC_RECORD_SUCESS }));
};
