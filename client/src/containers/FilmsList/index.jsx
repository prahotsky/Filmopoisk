import React from "react";

import FilmCard from "../../components/FilmCard";

import "./style.css";

const FilmsList = ({ films }) => {
  return (
    <div className="films-list">
      {films.map((film) => (
        <FilmCard key={film._id} film={film} />
      ))}
    </div>
  );
};

export default FilmsList;
