import React from 'react'


const LeftSide = (props) => {

  const project = props.project
  // console.log(props)

  return (
    <div className='project-information'>
    <h2 className='project-title'>{project.name}</h2>

  <p className='project-description'>{project.description}</p>
 
    <a href={project.github} className='project-links' target='_blank'>
      <img
      className='github-image'
      src="https://meredith-strickland-portfolio.s3.amazonaws.com/Portfolio/githubLogo+copy.png"
      alt="gitHub"/>
    
    
    <p className='github-text'>Look at the code on GitHub</p>
    </a>
    
   
</div>
  )
}

export default LeftSide

