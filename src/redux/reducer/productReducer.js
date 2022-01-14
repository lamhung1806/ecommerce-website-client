import { sort, sortSmall } from "../../contain/contain";

const productInitialState = {
  dataProduct: [],
};
const product = (state = productInitialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT": {
      return {
        ...state,
        dataProduct: action.payload,
      };
    }
    case "GET_PRODUCT_CATEGORY": {
      return {
        ...state,
        dataProduct: action.payload,
      };
    }
    case "SEARCH_PRODUCT": {
      return {
        ...state,
        dataProduct: action.payload,
      };
    }
    case "SORT_PRODUCT": {
      return {
        ...state,
        dataProduct: sort(action.payload).slice(0, action.payload.length),
      };
    }
    case "SORT_PRODUCT_SMALL": {
      return {
        ...state,
        dataProduct: sortSmall(action.payload).slice(0, action.payload.length),
      };
    }
    default:
      return state;
  }
};
export default product;
