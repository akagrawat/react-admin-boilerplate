import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
// import apiMiddleware from "state/middleware/api";
// import unauthorizeHandler from "state/middleware/unauthorizeHandler";
import thunkMiddleware from "redux-thunk";

export const history = createBrowserHistory();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    routerMiddleware(history),
    thunkMiddleware,
    // apiMiddleware,
    // unauthorizeHandler
  )
  // other store enhancers if any
);

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    enhancer
  );

  return store;
}
