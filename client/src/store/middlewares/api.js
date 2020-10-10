import axios from "axios";
import { START_LOADING, STOP_LOADING } from "../constants/loading";

const PREFIX = "@@api/";
const STATUSES = { success: "SUCCESS", error: "ERROR" };

export const BASE_URL = "http://localhost:8080";

export default (store) => (next) => (action) => {
  if (action.type.startsWith(PREFIX)) {
    const { method, data, path, params, innerData } = action.payload;
    if (typeof method !== "undefined") {
      store.dispatch({ type: START_LOADING });
      (method === "get"
        ? axios[method](BASE_URL + path, { params: params })
        : axios[method](BASE_URL + path, data)
      ).then(
        (response) => {
          store.dispatch({
            type: `${action.type}_${STATUSES.success}`,
            payload: { data: response.data, innerData },
          });
          store.dispatch({ type: STOP_LOADING });
        },
        (e) => {
          store.dispatch({
            type: `${action.type}_${STATUSES.error}`,
            payload: e.response || e,
          });
          store.dispatch({ type: STOP_LOADING });
        }
      );
    }
  }
  next(action);
};
