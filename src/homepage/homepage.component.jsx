import React from 'react';
import { Link } from 'react-router-dom';


import './homepage.styles.css'


function HomePage() {
  return (
    <div className="HomePage">
      {/* <style>
        @import url('https://fonts.googleapis.com/css?family=Stoke&display=swap');
      </style> */}

      <div class="split left">
        <div class="centered">
          <h1>Hello.</h1>
          <h2>My name is<span className='name'> Meredith.</span></h2>
        </div>
      </div>

      <div class="split right">
        <div class="centered">
          <ul>
            <li>Look at my <Link to='/resume' class='emphasized'>resume</Link>.</li>
            <li>Explore my <span class='emphasized'>projects</span>.</li>
            <li>Check out my <span class='emphasized'>GitHub</span>.</li>
            <li><span class='emphasized'>Get in touch</span> with me.</li>
          </ul>
          

        </div>
      </div>
      
    </div>
  );
}

export default HomePage;
