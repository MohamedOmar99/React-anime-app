import React from "react";
import {
  Header,
  Latest,
  RecentMovies,
  NewsAnime,
} from "..";
import { Footer } from "../../components";

const Homee = () => {
  return (
    <div>
      <Header />
      <Latest />
      <RecentMovies />
      <NewsAnime />
      <Footer />
    </div>
  );
};

export default Homee;
