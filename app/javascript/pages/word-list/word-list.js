import React from "react";

import WordBlock from "components/word-block/word-block";

class WordList extends React.Component {
  state = {
    words: []
  };

  componentDidMount() {
    this.fetchWords();
  }

  fetchWords = () => {
    fetch("/api/v1/words")
      .then(res => res.json())
      .then(data => {
        this.setState({
          words: data
        });
      });
  };

  render() {
    const wordBlocks = this.state.words.map(word => {
      return (
        <WordBlock key={word.word} character={word.word} url="" rating={null} />
      );
    });

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Vocabulary</h1>
        <div className="word-list">{wordBlocks}</div>
      </div>
    );
  }
}

export default WordList;
