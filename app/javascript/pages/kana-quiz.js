import React from "react";
import { connect } from "react-redux";

import QuizProgressBar from "./kana-quiz/quiz-progress-bar";
import QuizChoices from "./kana-quiz/quiz-choices";
import QuizComplete from "./kana-quiz/quiz-complete";
import NewQuiz from "./kana-quiz/new-quiz";

import {
  fetchKanaQuiz,
  selectKanaQuizQuestion,
  nextKanaQuizQuestion,
  previousKanaQuizQuestion,
  trySubmitKanaQuizAnswer
} from "../actions";

class KanaQuiz extends React.Component {
  keyDown = event => {
    const key = event.key;
    const { choices } = this.props.currentQuestion;
    const { submitAnswer, previousQuestion, nextQuestion } = this.props;

    switch (key) {
      case "1":
      case "2":
      case "3":
      case "4":
        submitAnswer(choices[parseInt(key) - 1]);
        break;
      case "ArrowLeft":
        previousQuestion();
        break;
      case "ArrowRight":
      case "Enter":
      case "Space":
        nextQuestion();
        break;
    }
  };

  render() {
    const {
      questionId,
      question,
      choices,
      answer,
      correctAnswer
    } = this.props.currentQuestion;

    const {
      started,
      finished,
      correctFlags,
      fetchQuiz,
      selectQuestion,
      nextQuestion,
      previousQuestion,
      submitAnswer
    } = this.props;

    if (started) {
      if (finished) {
        return (
          <QuizComplete
            correctFlags={correctFlags}
            createFunction={fetchQuiz}
          />
        );
      }

      const nextButton =
        answer != null ? (
          <button className="green" onClick={nextQuestion}>
            Next
          </button>
        ) : null;

      return (
        <div className="kana-quiz" onKeyDown={this.keyDown} tabIndex="0">
          <QuizProgressBar
            currentId={questionId}
            correctFlags={correctFlags}
            selectQuestion={selectQuestion}
          />

          <QuizChoices
            question={question}
            choices={choices}
            correctAnswer={correctAnswer}
            answer={answer}
            submitFunction={submitAnswer}
          />

          <div className="finish-section">
            <button className="yellow" onClick={previousQuestion}>
              Prev
            </button>
            {nextButton}
          </div>
        </div>
      );
    } else {
      return <NewQuiz createFunction={fetchQuiz} />;
    }
  }
}

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
    correctFlags
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
)(KanaQuiz);
