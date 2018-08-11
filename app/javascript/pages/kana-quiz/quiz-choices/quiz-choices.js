import React from "react";

import ChoiceButton from "pages/kana-quiz/quiz-choices/choice-button";

const QuizChoices = ({
  question,
  choices,
  correctAnswer,
  answer,
  submitFunction
}) => {
  const choiceButtons = choices.map((choice, i) => (
    <ChoiceButton
      key={choice + i}
      answer={answer}
      choice={choice}
      submitFunction={submitFunction}
      correctAnswer={correctAnswer}
    />
  ));

  return (
    <div className="quiz">
      <div className="quiz-question">{question}</div>
      <div className="quiz-choice-container">{choiceButtons}</div>
    </div>
  );
};

export default QuizChoices;
