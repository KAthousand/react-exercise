import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav(props) {
  return (
    <nav>
      <div className="nav">
        <Link className="logo active" to="/">
          ProductsApp
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
