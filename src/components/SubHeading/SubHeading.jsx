import React from "react";
import "./SubHeading.css";

const SubHeading = (props) => (
  <div className="sub__heading">
    <div className="sub__heading-content">
      <h1 className="heading-primary">{props.title}</h1>
      <a href="#" className="view-more">view all &gt;</a>
    </div>
  </div>
);

export default SubHeading;
