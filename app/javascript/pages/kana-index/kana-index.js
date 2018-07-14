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
      <ContainerBlock>
        <p>{kanaText}</p>
        <hr />
        <div className="link-option">
          <p>
            <Link to="/list/kana">Kana Grid</Link> - An interactive grid of all
            kana and your skill with each one.
          </p>
        </div>
        <div className="link-option">
          <p>
            <Link to="/study/kana">Flashcards</Link> - Study kana with
            flashcards.
          </p>
        </div>
        <div className="link-option">
          <p>
            <Link to="/quiz/kana">Kana Quiz</Link> - Test your knowledge and
            update your Kana Grid skill colors.
          </p>
        </div>
      </ContainerBlock>
    </div>
  );
};

export default KanaIndex;
