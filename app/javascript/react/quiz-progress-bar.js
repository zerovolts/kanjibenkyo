import React from "react"

const QuizProgressBar = props => {
  const progressBlocks = props.correctFlags.map((flag, i) => {
    let color = ""
    if (flag === true) {
      color = " correct"
    } else if (flag === false) {
      color = " incorrect"
    }

    return <div key={i} className={"progress-block" + color}></div>
  })

  return (
    <div className="progress-bar">
      {progressBlocks}
    </div>
  )
}

export default QuizProgressBar
