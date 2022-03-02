import React from "react";
import { SubHeading } from "../../components";
import { data } from "../../constants";
import { NewsAnimeCard } from "../../components";
import "./NewsAnime.css"
const RecentMovies = () => {
  return (
    <div className="news">
      <SubHeading title="Latest News" />
      <div className="latest__container">
        {data.news.map((card) => (
          <NewsAnimeCard card={card} key={card.title} />
        ))}
      </div>
    </div>
  );
};

export default RecentMovies;
