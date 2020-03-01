import React from 'react'
import { Link } from 'react-router-dom'

export default function NavList() {
  return (
    <div>
      <ul>
        <li>Look at my <Link to='/resume' className='emphasized'>resume</Link>.</li>
        <li>Explore my <Link to='/projects' className='emphasized'>projects</Link>.</li>
        <li>Check out my <a href={`https://github.com/merestrickland`} target='_blank' className='emphasized'>GitHub</a>.</li>
        <li><Link to='/email'className='emphasized'>Get in touch</Link> with me.</li>
        <li>Learn about <Link className='emphasized'>me</Link>.</li>
      </ul>
    </div>
  )
}
