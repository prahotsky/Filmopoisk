import React, { useEffect } from "react";
import { connect } from "react-redux";

import FilmsList from "../../containers/FilmsList";

import { getFilms } from "../../store/actions/films";

const MainPage = ({ getFilms, films }) => {
  useEffect(() => {
    getFilms({ featured: true });
  }, [getFilms]);

  return (
    <div>
      <FilmsList films={films} />
    </div>
  );
};

export default connect(
  ({ films }) => ({
    films: films.instances,
  }),
  { getFilms }
)(MainPage);
