import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-links">

      <Link to="/resume">
        <li className="nav-text">
          Resume
        </li>
      </Link>

      <a href="https://github.com/merestrickland" target="_blank">
        <li className="nav-text">
            GitHub
        </li>
      </a>

      <a href="https://www.linkedin.com/in/meredith-strickland-98406026/"
            target="_blank">
          <li className="nav-text">
              LinkedIn
          </li>
      </a>

      <Link to="/work">
        <li className="nav-text">
          Work
        </li>
      </Link>

      </div>

      <Link to="/">
        <div className="nav-homepage">
          <img
            src="https://meredith-strickland-portfolio.s3.amazonaws.com/Portfolio/smiley_PNG36233.png"
            className="nav-logo"
          />
          <li className="nav-text name">Meredith Strickland</li>
        </div>
      </Link>

    </div>
  );
};

export default NavBar;
