import React from "react";

import "./info-group.scss";

const InfoGroup = ({ info }) => {
  const sections = Object.keys(info).map(key => (
    <React.Fragment>
      <div className="info-section-label">{key}</div>
      <div className="info-section-body">{info[key]}</div>
    </React.Fragment>
  ));

  return <div className="info-group">{sections}</div>;
};

export default InfoGroup;
