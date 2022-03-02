import React from "react";
import { Footer, Navbar, Parts, Search } from "../components";
import { Latest } from "../container";

import "./movies.css";
const Series = () => {
  return (
    <div>
      <Navbar />
      <div className="search__solver">
        <Search />
      </div>
      <Parts />
      <Latest/>
      <Footer />
    </div>
  );
};

export default Series;