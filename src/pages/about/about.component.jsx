import React from 'react'
import NavList from '../../components/navlist/navlist.component'
import './about.styles.css'
import LazyLoad from 'react-lazyload'



export default function About() {



  return (
    <div>
      <div className="split left">
        <div className="centered">
          <LazyLoad height={200}>
            <img src='https://meredith-strickland-portfolio.s3.amazonaws.com/Portfolio/meme.png'/>
          </LazyLoad>
          <p className='title'>My name is Meredith.</p>
          <p>I am a full stack developer. My skills include JavaScript, React, Ruby on Rails, Node, Express.js, MongoDB, HTML, CSS, Git, and I am currently learning Python. I have a background in Architecture, which I left because I want to design for everyone, not just for the people who can afford it. I am from New Orleans, I went to college in Vermont, and I live in Brooklyn. Email me at mere.strickland@gmail.com </p>
          {/* My favorite food is crawfish, my second favorite food is popsicles. My favorite book is "Far From the Tree" by Andrew Solomon.  */}
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <NavList />
        </div>
      </div>
  </div>

  )
}
