import React from "react";
import { connect } from "react-redux";

import Modal from "components/modal/modal";
import FormField from "components/header/login-modal/form-field/form-field";
import { loginUser } from "actions";

import "./login-modal.scss";

class LoginModal extends React.Component {
  state = {
    username: "",
    password: ""
  };

  resetState = () => {
    this.setState({
      username: "",
      password: ""
    });
  };

  submitForm = event => {
    event.preventDefault();
    const payload = this.state;
    const { dispatch } = this.props;

    dispatch(loginUser(payload));
    this.resetState();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { visible, hideCallback, error } = this.props;
    const { username, password } = this.state;

    return (
      <Modal visible={visible} hideCallback={hideCallback}>
        <div className="login-modal">
          <div className="login-modal-header">Login</div>
          <div className="login-modal-body">
            {error && <div style={{ color: "#f44" }}>{error}</div>}
            <fieldset>
              <FormField
                name="username"
                type="text"
                value={username}
                icon={<i className="fas fa-user" />}
                handleChangeCallback={this.handleChange}
              />

              <FormField
                name="password"
                type="password"
                value={password}
                icon={<i className="fas fa-lock" />}
                handleChangeCallback={this.handleChange}
              />
            </fieldset>
            <div className="login-buttons">
              <button className="green">Sign Up</button>
              <button onClick={this.submitForm}>Sign In</button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.errorMessage
});

// const mapDispatchToProps = dispatch => ({
//   loginUser: creds => dispatch(loginUser(creds))
// });

export default connect(mapStateToProps)(LoginModal);
