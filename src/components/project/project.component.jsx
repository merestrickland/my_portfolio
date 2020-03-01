import React, { useState, useEffect } from 'react'

export default function Project(props) {

  const [project, setProject] = useState([])

  useEffect((props) => {
      setProject(props)
  }, [])


  // console.log(project)

  return (
    <div>
      <p> sup </p>
    </div>
  )
}
