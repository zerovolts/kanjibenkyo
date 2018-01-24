import {observable, computed} from "mobx"

class KanaQuiz {
  @observable id = null
  @observable questions = []
  @observable questionIndex = 0
  @observable correctFlags = []

  constructor() {
    this.create = this.create.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)
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
        this.questionIndex = 0
        this.id = data.id
        this.questions = data.kana_quiz_questions
        this.correctFlags = Array(data.question_count).fill(null)
      })
  }

  submitAnswer(kana) {
    // set question object answer
    const answerType = this.currentQuestion.answer_type
    const isCorrect = kana === this.currentQuestion.question[answerType]
    this.correctFlags[this.questionIndex] = isCorrect
    this.questionIndex += 1

    if (this.questionIndex >= this.correctFlags.length) {
      this.submitQuiz()
    }
  }

  submitQuiz() {

  }
}

export default KanaQuiz
