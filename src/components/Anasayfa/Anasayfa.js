import React from "react";

import "./Anasayfa.css";
import { Link } from "react-router-dom";

const Anasayfa = () => {
  return (
    <div className="container">
      <div className="banner">
        <img src="/Assets/logo.svg" />
      </div>
      <div className="slogan_h1">
        <h1>KOD ACIKTIRIR</h1>
      </div>
      <div className="slogan_h1">
        <h1>PIZZA, DOYURUR</h1>
      </div>
      <div>
        <Link to="/Form">
          <button className="btn">
            <strong>ACIKTIM</strong>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Anasayfa;
