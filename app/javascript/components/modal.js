import React from "react"

const Modal = ({visible, hideCallback, children}) => {
  const modal = (
    <div className="modal-container">
      <div className="modal">
        <div className="hide-modal-button" onClick={hideCallback}>
          <i className="fas fa-times"></i>
        </div>
        {children}
      </div>
    </div>
  )

  return visible ? modal : null
}

export default Modal
