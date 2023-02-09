import React from "react";
import "./Video.css";
import { RiPlayMiniFill } from "react-icons/ri";

function Video() {
  return (
    <div className="presentation">
      <div className="text">
        <p className="title__text">Une Nouvelle approhe pédagogique</p>
      </div>
      <div className="video">
        <video
          autoPlay
          className="video__worketyamo"
          id="videoPlayer" controls="controls"
          muted
          src="https://res.cloudinary.com/it-engineering-factory/video/upload/v1654872666/samples/cld-sample-video.mp4"
        />
      </div>
    </div>
  );
}

export default Video;
