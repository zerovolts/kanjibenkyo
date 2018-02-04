import {observable, computed} from "mobx"

class KanaQuiz {
  @observable id = null
  @observable user_id = null
  @observable questions = []
  @observable questionIndex = 0
  @observable correctFlags = []
  @observable answers = []

  constructor() {
    this.create = this.create.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)
    this.submitQuiz = this.submitQuiz.bind(this)
  }

  @computed get currentQuestion() {
    return this.questions[this.questionIndex]
  }

  @computed get kana() {
    return this.currentQuestion.question[this.currentQuestion.question_type]
  }

  @computed get choices() {
    return this.currentQuestion.choices.slice()
  }

  @computed get complete() {
    return this.questionIndex >= this.questions.length
  }

  create() {
    fetch("/api/v1/quiz/kana")
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

  submitAnswer(kana) {
    // set question object answer
    const answerType = this.currentQuestion.answer_type
    const isCorrect = kana === this.currentQuestion.question[answerType]
    this.correctFlags[this.questionIndex] = isCorrect

    this.answers.push({
      id: this.currentQuestion.id,
      choice: kana
    })

    this.questionIndex += 1

    if (this.questionIndex >= this.correctFlags.length) {
      this.submitQuiz()
    }
  }

  submitQuiz() {
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
    }).then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }
}

export default KanaQuiz
