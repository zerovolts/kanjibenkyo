import React from "react";
import { Link } from "react-router-dom";

import ContainerBlock from "components/container-block/container-block";
import Word from "components/word/word";
import { WordTypes } from "components/word/word";

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
            い-Adjectives: <Word word="楽しい" type={WordTypes.ADJECTIVE} />、
            <Word word="寒い" type={WordTypes.ADJECTIVE} />、
            <Word word="辛い" type={WordTypes.ADJECTIVE} />
          </li>
          <li>
            な-Adjectives: <Word word="静か" type={WordTypes.ADJECTIVE} />、
            <Word word="綺麗" type={WordTypes.ADJECTIVE} />、
            <Word word="便利" type={WordTypes.ADJECTIVE} />
          </li>
          <li>
            Nouns: <Word word="猫" type={WordTypes.NOUN} />、
            <Word word="折り紙" type={WordTypes.NOUN} />、
            <Word word="天気" type={WordTypes.NOUN} />
          </li>
          <li>
            Ichidan (る) Verbs: <Word word="見る" type={WordTypes.VERB} />、
            <Word word="寝る" type={WordTypes.VERB} />、
            <Word word="落ちる" type={WordTypes.VERB} />
          </li>
          <li>
            Godan Verbs: <Word word="行く" type={WordTypes.VERB} />、
            <Word word="学ぶ" type={WordTypes.VERB} />、
            <Word word="落とす" type={WordTypes.VERB} />
          </li>
          <li>
            Adverbs: <Word word="沢山" type={WordTypes.ADVERB} />、
            <Word word="多分" type={WordTypes.ADVERB} />、
            <Word word="便利" type={WordTypes.ADVERB} />
          </li>
          <li>
            Particles: <Word word="を" type={WordTypes.PARTICLE} />、
            <Word word="と" type={WordTypes.PARTICLE} />、
            <Word word="から" type={WordTypes.PARTICLE} />
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

export default WordIndex;
