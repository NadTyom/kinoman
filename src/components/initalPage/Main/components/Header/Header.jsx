import React, { useState } from "react";
import logo from "../../../../../images/logo.png";

export default function Header({ films, onSearch }) {
  const [login, setLogin] = useState(false);
  const [reg, setReg] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const results = films.filter((film) =>
      film.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    console.log(results);
  };

  return (
    <header>
      <div className="logoSection">
        <img alt="nkarlogo" src={logo} />
        <div className="logoAbout">
          <p>
            Կինո<span>Ման</span>
          </p>
          <b>Օնլայն Կինոթատրոն</b>
        </div>
      </div>
      <div className="logRegFind">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(searchQuery);
          }}
          className="search-container"
          action="/search"
          method="get"
        >
          <input
            type="text"
            name="query"
            placeholder="Որոնել Ֆիլմը"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button type="submit">Որոնել</button>
        </form>
        <button
          className="login"
          onClick={() => {
            setLogin(!login);
            setReg(false);
          }}
        >
          Մուտք գործել
        </button>
        <button className="register" onClick={() =>{ setReg(!reg);
        setLogin(false)}}>
          Գրանցվել
        </button>
      </div>
      {/* Login */}
      <div className={login ? "log active" : "log"}>
        <div className="form-wrapper">
          <h2>Մուտք գործել</h2>
          <form action="">
            <div>
              <label>Անուն</label>
              <input type="text" placeholder="Մուտքագրեք ձեր անունը" required />
            </div>
            <div>
              <label>E-mail</label>
              <input
                type="email"
                placeholder="Մուտքագրեք ձեր E-mail-ը"
                required
              />
            </div>
            <div className="btnForm">
              <button>Մուտք</button>
              <button onClick={() => setLogin(!login)}>Փակել</button>
            </div>
          </form>
        </div>
      </div>
      {/* reg */}
      <div className={reg ? "reg active" : "reg"}>
        <div className="form-wrapper-reg">
          <p
            onClick={() => {
              setReg(false);
            }}
          >
            X
          </p>
          <div className="regHorizontal">
            <h2>Գրանցվել</h2>
          </div>
          <form className="registration" action="">
            <div>
              <label>Անուն</label>
              <input type="text" placeholder="Մուտքագրեք ձեր անունը" required />
            </div>
            <div>
              <label>Ազգանուն</label>
              <input
                type="text"
                placeholder="Մուտքագրեք ձեր Ազգանունը"
                required
              />
            </div>
            <div>
              <label>Գաղտնաբառ</label>
              <input
                type="password"
                placeholder="Մուտքագրեք ձեր Գաղտնաբառը"
                required
              />
            </div>
            <div>
              <label>Կրկնեք գաղտնաբառը</label>
              <input
                type="password"
                placeholder="Կրկնեք ձեր Գաղտնաբառը"
                required
              />
            </div>
            <div>
              <label>E-mail</label>
              <input
                type="email"
                placeholder="Մուտքագրեք ձեր E-mail-ը"
                required
              />
            </div>
            <div className="btnForm">
              <button>Գրանցվել</button>
              <button onClick={() => setReg(false)}>Փակել</button>
            </div>
          </form>
        </div>
      </div>

      {searchQuery && searchResults.length > 0 && (
        <div className=".parentContainer">
          <div className="searchResults">
            {searchResults.map((film) => (
              <div>
                <img alt="nkar" src={require("../../../../../" + film.photo)} />
                <p key={film.id}>{film.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {searchQuery && searchResults.length === 0 && (
        <div className="searchError">
          {alert("Տվյալ Ֆիլմը այս պահին չկա")}
          {/* <p>Տվյալ Ֆիլմը այս պահին չկա</p> */}
        </div>
      )}
    </header>
  );
}
