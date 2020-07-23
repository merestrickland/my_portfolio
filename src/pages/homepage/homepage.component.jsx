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
}


export default HomePage;
