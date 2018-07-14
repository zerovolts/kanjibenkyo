import React from "react";
import { Link } from "react-router-dom";

import ContainerBlock from "components/container-block/container-block";

const infoText = "Most Japanese words fit into seven categories. ";

const WordIndex = () => {
  return (
    <div className="home-block">
      <h1>
        <span className="shadow-title">単語・</span>Words<span className="shadow-title">
          ・単語
        </span>
      </h1>
      {/* <Link to="/words/verb-conjugator">
        <button>Verb Conjugator</button>
      </Link>
      <Link to="/words/all">
        <button>List</button>
      </Link> */}
      <ContainerBlock>
        <p>{infoText}</p>
        <ul>
          <li>
            い-Adjectives: <WordLink word="楽しい" />、<WordLink word="寒い" />、<WordLink word="辛い" />
          </li>
          <li>
            な-Adjectives: <WordLink word="静か" />、<WordLink word="綺麗" />、<WordLink word="便利" />
          </li>
          <li>
            Nouns: <WordLink word="猫" />、<WordLink word="折り紙" />、<WordLink word="天気" />
          </li>
          <li>
            Ichidan (る) Verbs: <WordLink word="見る" />、<WordLink word="寝る" />、<WordLink word="落ちる" />
          </li>
          <li>
            Godan Verbs: <WordLink word="行く" />、<WordLink word="学ぶ" />、<WordLink word="落とす" />
          </li>
          <li>
            Adverbs: <WordLink word="沢山" />、<WordLink word="多分" />、<WordLink word="便利" />
          </li>
          <li>
            Particles: <WordLink word="を" />、<WordLink word="と" />、<WordLink word="から" />
          </li>
        </ul>
        <hr />
        <div className="link-option">
          <p>
            <Link to="/words/all">Word Grid</Link> - A grid of all words based
            on JLPT level.
          </p>
        </div>
        <div className="link-option">
          <p>
            <Link to="/words/verb-conjugator">Verb Conjugator</Link> - An
            automated verb conjugator to teach the different conjugation
            patterns.
          </p>
        </div>
      </ContainerBlock>
    </div>
  );
};

const WordLink = ({ word }) => {
  return <a href={`/words/${word}`}>{word}</a>;
};

export default WordIndex;
