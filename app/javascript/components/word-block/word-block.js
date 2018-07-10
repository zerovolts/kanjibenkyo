import React from "react";
import { Link } from "react-router-dom";

const WordBlock = ({ character, rating, url, unlocked = true }) => {
  return (
    <div
      className={`word-block ${rating != null ? "" : "locked"}`}
      key={character}
    >
      <Link to={url || "#"}>
        <h2
          className="word-block-text"
          style={{
            color: `hsl(${rating}, 75%, 50%)`
          }}
        >
          {character}
        </h2>
      </Link>
    </div>
  );
};

export default WordBlock;
