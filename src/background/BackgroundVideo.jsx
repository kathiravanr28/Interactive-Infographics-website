import React, { useEffect, useRef } from "react";
import { VideoController } from "../VideoController/VideoController.js";
import "./BackgroundVideo.css";

function BackgroundVideo({ videoSrc, isActive, withSound = false }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video && videoSrc && isActive) {
      if (video.src !== videoSrc) video.src = videoSrc;

      VideoController.play(video, { withSound });
    } else if (video) {
      VideoController.pause(video);
      video.src = "";
    }
  }, [videoSrc, isActive, withSound]);

  return (
    <video
      ref={videoRef}
      className="background-video"
      loop
      playsInline
      preload="auto"
      style={{
        opacity: isActive ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    />
  );
}

export default BackgroundVideo;
