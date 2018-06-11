import React from "react";

const Torii = ({ children }) => {
  return (
    <React.Fragment>
      <div className="torii-side" />

      <div className="torii-logo">
        <div>漢</div>
        <div>字</div>
        <div>勉</div>
        <div>強</div>
        <div className="torii-logo-bottom" />
      </div>

      <div className="torii-middle">
        <div className="torii-middle-top" />
        <div className="torii-middle-connector" />
        {children}
      </div>

      <div className="torii-logo">
        <div>漢</div>
        <div>字</div>
        <div>勉</div>
        <div>強</div>
        <div className="torii-logo-bottom" />
      </div>

      <div className="torii-side" />
    </React.Fragment>
  );
};

export default Torii;
