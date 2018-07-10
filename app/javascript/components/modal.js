import React from "react";

import "./modal.scss";

const Modal = ({ visible, hideCallback, children }) => {
  const modal = (
    <div className="modal-container">
      <div className="modal">
        <div className="hide-modal-button" onClick={hideCallback}>
          <i className="fas fa-times" />
        </div>
        {children}
      </div>
    </div>
  );

  return visible ? modal : null;
};

export default Modal;
