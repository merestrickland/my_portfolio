import React from "react";
import { Link, useHistory } from "react-router-dom";
import ReactPlayer from 'react-player'
import Projects from "../projects/projects.component";
// import NavBar from '../../components/navbar/navbar.component'

import "./homepage.styles.css";
import NavBar from "../../components/navbar/navbar.component";

function HomePage() {
  let history = useHistory();

  return (
<div className='homepage-container'>

      <NavBar />

    <div className='homepage-video-container'>
      <ReactPlayer url='https://meredith-strickland-portfolio.s3.amazonaws.com/Portfolio/Meredith_Intro.mp4' 
      playing='true' 
      controls='true' 
      wrapper='homepage-video-container'/>
    </div>

    <div className='marquee'>
      <a href="mailto:mere.strickland@gmail.com">
          mere.strickland@gmail.com
      </a>
    </div>
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
