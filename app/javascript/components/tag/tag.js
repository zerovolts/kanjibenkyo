import React from "react";

import "./tag.scss";
import "./tag-container.scss";

const Tag = ({ children }) => {
  return <div className="tag">{children}</div>;
};

export default Tag;
