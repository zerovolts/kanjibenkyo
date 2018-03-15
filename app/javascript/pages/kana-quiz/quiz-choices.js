import React from "react"

const QuizChoices = ({question, choices, submitFunction}) => {

  const choiceButtons = choices.map(choice => (
    <button
      className="quiz-choice"
      key={choice}
      onClick={() => submitFunction(choice)}>
      {choice}
    </button>
  ))

  return (
    <div className="quiz">
      <div className="quiz-question">{question}</div>
      <div className="quiz-choice-container">
        {choiceButtons}
      </div>
    </div>
  )
}

export default QuizChoices
