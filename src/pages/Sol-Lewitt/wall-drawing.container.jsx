import React, { Component, useState } from 'react';
import sketch from './wall-drawing.component';
import './wall-drawing.styles.css'
import P5Wrapper from 'react-p5-wrapper';

const WallDrawing = props => {


    return (
        
        // <div className='container'>

            // <div className='right'>
            <>
            <marquee><a href='https://medium.com/@mere.strickland/create-your-own-sol-lewitt-with-p5-js-165cdeda2d88'>Read my blog post</a> to find out how I coded a Sol Lewitt drawing with P5.js</marquee>
            <div className='image'>

                <P5Wrapper sketch={sketch}/>
            </div>
        </>

                
            // </div>
        // </div>
        
    )
    
}

export default WallDrawing;