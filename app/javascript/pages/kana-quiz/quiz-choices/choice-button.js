import React from "react";

const ChoiceButton = ({ answer, choice, submitFunction, correctAnswer }) => {
  let colorClass = "";
  if (answer === choice) {
    // if selected
    colorClass =
      correctAnswer == choice ? "quiz-choice-correct" : "quiz-choice-incorrect";
  }

  return (
    <button
      className={`quiz-choice ${colorClass}`}
      onClick={() => submitFunction(choice)}
    >
      {choice}
    </button>
  );
};

export default ChoiceButton;
