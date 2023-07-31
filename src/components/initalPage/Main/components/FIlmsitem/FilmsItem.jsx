import React from "react";
import { Link } from "react-router-dom";

const FilmsItem = ({ film }) => {
  return (
    <Link to={`/film/${film.id}`} className="filmsItem">
      <img alt="" src={require("../../../../../" + film.photo)} />
      <p>{film.name}</p>
    </Link>
  );
};

export default FilmsItem;
