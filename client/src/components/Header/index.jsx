import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { CATALOG_PATH } from "../../shared/constants/links";

import "./style.css";

const Header = () => {
  const [searchString, setSearchString] = useState("");
  const history = useHistory();

  const redirectToSearch = (e) => {
    e.preventDefault();
    history.push(`${CATALOG_PATH}?title=${searchString}`);
  };

  return (
    <header className="header">
      <form onSubmit={redirectToSearch} className="search-form">
        <label htmlFor="search">Search</label>
        <div className="search-form__input-wrapper">
          <input
            type="search"
            className="search-form__input"
            id="search"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <button>Search</button>
        </div>
      </form>
    </header>
  );
};

export default Header;
