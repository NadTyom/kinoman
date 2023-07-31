import React from "react";
import { useParams } from "react-router-dom";

const FilmDetails = ({ films }) => {
  const { id } = useParams();
  const film = films.find((item) => item.id === parseInt(id));

  if (!film) {
    return <div>Ֆիլմը գոյություն չունի</div>;
  }

  return (
    <div className="filmDetails">
      <img src={film.photo} alt={film.name} />
      <h2>{film.name}</h2>
      <p>Категория: {film.category}</p>
    </div>
  );
};

export default FilmDetails;
