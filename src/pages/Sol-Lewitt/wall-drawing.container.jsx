import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'
import sketch from './wall-drawing.component';
import './wall-drawing.styles.css'
import P5Wrapper from 'react-p5-wrapper';

const WallDrawing = props => {


    return (
        <>

        
        <div className='text-container'>
            <h2>Wall Drawing #17 (1969)</h2>
            <p>As someone with a visual arts background, I am always interested in projects or libraries that can blend both coding and creativity. I became interested in P5.js when I was creating an interactive game, and decided to apply it to a Sol Lewitt drawing. Sol Lewitt was a conceptual artist, and is well-known for his wall drawings which can be created by anyone following the instructions he has outlined. This leaves a lot of room for interpretation by the person creating the drawing.</p>
            <p>Here, I used P5.js to execute Wall Drawing #17, in which the only instructions are "Four-part drawing with a different line direction in each part."</p>
            
        </div>
        <div className='sol'>
            <P5Wrapper sketch={sketch}/>
        </div>
        <div>
        <p className='text-container'>For a walk-through of how I went about drawing Wall Drawing #17, please <a href='https://medium.com/@mere.strickland/create-your-own-sol-lewitt-with-p5-js-165cdeda2d88'>read my blog post!</a>
            </p>
            {/* <marquee>READ THIS READ THIS READ THIS</marquee> */}
        </div>
        </>
        
    )
    
}

export default WallDrawing;