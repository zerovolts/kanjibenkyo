import React from "react"
import {Link} from "react-router-dom"

const CharacterBlock = props => {
  return (
    <div
      className="character-block"
      style={{
        borderTop: "5px solid hsl(" + props.rating + ", 75%, 50%)"
      }}
      key={props.character}>


      <Link to={props.url || "#"}>
        <h2 className="character-title">
          {props.character}
        </h2>
      </Link>

    </div>
  )
}

export default CharacterBlock
