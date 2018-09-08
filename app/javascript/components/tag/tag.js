import React from "react";

import "./tag.scss";
import "./tag-container.scss";

const Tag = ({ children, style }) => {
  return (
    <div className="tag" style={style}>
      {children}
    </div>
  );
};

export default Tag;
