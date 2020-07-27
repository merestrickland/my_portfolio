import React from "react";
import { Link, useHistory } from "react-router-dom";
import ReactPlayer from 'react-player'
import "./homepage.styles.css";

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
