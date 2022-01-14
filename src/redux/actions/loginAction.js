import axios from "axios";
import { token, viewToken } from "../../contain/contain";
import { getCart } from "./cartAction";

export const checkLogin = (data) => {
  return {
    type: "CHECK_LOGIN",
    payload: data,
  };
};
export const getDataUser = (data) => {
  return {
    type: "GET_USER",
    payload: data,
  };
};
// export const getToken = (data) => (dispatch) => {
//   axios
//     .post("https://localhost:44305/api/Accounts/Login", data)

//     .then((response) => {
//       dispatch(checkLogin());
//       localStorage.setItem("token", response.data);
//       window.alert("Đăng nhập thành công");
//       dispatch(setDataUser());
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
export const setDataUser = (data) => (dispatch) => {
  let dataUser = {};
  if (token) {
    const decoded = JSON.parse(
      window.atob(localStorage.getItem("token").split(".")[1])
    );
    dataUser.id = decoded[viewToken.Id];
    dataUser.email = decoded[viewToken.email];
    dataUser.role = decoded[viewToken.role];
    dataUser.userName = decoded[viewToken.username];
    dispatch(getDataUser(dataUser));
    localStorage.setItem("user", JSON.stringify(dataUser));
  }
};
