import React from "react";

import "./progress-bar.scss";

const MultiProgressBar = ({ sections }) => {
  const colorSections = sections
    // filter so that there aren't empty sections (breaks border-radius css)
    .filter(section => section.percent > 0)
    .map(section => (
      <div
        style={{ background: section.color, width: section.percent + "%" }}
      />
    ));

  return (
    <div
      style={{ width: "41rem", margin: "1rem auto" }}
      className="progress-bar-background multi"
    >
      {colorSections}
    </div>
  );
};

export default MultiProgressBar;
