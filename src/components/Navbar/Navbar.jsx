import React, { useState } from "react";
import { images } from "../../constants";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const clickHumburgerHabdle = () => {
    setClick(!click);
  };

  //navbar color change
  const [color, setColor] = useState(false);
  const changeColorHandle = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColorHandle);

  return (
    <div className={color ? "navbar navbar-bg" : "navbar"}>
      <nav className="navbar__container">
        <div className="navbar__container-logo">
          <a href="#">
            <img src={images.logo} alt="logo" />
          </a>
        </div>
        <ul
          className={
            click ? "navbar__container-list active" : "navbar__container-list"
          }
        >
          <li className="list-items">
            <Link to="/">Home</Link>
          </li>
          <li className="list-items">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="list-items">
            <Link to="/series">Series</Link>
          </li>
          <li className="list-items">
            <Link to="/news">News</Link>
          </li>
        </ul>
        <div className="navbar__container-login">
          <div className="buttons">
            <Link to="/login" className="list-items">
              Login
            </Link>
            <Link to="/signup" className="custom__button">
              Sign up
            </Link>
          </div>
        </div>
        <div className="humburger" onClick={clickHumburgerHabdle}>
          {click ? <FaTimes color="#fff" /> : <FaBars color="#fff" />}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
