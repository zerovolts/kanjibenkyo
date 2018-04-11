import React from "react"

import Modal from "../modal"

class LoginModal extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  render() {
    const {visible, hideCallback} = this.props

    return (
      <Modal visible={visible} hideCallback={hideCallback}>
        <div className="login-modal">
          <div className="login-modal-header">Login</div>
          <div className="login-modal-body">
            <fieldset>
              <span className="text-input-icon">
                <i className="fas fa-user"></i>
              </span>
              <input type="text" placeholder="username"></input>
              <span className="text-input-icon">
                <i className="fas fa-lock"></i>
              </span>
              <input type="password" placeholder="password"></input>
            </fieldset>
            <div className="login-buttons">
              <button className="green">Sign Up</button>
              <button>Sign In</button>
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

// <span className="text-input-icon">
//   <i className="fas fa-envelope"></i>
// </span>
// <input type="text" placeholder="email"></input>

export default LoginModal
