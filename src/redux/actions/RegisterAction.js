import axios from "axios";

export const createUser = (data) => (dispatch) => {
  console.log(data);
  axios
    .post("https://localhost:44305/api/Accounts/Register", data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
