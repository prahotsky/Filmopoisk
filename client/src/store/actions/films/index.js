import { GET_FILMS } from "../../constants/films";
import END_POINTS from "../../../shared/constants/apiEndPoints";

export const getFilms = (params) => (dispatch) => {
  dispatch({
    type: GET_FILMS,
    payload: {
      method: "get",
      path: END_POINTS.FILMS,
      params,
    },
  });
};
