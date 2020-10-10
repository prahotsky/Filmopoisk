import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { saveState, loadState } from "./localStorage";
import rootReducer from "./reducers";
import api from "./middlewares/api";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middleware = [thunk, api];

const configureStore = (preloadedState) =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware))
  );

const preloadedState = loadState();

const store = configureStore(preloadedState);

store.subscribe(() => {
  saveState({
    user: store.getState().user,
  });
});

export default store;
