import React from "react";
import "./SubcircleDetails.css";

export default function SubcircleDetails({ activeDetail, onClose }) {
  if (!activeDetail) return null;

  return (
    <div className="subcircle-details">
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>

      <h2 className="detail-title">{activeDetail.title}</h2>

      {/* Description with HTML support */}
      <div
        className="detail-description"
        dangerouslySetInnerHTML={{ __html: activeDetail.description }}
      ></div>

      {/* Video */}
      {activeDetail.video && (
        <video
          src={activeDetail.video}
          controls
          loop
          className="detail-video"
        />
      )}

      {/* Image */}
      {activeDetail.image && (
        <img
          src={activeDetail.image}
          alt={activeDetail.title}
          className="detail-image"
        />
      )}
    </div>
  );
}
