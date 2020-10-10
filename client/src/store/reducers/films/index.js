import { GET_FILMS_SUCCESS, GET_FILMS_ERROR } from "../../constants/films";
import { START_LOADING, STOP_LOADING } from "../../constants/loading";

const initialState = {
  instances: [],
  loading: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FILMS_SUCCESS:
      return {
        ...state,
        instances: payload.data,
      };
    case GET_FILMS_ERROR:
      console.error(payload, "get films error");
      return state;
    case START_LOADING:
      return { ...state, loading: state.loading + 1 };
    case STOP_LOADING:
      return { ...state, loading: state.loading - 1 };
    default:
      return state;
  }
};
