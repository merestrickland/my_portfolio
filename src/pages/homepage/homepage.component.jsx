import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Projects from '../projects/projects.component'
import NavList from '../../components/navlist/navlist.component'


import './homepage.styles.css'


function HomePage() {

  let history = useHistory()

  return (
    <div className="HomePage">
      {/* <style>
        @import url('https://fonts.googleapis.com/css?family=Stoke&display=swap');
      </style> */}

      <div className="split left">
        <div className="centered">
          <h1>Hello.</h1>
          <h2>My name is<span className='name'> Meredith.</span></h2>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <NavList />
        </div>
      </div>
      
    </div>
  );
}

export default HomePage;
