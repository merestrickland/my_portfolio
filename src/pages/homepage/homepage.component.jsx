import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Projects from '../projects/projects.component'
import NavList from '../../components/navlist/navlist.component'


import './homepage.styles.css'


function HomePage() {

  let history = useHistory()

  return (
 
    <div className="container">
      
      <div className="left">
        <div className="hello-my-name">
          <h1>Hello.</h1>
          <h2 className="name">My name is<span className='name'> Meredith.</span></h2>
        </div>
      </div>

      <div className="right">
  
        <div className="nav-list">
          <NavList />
        </div>
      </div>
      
    </div>
  );
}

export default HomePage;
