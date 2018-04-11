import React from "react"

import Modal from "../modal"
import FormField from "./login-modal/form-field"

class LoginModal extends React.Component {
  state = {
    username: "",
    password: ""
  }

  resetState = () => {
    this.setState({
      username: "",
      password: ""
    })
  }

  submitForm = event => {
    event.preventDefault()
    const payload = this.state
    //send payload to server
    this.resetState()
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const {visible, hideCallback} = this.props
    const {username, password} = this.state

    return (
      <Modal visible={visible} hideCallback={hideCallback}>
        <div className="login-modal">
          <div className="login-modal-header">Login</div>
          <div className="login-modal-body">
            <fieldset>
              <FormField
                name="username"
                type="text"
                value={username}
                icon={<i className="fas fa-user"></i>}
                handleChangeCallback={this.handleChange} />

              <FormField
                name="password"
                type="password"
                value={password}
                icon={<i className="fas fa-lock"></i>}
                handleChangeCallback={this.handleChange} />

            </fieldset>
            <div className="login-buttons">
              <button className="green">Sign Up</button>
              <button onClick={this.submitForm}>Sign In</button>
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
