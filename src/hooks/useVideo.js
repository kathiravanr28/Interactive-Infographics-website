import { useContext } from "react";
import { VideoContext } from "../context/VideoContext.jsx";

export const useVideo = () => useContext(VideoContext);
