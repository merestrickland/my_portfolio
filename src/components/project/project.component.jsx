import React, { useState, useEffect } from 'react'

export default function Project(props) {

  return (
    <div className='row'>
      <div className='column'> {props.project.name} </div>
    </div>
  )
}
