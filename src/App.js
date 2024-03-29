/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Routerr from "./Router/Router";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDataUser } from "./redux/actions/loginAction";
import { getDataCart } from "./redux/actions/cartAction";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDataUser());
    dispatch(getDataCart());
  }, []);
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        size={false}
      />
      <Header />
      <Routerr />
      <Footer />
    </Router>
  );
}

export default App;
