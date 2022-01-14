import axios from "axios";
import { url } from "../../contain/contain";
import { token } from "../../contain/contain";

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
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
