import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import projectList from '../../components/projectList'
import WallDrawing from '../../pages/Sol-Lewitt/wall-drawing.container'

import './project-show.styles.css'
import LeftSide from '../left-side/left-side.component'

export default function ProjectShow() {
  const params  = useParams()

  const project =  projectList.find(project => project.name === params.projectName)  

  const components = {
    "Wall Drawing": WallDrawing
  }

  const RightComponent = React.createElement(components[project.name])

  console.log(RightComponent)

  return (
    
      
      <div className='container'>
            <div className='nav'>
            </div>

            <div className='left'>
                <LeftSide project={project}/>
            </div>

            <div className='right'>

            {/* <project.component /> */}


            <marquee><a href='https://medium.com/@mere.strickland/create-your-own-sol-lewitt-with-p5-js-165cdeda2d88'>Read my blog post</a> to find out how I coded a Sol Lewitt drawing with P5.js</marquee>
            <div className='image'>

                {/* <P5Wrapper sketch={sketch}/> */}
            </div>


                
            </div>
        </div>
        
    )

}
