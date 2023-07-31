import React from "react";
import { Link } from "react-router-dom";
import FilmsItem from "../FIlmsitem/FilmsItem";

const FilmsList = ({ films }) => {
  return (
    <div className="filmslistparrent">
    <div className="filmsList">
      {films.map((film) => (
        <Link key={film.id} to={`/films/${film.id}`}>
          <FilmsItem film={film} />
        </Link>
      ))}
    </div>
    </div>
  );
};

export default FilmsList;
