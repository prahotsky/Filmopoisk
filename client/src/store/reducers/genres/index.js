import { GET_GENRES_SUCCESS, GET_GENRES_ERROR } from "../../constants/genres";

const initialState = {
  instances: [],
  loading: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GENRES_SUCCESS:
      return {
        ...state,
        instances: payload.data,
      };
    case GET_GENRES_ERROR:
      console.error(payload, "get genres error");
      return state;
    default:
      return state;
  }
};
