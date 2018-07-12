import React from "react";
import { Link } from "react-router-dom";

import ContainerBlock from "components/container-block/container-block";

const infoText =
  "Most Japanese words fit into six categories: い-adjectives, な-adjectives, nouns, ichidan (る) verbs, godan verbs, and adverbs.";

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
      </ContainerBlock>
    </div>
  );
};

export default WordIndex;
