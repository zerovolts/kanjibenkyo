import React from "react";
import { Link } from "react-router-dom";

import ContainerBlock from "components/container-block/container-block";

const kanaText =
  "Kana are similar to the English alphabet, but they represent syllables rather than consonants and vowels separately. There are 46 basic kana, with two variants for each: Hiragana (ひらがな) for native Japanese words and Katakana (カタカナ) for foreign loanwords. You should be able to read these reasonably well before starting to study Kanji.";

const KanaIndex = () => {
  return (
    <div className="home-block">
      <h1>
        <span className="shadow-title">かな・</span>Kana<span className="shadow-title">
          ・カナ
        </span>
      </h1>
      {/* <Link to="/list/kana">
        <button>List</button>
      </Link>
      <Link to="/study/kana">
        <button>Flashcards</button>
      </Link>
      <Link to="/quiz/kana">
        <button>Quiz</button>
      </Link> */}
      <ContainerBlock>
        <p>{kanaText}</p>
      </ContainerBlock>
    </div>
  );
};

export default KanaIndex;
