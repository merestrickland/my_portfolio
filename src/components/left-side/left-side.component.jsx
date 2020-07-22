import React from 'react'


const LeftSide = () => {
  return (
    <div className='project-information'>
    <h2 className='project-title'>Wall Drawing #17 (1969)</h2>
    <p className='project-description'> Sol Lewitt was a conceptual artist, and is well-known for his wall drawings which can be created by anyone following the instructions he has outlined. This leaves a lot of room for interpretation by the person creating the drawing. Here, I used P5.js to execute his Wall Drawing #17, in which the only instructions are "Four-part drawing with a different line direction in each part."</p>
    <div className='project-links'>
    <img
    className='github-image'
    src="https://meredith-strickland-portfolio.s3.amazonaws.com/Portfolio/githubLogo+copy.png"
    alt="gitHub"/>
    <p className='github-text'>Look at the code on GitHub</p>

    </div>
   
</div>
  )
}

export default LeftSide

