import React from "react";
import { connect } from "react-redux";

import { fetchWordsIfNeeded } from "actions";
import ListHeader from "components/list-header/list-header";
import WordBlock from "components/word-block/word-block";

import "./word-list.scss";

class WordList extends React.Component {
  state = {
    jlpt: 5
  };

  componentDidMount() {
    this.props.fetchWords(this.state.jlpt);
  }

  changeJlpt = jlpt => {
    this.setState({ jlpt: jlpt }, () => this.props.fetchWords(jlpt));
  };

  renderWords = (word, i) => {
    return (
      <WordBlock
        key={word + i}
        character={word}
        url={`/words/${word}`}
        rating={null}
      />
    );
  };

  render() {
    const { wordsByJlpt } = this.props;
    const { jlpt } = this.state;

    const words = wordsByJlpt[jlpt];

    return (
      <div>
        <ListHeader
          title={`Vocabulary: ${words.length}`}
          options={[
            { name: "N1", value: 1 },
            { name: "N2", value: 2 },
            { name: "N3", value: 3 },
            { name: "N4", value: 4 },
            { name: "N5", value: 5 }
          ]}
          optionSelection={jlpt}
          onOptionChange={this.changeJlpt}
        />
        <div className="word-list">{words.map(this.renderWords)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wordsByJlpt: state.wordList.wordsByJlpt
});

const mapDispatchToProps = dispatch => ({
  fetchWords: jlpt => dispatch(fetchWordsIfNeeded(jlpt))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordList);
