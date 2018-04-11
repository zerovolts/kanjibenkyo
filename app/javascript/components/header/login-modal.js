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
          <h1>Login</h1>
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
          <div className="buttons">
            <button className="green">Sign Up</button>
            <button>Sign In</button>
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
