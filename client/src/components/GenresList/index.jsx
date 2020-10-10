import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { CATALOG_PATH, ROOT_PATH } from "../../shared/constants/links";

import "./style.css";

const GenresList = ({ genres }) => {
  return (
    <div className="genres-list">
      <Link className="genres-list__link" to={ROOT_PATH}>
        Home
      </Link>
      {genres.map(({ _id, title }) => (
        <Link
          to={`${CATALOG_PATH}?genre=${_id}`}
          key={_id}
          className="genres-list__link"
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default connect(
  ({ genres }) => ({
    genres: genres.instances,
  }),
  {}
)(GenresList);
