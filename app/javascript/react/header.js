import React from "react"
import {Link} from "react-router-dom"

const Header = props => {
  return (
    <div className="header">
      <div className="left-header">
        <div><Link className="logo" to="/">KanjiBenkyo</Link></div>
      </div>
      <div className="profile-dropdown">{props.user.name}</div>
    </div>
  )
}

export default Header
