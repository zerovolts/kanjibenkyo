import { connect } from "react-redux";

import Quiz from "pages/kana-quiz/quiz";

import {
  fetchKanaQuiz,
  selectKanaQuizQuestion,
  nextKanaQuizQuestion,
  previousKanaQuizQuestion,
  trySubmitKanaQuizAnswer
} from "actions";

import "./kana-quiz.scss";

const mapStateToProps = state => {
  const {
    started,
    finished,
    questions,
    answers,
    currentQuestionId,
    correctFlags
  } = state.kanaQuiz;

  const currentQuestion = questions[currentQuestionId] || null;

  return {
    currentQuestion: {
      questionId: currentQuestionId,
      question: currentQuestion
        ? currentQuestion.question[currentQuestion.question_type]
        : null,
      correctAnswer: currentQuestion
        ? currentQuestion.question[currentQuestion.answer_type]
        : null,
      choices: currentQuestion ? currentQuestion.choices : [],
      answer: answers[currentQuestionId]
        ? answers[currentQuestionId].choice
        : null
    },
    started,
    finished,
    correctFlags,
    questions
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuiz: () => dispatch(fetchKanaQuiz()),
  selectQuestion: id => dispatch(selectKanaQuizQuestion(id)),
  nextQuestion: () => dispatch(nextKanaQuizQuestion()),
  previousQuestion: () => dispatch(previousKanaQuizQuestion()),
  submitAnswer: answer => dispatch(trySubmitKanaQuizAnswer(answer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
