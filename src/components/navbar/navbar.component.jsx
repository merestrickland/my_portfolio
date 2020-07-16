import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.styles.css'

const  NavBar = () => {
  return (
      <div className='nav-container'>
        <div className='nav-links'>
          <li className='nav-text'>
            About
          </li>
          <li className='nav-text'>
            Resume
          </li>
          <li className='nav-text'>
            GitHub
          </li>
        </div>
        <div className='nav-homepage'>
 
          <img src='https://meredith-strickland-portfolio.s3.amazonaws.com/Portfolio/smiley_PNG36233.png'
              className='nav-logo'/>
          <li className='nav-text name'>
          Meredith Strickland
          </li> 


        </div>
      </div>
  )
}

export default NavBar