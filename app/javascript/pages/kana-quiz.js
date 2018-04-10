import React from "react"
import {inject, observer} from "mobx-react"

import QuizProgressBar from "./kana-quiz/quiz-progress-bar"
import QuizChoices from "./kana-quiz/quiz-choices"
import QuizComplete from "./kana-quiz/quiz-complete"
import NewQuiz from "./kana-quiz/new-quiz"

const KanaQuiz = inject("store")(observer(props => {
  if (store.kanaQuiz.questions.length > 0) {
    if (store.kanaQuiz.complete) {
      return (
        <QuizComplete
          correctFlags={store.kanaQuiz.correctFlags}
          createFunction={store.kanaQuiz.create} />
      )
    }

    return (
      <React.Fragment>
        <QuizProgressBar correctFlags={store.kanaQuiz.correctFlags} />
        <QuizChoices
          question={store.kanaQuiz.kana}
          choices={store.kanaQuiz.currentQuestion.choices}
          submitFunction={store.kanaQuiz.submitAnswer} />
      </React.Fragment>
    )
  } else {
    return (
      <NewQuiz createFunction={store.kanaQuiz.create} />
    )
  }
}))

export default KanaQuiz
