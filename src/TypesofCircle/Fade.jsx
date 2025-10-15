import React, { useState, useEffect } from "react";

export default function Fade({ visible, children, duration = 600 }) {
  const [render, setRender] = useState(visible);

  useEffect(() => {
    let timeoutId;
    if (visible) {
      setRender(true);
    } else {
      timeoutId = setTimeout(() => setRender(false), duration);
    }
    return () => clearTimeout(timeoutId);
  }, [visible, duration]);

  return render ? (
    <div
      className={`fade ${visible ? "show" : "hide"}`}
      style={{ background: "transparent" }} // Ensures the background is always transparent
    >
      {children}
    </div>
  ) : null;
}
