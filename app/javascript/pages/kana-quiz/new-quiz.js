import React from "react"

const NewQuiz = ({createFunction}) => {

  return (
    <div className="quiz">
      <button onClick={createFunction}>Start Quiz</button>
    </div>
  )
}

export default NewQuiz
