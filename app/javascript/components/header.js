import React from "react";
import { Link, withRouter } from "react-router-dom";

import LoginModal from "./header/login-modal";
import NavButton from "./header/nav-button";
import UserBlock from "./header/user-block";

import "./header.scss";

class Header extends React.Component {
  state = {
    modalVisible: false
  };

  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    const { user, location } = this.props;
    const { modalVisible } = this.state;

    const userBlock = false ? ( //user.name
      <UserBlock user={user} />
    ) : (
      <div className="profile-dropdown-spacer">
        <div className="sign-in-box" onClick={this.showModal}>
          Sign In
        </div>
      </div>
    );

    return (
      <div className="header">
        <LoginModal visible={modalVisible} hideCallback={this.hideModal} />
        <div className="left-header">
          <Link className="logo" to="/">
            <div>
              <span className="logo-kanji">漢字勉強</span>kanjibenkyō
            </div>
          </Link>
        </div>
        <div className="right-header">
          <NavButton name="Kana" path="/kana" url={location.pathname} />
          <NavButton name="Kanji" path="/kanji" url={location.pathname} />
          <NavButton
            name="Verbs"
            path="/verb-conjugator"
            url={location.pathname}
          />
          {userBlock}
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
