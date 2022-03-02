import React from "react";
import { SubHeading } from "../../components";
import { data } from "../../constants";
import { Cards } from "../../components";

import "./Latest.css";
const Latest = () => {
  return (
    <div className="latest">
      <SubHeading title="Latest Series" />
      <div className="latest__container">
        {data.anime.map((card) => <Cards card={card} key={card.title} />)}
      </div>
    </div>
  );
};

export default Latest;
