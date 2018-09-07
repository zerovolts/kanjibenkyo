import React from "react";

import InfoGroup from "components/info-group/info-group";

class WordShow extends React.Component {
  state = {
    word: null
  };

  componentDidMount() {
    this.fetchWord(this.props.match.params.word);
  }

  fetchWord = word => {
    fetch(`/api/v1/words/${word}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          word: data
        });
      });
  };

  render() {
    const { word } = this.state;

    const infoSections = {
      furigana: word && word.furigana,
      meanings: word && word.meaning.join(", ")
    };

    return (
      <div className="word-show">
        <div className="kana-header">
          <h1 className="character-header">{word ? word.word : ""}</h1>
        </div>
        <InfoGroup info={infoSections} />
      </div>
    );
  }
}

export default WordShow;
