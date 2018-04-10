import React from "react"

const ProgressBar = ({percent}) => {
  return (
    <div className="progress-bar-background">
      <div style={{
          background: "hsl(" + percent + ", 75%, 50%)",
          width: percent + "%"
      }} />
    </div>
  )
}

export default ProgressBar
