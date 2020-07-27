import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-links-container">

      <Link to="/resume" className="nav-text">
          Resume
      </Link>

      <a href="https://github.com/merestrickland" target="_blank" className="nav-text">
            GitHub
      </a>

      <a href="https://www.linkedin.com/in/meredith-strickland-98406026/"
            target="_blank" className="nav-text">
              LinkedIn
      </a>

      <Link to="/work" className="nav-text">
          Work
      </Link>

      </div>

      <div className="nav-homepage">
        <div className='nav-logo-link'></div>
      <Link to="/" className='nav-logo-link'>
        
          <img
            src="https://meredith-strickland-portfolio.s3.amazonaws.com/Portfolio/smiley_PNG36233.png"
            className="nav-logo"
          />
          <li className="name">Meredith Strickland</li>
        
      </Link>
      </div>

    </div>
  );
};

export default NavBar;
