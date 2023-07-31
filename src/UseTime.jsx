import React, { useState, useEffect } from "react";
import Inital from "./components/initalPage/Inital";
import Intro from "./components/Intro/Intro";

const UseTime = ({ onFilter, films, onSearch, searchResults }) => {
  const [shouldShowComponent2, setShouldShowComponent2] = useState(false);

  const showComponent2 = () => {
    setShouldShowComponent2(true);
  };

  useEffect(() => {
    const timer = setTimeout(showComponent2, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {shouldShowComponent2 ? (
        <Component2
          onFilter={onFilter}
          films={films}
          onSearch={onSearch}
          searchResults={searchResults}
        />
      ) : (
        <div>
          <Intro />
        </div>
      )}
    </div>
  );
};

const Component2 = ({ onFilter, films, onSearch, searchResults }) => {
  return (
    <div>
      <Inital
        onFilter={onFilter}
        films={films}
        onSearch={onSearch}
        searchResults={searchResults}
      />
    </div>
  );
};

export default UseTime;
