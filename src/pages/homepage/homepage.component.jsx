import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Projects from '../projects/projects.component'


import './homepage.styles.css'


function HomePage() {

  let history = useHistory()

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
            <li>Explore my <Link to='/projects' class='emphasized'>projects</Link>.</li>
            <li>Check out my <Link to='/github' class='emphasized'>GitHub</Link>.</li>
            <li><Link class='emphasized'>Get in touch</Link> with me.</li>
            <li>Learn about <Link class='emphasized'>me</Link>.</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default HomePage;
