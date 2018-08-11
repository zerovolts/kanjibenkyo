import React from "react";

import QuizProgressBar from "pages/kana-quiz/quiz-progress-bar/quiz-progress-bar";
import QuizChoices from "pages/kana-quiz/quiz-choices/quiz-choices";
import QuizComplete from "pages/kana-quiz/quiz-complete/quiz-complete";
import NewKanaQuiz from "pages/kana-quiz/new-quiz/new-kana-quiz";

class Quiz extends React.Component {
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
      questions,
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
            questions={questions}
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
      return <NewKanaQuiz createFunction={fetchQuiz} />;
    }
  }
}

export default Quiz;
