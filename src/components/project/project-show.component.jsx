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
    walldrawing: WallDrawing
  }
  // const RightSide = components[project.component]

  // console.log(RightSide)

  return (
    
      
      <div className='container'>


            <div className='left'>
                <LeftSide project={project}/>
            </div>

            <div className='right'>
                <WallDrawing />
                {/* <RightSide /> */}
            </div>
        </div>
        
    )

}
