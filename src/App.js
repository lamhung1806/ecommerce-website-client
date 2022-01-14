/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Routerr from "./Router/Router";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/actions/productAction";
import { setDataUser } from "./redux/actions/loginAction";
import { getDataCart } from "./redux/actions/cartAction";
import { getCategory } from "./redux/actions/categoryAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(setDataUser());
    dispatch(getCategory());
    dispatch(getDataCart());
  }, []);
  return (
    <Router>
      <Header />
      <Routerr />
      <Footer />
    </Router>
  );
}

export default App;
