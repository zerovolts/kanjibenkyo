import {observable, computed} from "mobx"

class KanaQuiz {
  @observable id = null
  @observable user_id = null
  @observable questions = []
  @observable correctFlags = []
  answers = []

  newQuiz = () => {
    return fetch("/api/v1/quiz/kana")
      .then(res => res.json())
      .then(data => {
        this.answers = []
        this.questionIndex = 0
        this.id = data.id
        this.user_id = data.user_id
        this.questions = data.kana_quiz_questions
        this.correctFlags = Array(data.total_questions).fill(null)
      })
  }

  getQuestion = (questionId) => {
    return {
      question: this.questions[questionId],
      answer: (questionId >= this.answers.length) ? null : this.answers[questionId],
      correctAnswer: this.correctAnswer(questionId)
    }
  }

  correctAnswer = (questionId) => {
    const question = this.questions[questionId]
    return question.question[question.answer_type]
  }

  submitAnswer = (questionId, answer) => {
    const isCorrect = answer === this.correctAnswer(questionId)
    this.correctFlags[questionId] = isCorrect

    this.answers.push({
      id: this.getQuestion(questionId).question.id,
      choice: answer
    })
  }

  submitQuiz = () => {
    const payload = {
      id: this.id,
      user_id: this.user_id,
      answers: this.answers
    }

    fetch("/api/v1/quiz/kana/check", {
      credentials: "same-origin",
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    })
  }
}

export default KanaQuiz
