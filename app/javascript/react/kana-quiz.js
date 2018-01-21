import React from "react"
import {inject, observer} from "mobx-react"

import QuizProgressBar from "./quiz-progress-bar"


const KanaQuiz = inject("store")(observer(props => {
  if (store.kanaQuiz.questions.length > 0) {
    if (store.kanaQuiz.complete) {
      return (
        <div className="quiz">
          <div>Quiz Complete!</div>
          <div>You got {store.kanaQuiz.correctFlags.filter(flag => flag === true).length} out of {store.kanaQuiz.correctFlags.length} questions correct.</div>
          <button onClick={store.kanaQuiz.create}>New Quiz</button>
        </div>
      )
    }

    const answers = store.kanaQuiz.currentQuestion.choices.map(choice => (
      <button className="quiz-choice" key={choice} onClick={() => store.kanaQuiz.submitAnswer(choice)}>{choice}</button>
    ))

    return (
      <div>
        <QuizProgressBar correctFlags={store.kanaQuiz.correctFlags} />

        <div className="quiz">
          <div className="quiz-question">{store.kanaQuiz.kana}</div>
          <div className="quiz-choice-container">
            {answers}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="quiz">
        <button onClick={store.kanaQuiz.create}>Start Quiz</button>
      </div>
    )
  }
}))

export default KanaQuiz
