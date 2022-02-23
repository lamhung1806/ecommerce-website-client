import axios from "axios";
import { url, user } from "../../contain/contain";

export const getUserOderAction = (data) => ({
  type: "GET_USER_ODER",
  payload: data,
});
export const getDetailUserOderAction = (data) => ({
  type: "GET_DETAIL_USER_ODER",
  payload: data,
});
export const cancelOderAction = (data) => ({
  type: "CANCEL_ACTION",
  payload: data,
});

export const getUserOder = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}Orders/GetByUserId/${user().id}`);
    dispatch(getUserOderAction(response.data));
  } catch (err) {
    console.log(err);
  }
};
export const getDetailUserOder = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}Orders/GetById/${data}`);
    dispatch(getDetailUserOderAction(response.data));
  } catch (err) {
    console.log(err);
  }
};
