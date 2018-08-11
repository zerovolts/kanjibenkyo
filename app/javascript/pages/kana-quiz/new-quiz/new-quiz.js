import React from "react";

const NewQuiz = ({ totalCompleted, totalAverage, createFunction }) => {
  return (
    <div className="quiz">
      <h3>Quizzes Completed: {totalCompleted}</h3>
      <h3>Average Score: {totalAverage}%</h3>
      <button className="quiz-start-button" onClick={createFunction}>
        Start Quiz
      </button>
    </div>
  );
};

export default NewQuiz;
