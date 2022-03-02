import React from "react";
import { FaSearch } from "react-icons/fa";

import "./Search.css";
const Search = () => {
  return (
    <div>
      <div className="navbar__search">
        <div className="navbar__search-container">
          <input type="search" placeholder="Search here..." />
          <FaSearch className="search__button" />
        </div>
      </div>
    </div>
  );
};

export default Search;
