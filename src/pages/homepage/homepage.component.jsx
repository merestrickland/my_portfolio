import React from "react";
import { Link, useHistory } from "react-router-dom";
import Projects from "../projects/projects.component";
// import NavBar from '../../components/navbar/navbar.component'

import "./homepage.styles.css";
import NavBar from "../../components/navbar/navbar.component";

function HomePage() {
  let history = useHistory();

  return (
<div className='homepage-container'>

      <NavBar />

    <div className='homepage-video-container'>INTRO VIDEO HERE</div>
</div>

);
/* <>
    <section id="home">
      <div class='content-wrapper'>
        <h2>Hi, I'm Meredith</h2>
        <img
        src='https://meredith-strickland-portfolio.s3.amazonaws.com/Portfolio/smiley_PNG36233.png'
        className='smiley'
        />
      </div>
    </section>
        <section id="project">
        <div class='content-wrapper'>
          <h2>tgis is project</h2>
        </div>
      </section>
      </> */}


export default HomePage;
