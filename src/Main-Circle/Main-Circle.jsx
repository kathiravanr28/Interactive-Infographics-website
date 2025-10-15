import React, { useEffect, useState, useRef } from "react";
import "./Main-Circle.css";
import TypesOfCircle from "../TypesofCircle/TypesofCircle.jsx";
import { toggleMainCircle } from "./Main-Circle.js";
import { IMAGES } from "../images/images.js";
import { VIDEOS } from "../videos/videos.js";
import BackgroundVideo from "../background/BackgroundVideo.jsx";
import { VideoController } from "../VideoController/VideoController.js"; // import new global controller

export default function MainCircle() {
  const [loaded, setLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [mountedChildren, setMountedChildren] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null); // {src, withSound}
  const [isVideoActive, setIsVideoActive] = useState(false);
  const closingRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  //  Update video with sound control
  const updateVideo = (videoSrc, withSound = false) => {
    if (videoSrc) {
      setCurrentVideo({ src: videoSrc, withSound });
      setIsVideoActive(true);
    } else {
      // Stop all sound if closing
      VideoController.clear();
      setIsVideoActive(false);
      setCurrentVideo(null);
    }
  };

  //  Handle main circle click
  const handleMainClick = () => {
    if (expanded) {
      closingRef.current = true;
      setExpanded(false);
      updateVideo(null); // stop when closing
    } else {
      setMountedChildren(true);
      const { newExpanded } = toggleMainCircle(expanded);
      setExpanded(newExpanded);
      closingRef.current = false;
      updateVideo(VIDEOS.videoandgame, true); //  play with sound
    }
  };

  //  Play with sound when hovering (only if not expanded)
  const handleMouseEnter = () => {
    if (!expanded) updateVideo(VIDEOS.videoandgame, true);
  };

  //  Stop video on mouse leave if not expanded
  const handleMouseLeave = () => {
    if (!expanded) updateVideo(null);
  };

  const handleChildrenFullyHidden = () => {
    setMountedChildren(false);
    closingRef.current = false;
  };

  return (
    <div className="menu-container">
      <BackgroundVideo
        videoSrc={currentVideo?.src}
        isActive={isVideoActive}
        withSound={currentVideo?.withSound} //  pass sound flag
      />

      <div
        className={`Center-Circle ${loaded ? "show" : ""}`}
        onClick={handleMainClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        tabIndex={0}
      >
        <img
          src={IMAGES.videoandgame}
          alt="Main Circle"
          className="Main-Circle"
        />
        <span className="circle-label">Game-Theory & Video-Game</span>
      </div>

      {mountedChildren && (
        <TypesOfCircle
          expanded={expanded}
          onChildrenFullyHidden={handleChildrenFullyHidden}
          updateBackgroundVideo={updateVideo} // pass handler down
        />
      )}
    </div>
  );
}
