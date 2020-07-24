import React from 'react'
import './about.styles.css'



export default function About() {



  return (
    <div className='container'>
      <div className="left">
        <div className="hello-my-name">
            <img className='me-pic' src='https://meredith-strickland-portfolio.s3.amazonaws.com/Portfolio/meme.png'/>
          <p className='name-title'>My name is Meredith.</p>
          <p className='about-me'>I am a full stack developer. My skills include JavaScript, React, Ruby on Rails, Node, Express.js, MongoDB, HTML, CSS, Git, and I am currently learning Python. I have a background in Architecture, which I left because I want to design for everyone, not just for the people who can afford it. I am from New Orleans, I went to college in Vermont, and I live in Brooklyn.  </p>
          <p className='email'>Email me at mere.strickland@gmail.com</p>
          {/* My favorite food is crawfish, my second favorite food is popsicles. My favorite book is "Far From the Tree" by Andrew Solomon.  */}
        </div>
      </div>

      <div className="right">
        <div className="nav-list">
        </div>
      </div>
  </div>

  )
}
