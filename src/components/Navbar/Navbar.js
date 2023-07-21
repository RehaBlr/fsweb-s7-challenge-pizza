import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return (
    <div className="navbar ">
      <div className="navbar-ul">
        <div>
          <ul>
            <li className="link-bold">
              <Link to="/">Anasayfa</Link>
              <span>-</span>
            </li>
            <li className="link-bold">
              <Link to="/">secenekler</Link>
              <span>-</span>
            </li>
            <li className="link-bold">
              <Link to="/Form">
                <b>Sipariş Oluştur</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
