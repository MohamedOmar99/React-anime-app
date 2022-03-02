import React from "react";
import "./NewsAnimeCard.css";

const NewsAnimeCard = ({ card: { title, subtitle, imgUrl } }) => {
  return (
    <div className="card__news">
      <div className="card__news-container">
        <div className="card__news-container_content">
          <img src={imgUrl} alt="" />
          <div className="card__news-info">
            <h3 href="#">{title}</h3>
            <h4>{subtitle}</h4>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAnimeCard;
