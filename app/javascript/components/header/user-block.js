import React from "react";
import { Link } from "react-router-dom";

const UserBlock = ({ user }) => {
  return (
    <div className="profile-dropdown-spacer">
      <div className="profile-dropdown">
        <div className="profile-image" />
        <Link to={"/user/" + user.login}>{user.name}</Link>
        <div onClick={() => {}} className="dropdown-arrow">
          <i className="fas fa-caret-down" />
        </div>
      </div>
    </div>
  );
};

export default UserBlock;
