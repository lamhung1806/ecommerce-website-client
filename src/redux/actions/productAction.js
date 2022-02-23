import axios from "axios";
import { url } from "../../contain/contain";

export const getProduct = (data) => ({
  type: "GET_PRODUCT",
  payload: data,
});
export const getAProductAction = (data) => ({
  type: "GET_APRODUCT",
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
export const sortProduct = (data) => ({
  type: "SORT_PRODUCT",
  payload: data,
});
export const sortProductSmall = (data) => ({
  type: "SORT_PRODUCT_SMALL",
  payload: data,
});
export const GetBestSoldAction = (data) => ({
  type: "GET_BEST_SOLD",
  payload: data,
});
export const getFirstProductAction = (data) => ({
  type: "GET_FIRTS_PRODUCT",
  payload: data,
});
export const getSaleProductAction = (data) => ({
  type: "GET_SALE_PRODUCT",
  payload: data,
});

export const getProducts = () => (dispatch) => {
  axios
    .get("https://localhost:44305/api/Products/GetAll", {})
    .then((response) => {
      dispatch(getProduct(response.data));
    });
};
export const getAProduct = (data) => (dispatch) => {
  axios.get(`${url}Products/GetById/${data}`, {}).then((response) => {
    dispatch(getAProductAction(response.data));
  });
};
export const ProductbyCategory = (data) => (dispatch) => {
  axios
    .get(`https://localhost:44305/api/Products/SearchByCategory/${data}`, {})
    .then((response) => {
      dispatch(getProduct(response.data));
    });
};
export const searchProduct = (data) => (dispatch) => {
  axios
    .get(`${url}Products/SearchByName/${data}`, null)
    .then((response) => {
      dispatch(searchProductAction(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const GetBestSold = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}Products/GetBestSold`);
    dispatch(GetBestSoldAction(response.data));
  } catch (err) {
    console.error(err);
  }
};
export const getFirstProduct = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}Products/GetLast`);
    dispatch(getFirstProductAction(response.data));
  } catch (err) {
    console.error(err);
  }
};
export const getSaleProduct = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}Products/GetBestPromotion`);
    dispatch(getFirstProductAction(response.data));
  } catch (err) {
    console.error(err);
  }
};
