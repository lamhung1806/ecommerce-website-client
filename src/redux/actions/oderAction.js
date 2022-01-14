import axios from "axios";
import { url } from "../../contain/contain";
import { token } from "../../contain/contain";
import { notifyError, notifySuccess } from "../../contain/msg";

export const createOderAction = (data) => {
  return {
    type: "CREATE_ODER",
    payload: data,
  };
};

export const createOder = (data) => (dispatch) => {
  axios
    .post(`${url}Orders/Create`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => {
      notifySuccess();
    })
    .catch((error) => {
      notifyError();
    });
};
