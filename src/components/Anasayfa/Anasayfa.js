import React from "react";

import "./Anasayfa.css";
import { useHistory } from "react-router-dom";

const Anasayfa = () => {
  const history = useHistory();

  const handleHistory = () => {
    history.push("/pizza");
  };
  return (
    <div className="container-home">
      <div className="banner-home">
        <img src="/Assets/logo.svg" />
      </div>
      <div className="slogan_h1 sl-h1">
        <h1>KOD ACIKTIRIR</h1>
      </div>
      <div className="slogan_h1">
        <h1>PIZZA, DOYURUR</h1>
      </div>
      <div className="hero">
        {/* <Link to="/pizza" id="order-pizza"> */}
        <button
          data-cy="homePageButton"
          className="btn-home"
          id="order-pizza"
          onClick={handleHistory}
        >
          <strong>ACIKTIM</strong>
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};
export default Anasayfa;
