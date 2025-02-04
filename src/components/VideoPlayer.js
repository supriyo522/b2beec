import React from "react";
import sampleVideo from "./Image/Add a subheading.mp4";
import "./VideoPlayer.css"; // Optional, for styling if needed

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video width="100%" autoPlay loop muted controls>
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
