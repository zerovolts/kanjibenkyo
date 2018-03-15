import React from "react"
import {Link} from "react-router-dom"

const CharacterBlock = ({character, rating, url}) => {
  return (
    <div
      className="character-block"
      style={{
        borderTop: "5px solid hsl(" + rating + ", 75%, 50%)"
      }}
      key={character}>

      <Link to={url || "#"}>
        <h2 className="character-title">
          {character}
        </h2>
      </Link>

    </div>
  )
}

export default CharacterBlock
