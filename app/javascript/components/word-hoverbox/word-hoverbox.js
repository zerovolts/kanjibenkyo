import React from "react";

import Hoverbox from "components/hoverbox/hoverbox";

import "./word-hoverbox.scss";

const WordHoverbox = ({ word, info }) => {
  return (
    <Hoverbox>
      <span className="hoverbox-title">{word}</span>
      <hr />
      <div>
        <div className="info-key">furigana</div> {info ? info.furigana : "---"}
      </div>
      <div>
        <div className="info-key">meaning</div>{" "}
        {info ? info.meaning.join(", ") : "---"}
      </div>
      <div>
        <div className="info-key">jplt</div>
        {info ? info.jlpt : "---"}
      </div>
    </Hoverbox>
  );
};

export default WordHoverbox;
