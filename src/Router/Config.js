import Login from "../component/login/Login1";
import Register from "../component/login/Register";
import ProductDetail from "../component/productDetail/ProductDetail";
import Cart_Description from "../component/cartDetail/CartDetail";

export const Router = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/Register",
    component: Register,
  },
  {
    path: "/product/:id",
    component: ProductDetail,
  },
  {
    path: "/cart",
    component: Cart_Description,
  },
];
