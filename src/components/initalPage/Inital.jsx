import React from "react";
import Header from "./Main/components/Header/Header";
import Slider from "./Main/components/Slider";
import Categories from "./Main/Categories/Categories";
import FilmsList from "./Main/components/FIlmsList/FilmsList";
import Footer from "../Footer/Footer";

const Inital = ({ onFilter, films, onSearch, searchResults }) => {
  return (
    <div className="main">
      <section className="contain">
        <Header films={films} onSearch={onSearch} />
        <Slider />
        <Categories onFilter={onFilter} />

        <FilmsList films={searchResults.length > 0 ? searchResults : films} />
        <Footer />
      </section>
    </div>
  );
};

export default Inital;
