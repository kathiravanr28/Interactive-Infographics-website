import React from "react";
import MainCircle from "./Main-Circle/Main-Circle.jsx";
import BackgroundVideo from "./background/BackgroundVideo.jsx";

function App() {
  return (
    <div>
      {/* BackgroundVideo will play videos using VideoController directly */}
      <BackgroundVideo />
      <MainCircle />
    </div>
  );
}

export default App;
