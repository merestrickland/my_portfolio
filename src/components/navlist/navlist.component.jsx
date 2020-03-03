import React from 'react'
import { Link } from 'react-router-dom'

export default function NavList() {
  return (
    <div>
      <ul>
        <li>Look at my <Link to='/resume' className='emphasized'>resume</Link>.</li>
        <li>Explore my <Link to='/projects' className='emphasized'>projects</Link>.</li>
        <li>Check out my <a href={`https://github.com/merestrickland`} target='_blank' className='emphasized'>GitHub</a>.</li>
        <li>Connect on <a href={`https://www.linkedin.com/in/meredith-strickland-98406026/`} target='_blank' className='emphasized'>LinkedIn</a>.</li>
        <li><Link to='/email'className='emphasized'>Get in touch</Link> with me.</li>
        <li>Learn <Link to='/about'className='emphasized'>about me</Link>.</li>
      </ul>
    </div>
  )
}
