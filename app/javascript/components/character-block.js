import React from "react"
import {Link} from "react-router-dom"

const CharacterBlock = ({character, rating, url, unlocked = true}) => {
  return (
    <div
      className={`character-block ${rating != null ? "" : "locked"}`}
      key={character}>
      <Link to={url || "#"}>
        <h2 className="character-title" style={{
          color: `hsl(${rating}, 75%, 50%)`
        }}>
          {character}
        </h2>
      </Link>
    </div>
  )
}

export default CharacterBlock
