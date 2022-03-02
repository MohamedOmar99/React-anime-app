import React from "react";
import { Link } from "react-router-dom";
import "..//Login/Login.css";
const Signup = () => {
  const submitFormHandle = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form__container">
      <div className="form__wrapper">
        <div className="form__heading">
          <h2>Create account</h2>
        </div>
        <form className="form__content">
          <div className="name">
            <label htmlFor="name" className="label">
              Full name
            </label>
            <input type="text" id="name" className="input" />
          </div>
          <div className="email">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input type="email" id="email" className="input" />
          </div>
          <div className="passowrd">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input type="password" id="password" className="input" />
          </div>
          <div className="signup__button">
            <button className="button" type="submit" onClick={submitFormHandle}>
              Log In
            </button>
          </div>
          <div className="new__account">
            <h2>
              Already have account?
              <Link to="/login" className="link-button">
                Click here
              </Link>
            </h2>
          </div>
          <div className="home__page">
            <Link to="/">back to home page</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
