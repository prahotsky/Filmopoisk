import { combineReducers } from "redux";
import filmsReducer from "./films";
import genresReducer from "./genres";

const mainReducer = combineReducers({
  films: filmsReducer,
  genres: genresReducer,
});

export default mainReducer;
