import { GET_GENRES } from "../../constants/genres";
import END_POINTS from "../../../shared/constants/apiEndPoints";

export const getGenres = (params) => (dispatch) => {
  dispatch({
    type: GET_GENRES,
    payload: {
      method: "get",
      path: END_POINTS.GENRES,
      params,
    },
  });
};
