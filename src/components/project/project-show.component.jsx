import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './project.styles.css'

export default function ProjectShow(props) {
  // const {project} = useParams()

  return (

        <div> Project {props.project.name} </div>

  )
}
