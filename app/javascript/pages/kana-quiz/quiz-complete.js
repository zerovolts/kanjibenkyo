import React from "react"

const QuizComplete = ({correctFlags, createFunction}) => {
  return (
    <div className="quiz">
      <div>Quiz Complete!</div>
      <div>You got {correctFlags.filter(flag => flag === true).length} out of {correctFlags.length} questions correct.</div>
      <button onClick={createFunction}>New Quiz</button>
    </div>
  )
}

export default QuizComplete
