import React from "react";

import "./loader.scss";

const Loader = ({ isLoaded, children }) => {
  const loadingScreen = (
    <div className="loading-screen">
      <div className="spinner">
        <i className="fas fa-cog" />
      </div>
    </div>
  );

  return isLoaded ? children : loadingScreen;
};

export default Loader;
