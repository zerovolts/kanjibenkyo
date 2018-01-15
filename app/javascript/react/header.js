import React from "react"
import {Link} from "react-router-dom"

const Header = props => {
  return (
    <div className="header">
      <div className="left-header">
        <div>
          <Link className="logo" to="/">
            <span className="logo-kanji">漢字勉強</span>kanjibenkyō
          </Link>
        </div>
      </div>
      <div className="profile-dropdown-spacer">
        <Link to={"/user/" + props.user.login}>
          <div className="profile-dropdown">{props.user.name}</div>
        </Link>
      </div>
    </div>
  )
}

export default Header
