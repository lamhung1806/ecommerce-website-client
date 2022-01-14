import { combineReducers } from "redux";
import product from "./productReducer";
import cart from "./cartReducer";
import statusFormRuducer from "./statusFormReducer";
import login from "./loginReducer";
import category from "./categoryReducer";

const root = combineReducers({
  product: product,
  cart: cart,
  statusFormReducer: statusFormRuducer,
  login: login,
  category: category,
});

export default root;
