import React from "react";

import "./info-group.scss";

const InfoGroup = ({ info, style }) => {
  const sections = Object.keys(info).map(key => (
    <React.Fragment>
      <div className="info-section-label">{key}</div>
      <div className="info-section-body">{info[key]}</div>
    </React.Fragment>
  ));

  return (
    <div className="info-group" style={style}>
      {sections}
    </div>
  );
};

export default InfoGroup;
