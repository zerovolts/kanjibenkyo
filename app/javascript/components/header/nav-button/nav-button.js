import React from "react";
import { Link } from "react-router-dom";

import NavDropdown from "components/header/nav-button/nav-dropdown/nav-dropdown";

class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
  }

  mouseEnter = () => {
    this.setState({
      showDropdown: true
    });
  };

  mouseLeave = () => {
    this.setState({
      showDropdown: false
    });
  };

  render() {
    const { name, path, url, dropdownLinks } = this.props;
    const { showDropdown } = this.state;

    const dropdown = showDropdown ? (
      <NavDropdown dropdownLinks={dropdownLinks} />
    ) : (
      <div />
    );
    const selectedClass = url == path ? "selected" : "";

    return (
      <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <Link to={path} className={`nav-button ${selectedClass}`}>
          {name}
        </Link>
        {dropdown}
      </div>
    );
  }
}

export default NavButton;
