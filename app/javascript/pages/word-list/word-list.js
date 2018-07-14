import React from "react";

import WordBlock from "components/word-block/word-block";
import RadioButton from "components/radio-button/radio-button";

import "./word-list.scss";

class WordList extends React.Component {
  state = {
    jlpt: 5,
    words: []
  };

  componentDidMount() {
    this.fetchWords();
  }

  fetchWords = () => {
    fetch(`/api/v1/words/jlpt/${this.state.jlpt}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          words: data
        });
      });
  };

  changeJlpt = jlpt => {
    this.setState({
      jlpt: jlpt
    });
  };

  render() {
    const wordBlocks = this.state.words.map((word, i) => {
      return (
        <WordBlock
          key={word.word + i}
          character={word.word}
          url={`/words/${word.word}`}
          rating={null}
        />
      );
    });

    return (
      <div>
        <div className="word-list-header">
          <div className="word-label">
            Vocabulary: {this.state.words.length}
          </div>
          <div className="radio-horizontal">
            <RadioButton
              value={1}
              selected={this.state.jlpt}
              onChange={this.changeJlpt}
              then={this.fetchWords}
            >
              N1
            </RadioButton>

            <RadioButton
              value={2}
              selected={this.state.jlpt}
              onChange={this.changeJlpt}
              then={this.fetchWords}
            >
              N2
            </RadioButton>

            <RadioButton
              value={3}
              selected={this.state.jlpt}
              onChange={this.changeJlpt}
              then={this.fetchWords}
            >
              N3
            </RadioButton>

            <RadioButton
              value={4}
              selected={this.state.jlpt}
              onChange={this.changeJlpt}
              then={this.fetchWords}
            >
              N4
            </RadioButton>

            <RadioButton
              value={5}
              selected={this.state.jlpt}
              onChange={this.changeJlpt}
              then={this.fetchWords}
            >
              N5
            </RadioButton>
          </div>
        </div>
        <div className="word-list">{wordBlocks}</div>
      </div>
    );
  }
}

export default WordList;
