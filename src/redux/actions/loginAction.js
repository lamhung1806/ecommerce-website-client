import { token, viewToken } from "../../contain/contain";

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
export const setDataUser = (data) => (dispatch) => {
  let dataUser = {};
  if (token()) {
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
