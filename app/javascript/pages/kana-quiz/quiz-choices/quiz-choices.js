import React from "react";

const QuizChoices = ({
  question,
  choices,
  correctAnswer,
  answer,
  submitFunction
}) => {
  const choiceButtons = choices.map((choice, i) => {
    let colorClass = "";
    if (answer == choice) {
      // if selected
      colorClass =
        correctAnswer == choice
          ? "quiz-choice-correct"
          : "quiz-choice-incorrect";
    }

    return (
      <button
        className={`quiz-choice ${colorClass}`}
        key={choice + i}
        onClick={() => submitFunction(choice)}
      >
        {choice}
      </button>
    );
  });

  return (
    <div className="quiz">
      <div className="quiz-question">{question}</div>
      <div className="quiz-choice-container">{choiceButtons}</div>
    </div>
  );
};

export default QuizChoices;
