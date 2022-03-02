import React from "react";
import { images } from "../../constants";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container-content">
          <div className="footer__aboutus">
            <div className="footer__aboutus-logo">
              <img src={images.logo} alt="logo" />
            </div>
            <h2>
              this is a small website i created with react to learn more about
              react UI
            </h2>
          </div>
          <div className="footer__quicklinks">
            <h2>quick links</h2>
            <ul className="quick-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/series">Series</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
          <div className="footer__account">
            <h2>Account</h2>
            <ul className="account-link">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <a href="#">My account</a>
              </li>
            </ul>
          </div>
          <div className="footer__contact">
            <h2>contact me</h2>
            <h3>
              <a href="mailto:mohamedomar99@gmail.com">
                mohamedomar99@gmail.com
              </a>
            </h3>
            <div className="footer__contact-icons">
              <a href="https://www.facebook.com/mohamedomar112">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/mohamed_o_ahmad/">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-omar-44ba6821b/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h4>
          Designed and Developed by <a href="#">Mohamed Omar</a>
        </h4>
        <h4>
          all rights reserved to <a href="#">anime world</a>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
