import React from "react";

const CardMovie = ({ card: { title, duration, tags, imgUrl } }) => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__container-content">
          <img src={imgUrl} alt="" />
          <div className="card__info">
            <h5>{tags}</h5>
            <a href="#">{title}</a>
            <h4>duration : {duration}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
