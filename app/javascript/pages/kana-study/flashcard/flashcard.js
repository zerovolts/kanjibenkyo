import React from "react";

import "./flashcard.scss";

const Flashcard = ({ front, back, flipped, flipFunction, sliding }) => {
  return (
    <div
      className={`card ${sliding ? "slide-out" : ""}`}
      onClick={flipFunction}
    >
      <div className={`front face ${flipped ? "flipped" : ""}`}>
        <div className="question">{front}</div>
      </div>
      <div className={`back face ${flipped ? "back-flipped" : ""}`}>
        <div className="question">{back}</div>
      </div>
    </div>
  );
};

export default Flashcard;
