import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

import { Homee } from "./container";
import Movies from "./Routing/Movies";
import Series from "./Routing/Series";
import News from "./Routing/News";
import { ScrollToTopp } from "./components";
import ScrollToTop from "react-scroll-to-top";
import LogIn from "./Routing/LogIn";

import "./App.css";
import SignUp from "./Routing/SignUp";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      <ScrollToTopp />
      <ScrollToTop smooth color="#fff" style={{ backgroundColor: "#233a50" }} />
      {loading ? (
        <div className="loading">
          <ClimbingBoxLoader loading={loading} size={30} color="#fff" />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/News" element={<News />} />
          <Route path="login" element={<LogIn/>}/>
          <Route path="signup" element={<SignUp/>}/>
        </Routes>
      )}
    </div>
  );
};

export default App;
