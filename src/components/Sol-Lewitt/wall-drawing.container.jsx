import React, { Component, useState } from "react";
import sketch from "./wall-drawing.component";
import P5Wrapper from "react-p5-wrapper";

const WallDrawing = (props) => {

  console.log(props.project)

  return (

    <>
      <marquee>
        <a href="https://medium.com/@mere.strickland/create-your-own-sol-lewitt-with-p5-js-165cdeda2d88">
          Read my blog post
        </a>{" "}
        to find out how I coded a Sol Lewitt drawing with P5.js
      </marquee>
      <div className="image-container">
        <P5Wrapper sketch={sketch} />
      </div>
    </>

  );
};

export default WallDrawing;
