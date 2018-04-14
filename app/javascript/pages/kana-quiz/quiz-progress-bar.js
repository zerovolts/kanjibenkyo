import React from "react"

import {trueFalseNull} from "../../utils/helpers"

const QuizProgressBar = ({currentId, correctFlags, selectQuestion}) => {
  const progressBlocks = correctFlags.map((flag, i) => {
    const color = trueFalseNull(flag, "correct", "incorrect", "")
    const selected = currentId == i ? "selected" : ""

    return (
      <div
        key={i}
        onClick={flag != null ? () => selectQuestion(i) : () => {}}
        className={`progress-block ${color} ${selected}`}>
      </div>
    )
  })

  return (
    <div className="progress-bar">
      {progressBlocks}
    </div>
  )
}

export default QuizProgressBar
