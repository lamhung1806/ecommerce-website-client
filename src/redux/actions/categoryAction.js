import axios from "axios";

export const getCategoryAction = (data) => {
  return {
    type: "GET_CATEGORY",
    payload: data,
  };
};

export const getCategory = () => (dispatch) => {
  axios
    .get("https://localhost:44305/api/Categories/GetAll", "get", null, dispatch)
    .then((response) => {
      dispatch(getCategoryAction(response.data));
    });
};
