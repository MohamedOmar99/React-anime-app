import React from "react";
import { Footer, Navbar, Parts, Search } from "../components";
import { RecentMovies } from "../container";

import "./movies.css";
const Movies = () => {
  return (
    <div>
      <Navbar />
      <div className="search__solver">
        <Search />
      </div>
      <Parts />
      <RecentMovies />
      <Footer />
    </div>
  );
};

export default Movies;
