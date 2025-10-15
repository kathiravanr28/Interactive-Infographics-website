import React, { useEffect, useRef, useState } from "react";
import "./TypesofCircle.css";
import TypeofSubCircle from "../TypeofSubCircle/TypeofSubCircle.jsx";
import Fade from "./Fade.jsx";
import BackgroundVideo from "../background/BackgroundVideo.jsx";
import { getCircleConfig, CIRCLE_FADE_MS, SUB_FADE_MS } from "./TypesOfCircle.js";
import { VideoController } from "../VideoController/VideoController.js"; //  new import

export default function TypesOfCircle({ expanded, onChildrenFullyHidden }) {
  const circles = getCircleConfig();
  const [activeSide, setActiveSide] = useState(null);
  const [subsVisible, setSubsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null); // {src, withSound}
  const timers = useRef([]);

  const clearAllTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => clearAllTimers, []);

  useEffect(() => {
    clearAllTimers();

    if (expanded) {
      const t = setTimeout(() => setMounted(true), 20);
      timers.current.push(t);
    } else {
      if (activeSide) {
        setSubsVisible(false);
        const t1 = setTimeout(() => {
          setActiveSide(null);
          const t2 = setTimeout(() => {
            onChildrenFullyHidden?.();
            VideoController.clear(); //  stop any playing sound
            setCurrentVideo(null);
          }, CIRCLE_FADE_MS + 20);
          timers.current.push(t2);
        }, SUB_FADE_MS + 20);
        timers.current.push(t1);
      } else {
        const t = setTimeout(() => {
          onChildrenFullyHidden?.();
          VideoController.clear(); //  ensure sound stops
          setCurrentVideo(null);
        }, CIRCLE_FADE_MS + 20);
        timers.current.push(t);
      }
    }

    return clearAllTimers;
  }, [expanded, activeSide, onChildrenFullyHidden]);

  // Updated click handler: play with sound
  const handleCircleClick = (side) => {
    clearAllTimers();
    const selectedCircle = circles.find((c) => c.side === side);
    const isSameSide = activeSide === side;

    // update and play video with sound
    if (selectedCircle?.video) {
      setCurrentVideo({ src: selectedCircle.video, withSound: true });
    }

    if (!activeSide) {
      setActiveSide(side);
      setSubsVisible(true);
      return;
    }

    if (isSameSide) {
      // toggle subcircles but keep video playing
      setSubsVisible((prev) => !prev);
      return;
    }

    // switching sides
    setSubsVisible(false);
    const t1 = setTimeout(() => {
      setActiveSide(side);
      setSubsVisible(true);
    }, SUB_FADE_MS);
    timers.current.push(t1);
  };

  // Hover handler: play with sound while hovering
  const handleMouseEnter = (video) => {
    if (video) setCurrentVideo({ src: video, withSound: true });
  };

  //  Leave handler: stop if not active
  const handleMouseLeave = (side) => {
    if (activeSide !== side) {
      VideoController.clear();
      setCurrentVideo(null);
    }
  };

  return (
    <>
      {/* Background video with sound support */}
      <BackgroundVideo
        videoSrc={currentVideo?.src}
        isActive={!!currentVideo}
        withSound={currentVideo?.withSound}
      />

      {/* Main circles */}
      {circles.map(({ side, label, delay, img, video }) => {
        const isVisible = expanded;
        const isActive = activeSide === side;

        return (
          <div
            key={side}
            className={`Circle ${side} ${mounted && isVisible ? "show" : "hide"} ${
              isActive ? "active" : ""
            }`}
            style={{
              transitionDuration: `${CIRCLE_FADE_MS}ms`,
              transitionDelay: `${isVisible ? delay : 0}ms`,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => handleCircleClick(side)}
            onMouseEnter={() => handleMouseEnter(video)}
            onMouseLeave={() => handleMouseLeave(side)}
          >
            <span className="circle-label">{label}</span>
          </div>
        );
      })}

      {/* Subcircles */}
      {activeSide && (
        <Fade visible={subsVisible} duration={SUB_FADE_MS}>
          <TypeofSubCircle side={activeSide} visible={subsVisible} />
        </Fade>
      )}
    </>
  );
}
