import React from "react";
import { Link } from "react-router-dom";

import WordHoverbox from "components/word-hoverbox/word-hoverbox";

import "./word.scss";

export const WordTypes = {
  VERB: "word-verb",
  NOUN: "word-noun",
  ADJECTIVE: "word-adjective",
  ADVERB: "word-adverb",
  PARTICLE: "word-particle"
};

class Word extends React.Component {
  state = {
    hovering: false,
    wordInfo: {}
  };

  componentDidMount() {
    fetch(`/api/v1/words/${this.props.word}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          wordInfo: data
        });
      });
  }

  mouseEnter = () => {
    this.setState({
      hovering: true
    });
  };

  mouseLeave = () => {
    this.setState({
      hovering: false
    });
  };

  render() {
    const { word, type } = this.props;

    const hoverbox = this.state.hovering ? (
      <WordHoverbox word={word} info={this.state.wordInfo} />
    ) : null;

    return (
      <span className="word">
        <Link to={`/words/${word}`}>
          <span
            className={type}
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}
          >
            {word}
          </span>
        </Link>
        {hoverbox}
      </span>
    );
  }
}

export default Word;
