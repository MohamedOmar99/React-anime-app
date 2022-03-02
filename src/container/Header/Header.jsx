import React from "react";
import { Navbar } from "../../components";
import { Search } from "../../components";
import "./Header.css";

const Header = () => (
  <div className="header">
    <Navbar />
    <div className="header__content">
      <Search/>
      <h1>
        Welcome to <span className="header__yellow"> Anime World</span>
      </h1>
      <h2>Enjoy the Website</h2>
    </div>
  </div>
);

export default Header;
