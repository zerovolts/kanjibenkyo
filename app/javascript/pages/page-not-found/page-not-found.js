import React from "react";

import "./page-not-found.scss";

const PageNotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-apology">ごめんなさい！</div>
      <div className="not-found-message">ページが見つけれない</div>
      <div className="not-found-face">（・〜・`）</div>
    </div>
  );
};

export default PageNotFound;
