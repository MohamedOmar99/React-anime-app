import React from "react";
import { SubHeading } from "../../components";
import { data } from "../../constants";
import { CardMovie } from "../../components";
import "./RecentMovies.css"

const RecentMovies = () => {
  return (
    <div className="movies">
      <SubHeading title="Latest Movies" />
      <div className="latest__container">
        {data.movie.map((card) => (
          <CardMovie card={card} key={card.title} />
        ))}
      </div>
    </div>
  );
};

export default RecentMovies;
