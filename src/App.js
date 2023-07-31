import React, { useState, useMemo } from "react";
import UseTimeout from "./UseTime";
import { FILMSHISTORY } from "./FILMSHISTORY";
import "./App.css";

function App() {
  const [filterText, setFilterText] = useState("Բոլորը");
  const [searchResults, setSearchResults] = useState([]);

  const filterFilms = (category) => {
    if (category === "Բոլորը") {
      return FILMSHISTORY;
    }
    return FILMSHISTORY.filter((elm) => elm.category === category);
  };

  const films = useMemo(() => {
    if (searchResults.length > 0) {
      return searchResults;
    } else {
      return filterFilms(filterText);
    }
  }, [filterText, searchResults]);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const results = FILMSHISTORY.filter((film) =>
      film.name.toLowerCase().includes(lowerCaseQuery)
    );
    setSearchResults(results);
  };

  return (
    <UseTimeout
      films={films}
      onFilter={(text) => {
        setFilterText(text);
      }}
      onSearch={handleSearch}
      searchResults={searchResults}
    />
  );
}

export default App;
