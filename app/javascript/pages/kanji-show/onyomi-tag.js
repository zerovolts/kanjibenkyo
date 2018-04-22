import React from "react"

const OnyomiTag = ({onyomi}) => {
  const uncommon = onyomi[0] === "（"
  if (uncommon) {
    onyomi = onyomi.slice(1, -1)
  }

  return (
    <div className={`onyomi ${uncommon ? "onyomi-uncommon" : ""}`} >
      {onyomi}
    </div>
  )
}

export default OnyomiTag