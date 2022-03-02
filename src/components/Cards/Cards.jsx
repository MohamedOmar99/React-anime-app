import React from "react";
import "./Cards.css";

const Cards = ({ card: { title, episodes, tags, imgUrl } }) => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__container-content">
          <img src={imgUrl} alt="" />
          <div className="card__info">
            <h5>{tags}</h5>
            <a href="#">{title}</a>
            <h4>Number of episodes : {episodes}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
