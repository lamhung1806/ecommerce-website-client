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
    default:
      return state;
  }
};
export default product;
