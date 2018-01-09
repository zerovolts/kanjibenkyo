import React from "react"

class KanaQuiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: "",
      answers: [],
      question_type: "",
      answer_type: "",
      answer: "",
      is_correct: null,
      correct_answer: null
    }

    this.submitAnswer = this.submitAnswer.bind(this)
    this.fetchQuestion = this.fetchQuestion.bind(this)
  }

  fetchQuestion() {
    fetch("/api/v1/quiz/kana")
      .then(res => res.json())
      .then(data => {
        this.setState({
          question: data.question,
          answers: data.answers,
          question_type: data.question_type,
          answer_type: data.answer_type
        })
      })
  }

  componentDidMount() {
    this.fetchQuestion()
  }

  submitAnswer(answer) {
    const body = {
      question: this.state.question,
      answer: answer,
      question_type: this.state.question_type,
      answer_type: this.state.answer_type
    }

    fetch("/api/v1/quiz/kana/check", {
      method: "POST",
      body: JSON.stringify(body),
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"},
    }).then(res => res.json())
      .then(data => {
        this.setState({
          is_correct: data.is_correct,
          correct_answer: data.correct_answer
        })
        this.fetchQuestion()
      })
  }

  render() {
    const answers = this.state.answers.map(answer => (
      <button className="quiz-choice" key={answer} onClick={() => this.submitAnswer(answer)}>{answer}</button>
    ))

    const result = this.state.is_correct == true
      ? "Correct!"
      : "Incorrect. The right answer is " + this.state.correct_answer

    return (
      <div>
        <div className="quiz">
          <div className="quiz-question">{this.state.question}</div>
          <div className="quiz-choice-container">
            {answers}
          </div>

          <h2>{this.state.correct_answer ? result : ""}</h2>
        </div>
      </div>
    )
  }
}

export default KanaQuiz
