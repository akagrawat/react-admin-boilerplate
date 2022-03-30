import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import userReducer from "./user";
// import homeReducer from "./home";
// import apiReducer from "./api";

const createRootReducer = (history) =>
  combineReducers({
    // user: userReducer,
    // home: homeReducer,
    // api: apiReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
