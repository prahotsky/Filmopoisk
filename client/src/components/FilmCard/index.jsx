import React from "react";

import "./style.css";

const FilmCard = ({ film }) => {
  return (
    <div className="film-card">
      <div className="film-card__image-wrapper">
        <img className="film-card__image" src={film.poster} alt="film poster" />
      </div>
      <div className="film-card__data">
        <p className="film-card__title">{film.title}</p>
      </div>
    </div>
  );
};

export default FilmCard;
