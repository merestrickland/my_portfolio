import React, { useState, useEffect } from 'react'
import './project.styles.css'
import LazyLoad from 'react-lazyload'

export default function Project(props) {

  // useEffect(() => {setClickedProject(false)}, [])




  // const [clickedProject, setClickedProject] = useState(null)


  // const clickProject = (projectId) => {
    
  //   const projectClicked = props.project._id === projectId

  //   console.log(projectClicked)
  // }

  //  const clickProject = (e) => {
  //    console.log(e.target)
  //   setClickedProject(true)
  //   console.log(clickedProject)
  // }




  return (
    <div className='card'>
      <div className='img title'>
        {/* {console.log(props.project._id)} */}
        {/* <img src={process.env.PUBLIC_URL + `/img/` + props.project.image}></img> */}

          <img src={props.project.image} className='project-img'/>

        <div className='title'> {props.project.name} </div>
      </div>
      
      {/* <div className='bottom'>
        
        <div className='description'>{props.project.description}</div>

        {props.project.toolsUsed && 
          <div className='tools'><strong>Tools Used:</strong> {props.project.toolsUsed}</div>
        }
        
        <div className='container links'>
          {props.project.github &&
            <a href={props.project.github} target='_blank'>Github</a>
          }
          {props.project.demoVid &&
            <a href={props.project.demoVid} target='_blank'>Demo Video </a>
          }
        </div>

      </div> */}
    </div>
  )
}
