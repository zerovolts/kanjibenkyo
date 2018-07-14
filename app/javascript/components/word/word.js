import React from "react";
import { Link } from "react-router-dom";

import "./word.scss";

export const WordTypes = {
  VERB: "word-verb",
  NOUN: "word-noun",
  ADJECTIVE: "word-adjective",
  ADVERB: "word-adverb",
  PARTICLE: "word-particle"
};

const Word = ({ word, type }) => {
  return (
    <Link to={`/words/${word}`}>
      <span className={type}>{word}</span>
    </Link>
  );
};

export default Word;
