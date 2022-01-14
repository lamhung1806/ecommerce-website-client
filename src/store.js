import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import root from "./redux/reducer/root";
// import { createLogger } from "redux-logger";

// const middleware = [thunk];
// if (process.env.NODE_ENV !== "production") {
//   middleware.push(createLogger());
// }

const store = createStore(root, applyMiddleware(thunk));

export default store;
