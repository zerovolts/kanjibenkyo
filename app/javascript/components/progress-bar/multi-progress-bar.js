import React from "react";

import "./progress-bar.scss";

const MultiProgressBar = ({ sections }) => {
  const colorSections = sections.map(section => (
    <div style={{ background: section.color, width: section.percent + "%" }} />
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
