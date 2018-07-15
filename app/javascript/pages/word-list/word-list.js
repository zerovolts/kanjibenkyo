import React from "react";

import ListHeader from "components/list-header/list-header";
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
        <ListHeader
          title={`Vocabulary: ${this.state.words.length}`}
          options={[
            { name: "N1", value: 1 },
            { name: "N2", value: 2 },
            { name: "N3", value: 3 },
            { name: "N4", value: 4 },
            { name: "N5", value: 5 }
          ]}
          optionSelection={this.state.jlpt}
          onOptionChange={this.changeJlpt}
        />
        <div className="word-list">{wordBlocks}</div>
      </div>
    );
  }
}

export default WordList;
