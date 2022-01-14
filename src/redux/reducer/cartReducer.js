const cartInitialState = {
  cartData: [],
};
const cart = (state = cartInitialState, action) => {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cartData: action.payload,
      };
    case "CREATE_CART":
      return {
        ...state,
      };
    case "DELETE_CART":
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default cart;
