import React from 'react'
import useSound from 'use-sound'
import '../sounds/monkey1.mp3'
import './eio.styles.css'

const Eio = () => {

  const [playMonkey] = useSound('../sounds/monkey1.mp3') 
  // const playMonkey = () => useSound('../sounds/monkey1.mp3')


  return (
    <div className='eio-container'>
      <div className='animal'>horse</div>
      <div className='animal'>lion</div>
      <div className='animal' onClick={playMonkey}>monkey</div>

    </div>
  )
}

export default Eio
