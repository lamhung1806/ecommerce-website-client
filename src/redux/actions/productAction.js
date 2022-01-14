import axios from "axios";
import { url } from "../../contain/contain";

export const getProduct = (data) => ({
  type: "GET_PRODUCT",
  payload: data,
});
export const ProductbyCategoryAction = (data) => ({
  type: "GET_PRODUCT_BY_CATEGORY",
  payload: data,
});
export const searchProductAction = (data) => ({
  type: "SEARCH_PRODUCT",
  payload: data,
});
export const getProducByCategoty = (data) => ({
  type: "GET_PRODUCT",
  payload: data,
});

export const getProducts = () => (dispatch) => {
  // axios.defaults.headers.common["Authorization"] = axios;
  axios
    .get("https://localhost:44305/api/Products/GetAll", {})
    .then((response) => {
      dispatch(getProduct(response.data));
    });
};
export const ProductbyCategory = (data) => (dispatch) => {
  // axios.defaults.headers.common["Authorization"] = axios;
  axios
    .get(`https://localhost:44305/api/Products/SearchByCategory/${data}`, {})
    .then((response) => {
      dispatch(getProduct(response.data));
    });
};
export const searchProduct = (data) => (dispatch) => {
  // axios.defaults.headers.common["Authorization"] = axios;
  axios
    .get(`${url}Products/SearchByName/${data}`, null)
    .then((response) => {
      dispatch(searchProductAction(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
