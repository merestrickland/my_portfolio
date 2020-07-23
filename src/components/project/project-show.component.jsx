import React, { useState, useEffect } from 'react'
import { useParams, useLocation, useRouteMatch } from 'react-router-dom'
import './project.styles.css'

export default function ProjectShow() {
  const { name }  = useParams()


  return (
  
        // <div> {name}</div>
        <h1>project!</h1>

  )
}
