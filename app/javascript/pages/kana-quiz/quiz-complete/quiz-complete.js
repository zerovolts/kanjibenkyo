import React from "react";

import CharacterBlock from "components/character-block/character-block";

import "./quiz-complete.scss";

const QuizComplete = ({ correctFlags, questions, createFunction }) => {
  const reviews = questions.map((question, i) => {
    const character = question.question[question.question_type];
    return (
      <CharacterBlock
        key={character + i}
        character={character}
        rating={correctFlags[i] * 100}
        url={"/kana/" + question.question["hiragana"]}
      />
    );
  });

  return (
    <div className="quiz">
      <h2>Quiz Complete!</h2>
      <div>
        You got {correctFlags.filter(flag => flag === true).length} out of{" "}
        {correctFlags.length} questions correct.
      </div>
      <div className="review-section">{reviews}</div>
      <button onClick={createFunction}>New Quiz</button>
    </div>
  );
};

export default QuizComplete;
