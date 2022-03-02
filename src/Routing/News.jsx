import React from "react";
import { Footer, Navbar, Parts, Search } from "../components";
import { NewsAnime } from "../container";

import "./movies.css";
const News = () => {
  return (
    <div>
      <Navbar />
      <div className="search__solver">
        <Search />
      </div>
      <Parts />
      <NewsAnime />
      <Footer />
    </div>
  );
};

export default News;