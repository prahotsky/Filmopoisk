import React, { useEffect } from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import FilmsList from "../../containers/FilmsList";

import { getFilms } from "../../store/actions/films";

const Catalog = ({ getFilms, films, location }) => {
  useEffect(() => {
    let params = queryString.parse(location.search);
    getFilms(params);
  }, [getFilms, location]);
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
)(Catalog);
