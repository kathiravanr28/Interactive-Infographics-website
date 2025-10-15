import React, { useMemo, useState } from "react";
import "./TypeofSubCircle.css";
import SubcircleDetails from "../SubcircleDetails/SubcircleDetails.jsx";
import { SUBCIRCLE_DETAILS } from "../SubcircleDetails/SubcircleDetails.js";
import { generateSemiCircle, STAGGER_MS, BASE_MS } from "./TypeofSubCircle.js";
import { LEFT_ITEMS, RIGHT_ITEMS } from "./LEFT_ITEMS.js & RIGHT_ITEMS.js";

export default function TypeofSubCircle({ side, visible }) {
  const [selectedKey, setSelectedKey] = useState(null);

  const items = side === "left" ? LEFT_ITEMS : RIGHT_ITEMS;
  const transforms = useMemo(() => generateSemiCircle(items.length, 160, side), [items.length, side]);

  const handleClick = (key) => {
    setSelectedKey(key);
  };

  const handleClose = () => {
    setSelectedKey(null);
  };

  return (
    <>
      <div className={`sub-circle-wrapper ${side}`}>
        <div className="sub-circle-container">
          {items.map((item, i) => {
            const delay = visible ? i * STAGGER_MS : (items.length - 1 - i) * STAGGER_MS;
            return (
              <div
                key={item.key}
                className={`sub-circle ${visible ? "show" : "hide"}`}
                style={{ ...transforms[i], transitionDelay: `${delay}ms`, transitionDuration: `${BASE_MS}ms` }}
                onClick={() => handleClick(item.key)}
              >
                <div
                  className="sub-circle-inner"
                  style={{
                    backgroundImage: `url(${item.imgs[0]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="circle-label">{item.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedKey && SUBCIRCLE_DETAILS[selectedKey] && (
        <div
          className={`centered-container fade-in ${side === "left" ? "right-detail" : "left-detail"}`}
        >
          <SubcircleDetails activeDetail={SUBCIRCLE_DETAILS[selectedKey]} onClose={handleClose} />
        </div>
      )}
    </>
  );
}
