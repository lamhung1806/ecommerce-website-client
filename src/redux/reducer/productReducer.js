import { sort, sortSmall } from "../../contain/contain";

const productInitialState = {
  dataProduct: [],
  aProduct: [],
};
const product = (state = productInitialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT": {
      return {
        ...state,
        dataProduct: action.payload,
      };
    }
    case "GET_APRODUCT": {
      return {
        ...state,
        aProduct: action.payload,
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
    case "GET_BEST_SOLD": {
      return {
        ...state,
        dataProduct: action.payload,
      };
    }
    case "GET_FIRTS_PRODUCT": {
      return {
        ...state,
        dataProduct: action.payload,
      };
    }
    case "GET_SALE_PRODUCT": {
      return {
        ...state,
        dataProduct: action.payload,
      };
    }
    default:
      return state;
  }
};
export default product;
