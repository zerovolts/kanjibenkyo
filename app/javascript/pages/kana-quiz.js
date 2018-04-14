import React from "react"
import {inject, observer} from "mobx-react"

import QuizProgressBar from "./kana-quiz/quiz-progress-bar"
import QuizChoices from "./kana-quiz/quiz-choices"
import QuizComplete from "./kana-quiz/quiz-complete"
import NewQuiz from "./kana-quiz/new-quiz"

/*
Actions:
- selectQuestion
- nextQuestion
- prevQuestion
- submitAnswer
*/

@inject("store") @observer
class KanaQuiz extends React.Component {
  state = {
    questionId: 0,
    question: null,
    choices: [],
    correctAnswer: null,
    answer: null,
    finished: true
  }

  // componentDidUpdate() {
  //   this.selectQuestion(this.state.questionId)
  // }

  submitAnswer = (answer) => {
    if (this.state.answer == null) {
      this.setState({ answer: answer })
      store.kanaQuiz.submitAnswer(this.state.questionId, answer)
    }
  }

  newQuiz = () => {
    store.kanaQuiz.newQuiz().then(() => {
      this.setState({ finished: false })
      this.selectQuestion(0)
    })
  }

  selectQuestion = (questionId) => {
    const {question, answer} = store.kanaQuiz.getQuestion(questionId)

    this.setState({
      questionId: questionId,
      question: question.question[question.question_type],
      choices: question.choices,
      correctAnswer: store.kanaQuiz.correctAnswer(questionId),
      answer: answer ? answer.choice : null
    })
  }

  nextQuestion = () => {
    const {questionId, answer} = this.state
    const {questions} = store.kanaQuiz

    if (answer != null) {
      if (questionId >= questions.length - 1) {
        store.kanaQuiz.submitQuiz()
        this.setState({ finished: true })
      } else {
        this.setState((prevState, props) => {
          return { questionId: prevState.questionId + 1 }
        }, () => this.selectQuestion(questionId + 1))
      }
    }
  }

  prevQuestion = () => {
    const {questionId} = this.state

    if (questionId > 0) {
      this.setState((prevState, props) => {
        return { questionId: prevState.questionId - 1 }
      }, () => this.selectQuestion(questionId - 1))
    }
  }

  keyDown = event => {
    const key = event.key
    const {choices} = this.state

    switch (key) {
    case "1":
    case "2":
    case "3":
    case "4":
      this.submitAnswer(choices[parseInt(key) - 1])
      break
    case "ArrowLeft":
      this.prevQuestion()
      break
    case "ArrowRight":
    case "Enter":
    case "Space":
      this.nextQuestion()
      break
    }
  }

  render() {
    const {questionId, question, choices, answer, correctAnswer, finished} = this.state
    const {kanaQuiz} = store

    if (kanaQuiz.questions.length > 0) {
      if (finished) {
        return (
          <QuizComplete
            correctFlags={kanaQuiz.correctFlags}
            createFunction={this.newQuiz} />
        )
      }

      const nextButton = answer != null
        ? <button className="green" onClick={this.nextQuestion}>Next</button>
        : null

      return (
        <div className="kana-quiz" onKeyDown={this.keyDown} tabIndex="0">
          <QuizProgressBar
            currentId={questionId}
            correctFlags={kanaQuiz.correctFlags}
            selectQuestion={this.selectQuestion} />

          <QuizChoices
            question={question}
            choices={choices}
            correctAnswer={correctAnswer}
            answer={answer}
            submitFunction={this.submitAnswer} />

          <div className="finish-section">
            <button className="yellow" onClick={this.prevQuestion}>
              Prev
            </button>
            {nextButton}
          </div>
        </div>
      )
    } else {
      return (
        <NewQuiz createFunction={this.newQuiz} />
      )
    }
  }
}

export default KanaQuiz
