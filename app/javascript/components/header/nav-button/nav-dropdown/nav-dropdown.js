import React from "react";
import { Link } from "react-router-dom";

import "./nav-dropdown.scss";

const NavDropdown = ({ dropdownLinks = [] }) => {
  const links = dropdownLinks.map((link, i) => (
    <Link to={link.path} key={link.path + i}>
      <div className="nav-dropdown-selection">{link.name}</div>
    </Link>
  ));

  return <div className="nav-dropdown">{links}</div>;
};

export default NavDropdown;
