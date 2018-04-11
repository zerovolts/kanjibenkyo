import React from "react"
import {Link} from "react-router-dom"

const NavButton = ({name, path, url}) => {
  const selectedClass = (url == path) ? "selected" : ""

  return (
    <Link
        to={path}
        className={`nav-button ${selectedClass}`}>
      {name}
    </Link>
  )
}

export default NavButton
