import {IMAGES} from "../images/images.js";
import {VIDEOS} from "../videos/videos.js";
// durations used by TypesOfCircle.jsx so both files stay in sync
export const CIRCLE_FADE_MS = 600;
export const SUB_FADE_MS = 50;
export const SUB_STAGGER_MS = 120;

export function getCircleConfig() {
  // delays (ms) for the circle fade-in sequencing when main opens
  return [
    { side: "left", label: "Game-Theory", img: IMAGES.gameTheory ,video: VIDEOS.gameTheory },
    { side: "right", label: "Video-Game", img: IMAGES.videoGame ,video: VIDEOS.videoGame },
  ];
}

// toggle helper: if clicking same side -> return null (close); else return clicked
export function toggleSubCircle(current, click) {
  return current === click ? null : click;
}