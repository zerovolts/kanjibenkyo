import {
  KANA_QUIZ_REQUEST,
  KANA_QUIZ_RECEIVE,
  KANA_QUIZ_QUESTION_SELECT,
  KANA_QUIZ_ANSWER_SUBMIT,
  KANA_QUIZ_SUBMIT,
  KANA_QUIZ_RECEIVE_RESULTS
} from "../actions"

const initialState = {
  started: false,
  finished: false,
  isFetching: false,
  id: null,
  questions: [],
  answers: [],
  correctFlags: [],
  currentQuestionId: null
}

const kanaQuiz = (state = initialState, action) => {
  switch (action.type) {
    case KANA_QUIZ_REQUEST:
      return {
        ...initialState,
        isFetching: true,
        started: true,
        finished: false
      }
    case KANA_QUIZ_RECEIVE:
      return {
        ...state,
        isFetching: false,
        currentQuestionId: 0,
        id: action.kanaQuiz.id,
        questions: action.kanaQuiz.kana_quiz_questions,
        correctFlags: Array(action.kanaQuiz.total_questions).fill(null)
      }
    case KANA_QUIZ_QUESTION_SELECT:
      return {
        ...state,
        currentQuestionId: action.id
      }
    case KANA_QUIZ_ANSWER_SUBMIT:
      const answersCopy = state.answers.slice()
      const answerId = state.questions[state.currentQuestionId].id
      answersCopy[state.currentQuestionId] = {
        id: answerId,
        choice: action.answer
      }

      const correctFlags = state.correctFlags.slice()
      const currentQuestion = state.questions[state.currentQuestionId]
      correctFlags[state.currentQuestionId] = action.answer === currentQuestion.question[currentQuestion.answer_type]
      return {
        ...state,
        answers: answersCopy,
        correctFlags: correctFlags
      }
    case KANA_QUIZ_SUBMIT:
      return {
        ...state,
        started: false,
        finished: true
      }
    default:
      return state
  }
}

export default kanaQuiz
