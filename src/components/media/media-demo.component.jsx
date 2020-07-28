import React from "react";
import ReactPlayer from 'react-player'


const MediaDemo = (props) => {

  const { media } = props.project

  return (

    <>
      <div className="media-image-gif">
        <ReactPlayer url={media}
        playing={false}
        controls={true}
        looping={true}
        volume='0'
        wrapper='media-image-gif'
        attributes='true'/>
      </div>
    </>

  );
};

export default MediaDemo;
