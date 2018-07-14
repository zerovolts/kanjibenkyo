import React from "react";

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

    return (
      <div className="word-show">
        <div className="kana-header">
          <h1 className="character-header">{word ? word.word : ""}</h1>
        </div>
        <div className="info-section">
          <div className="info-section-label">furigana</div>
          <div className="info-section-body">{word ? word.furigana : null}</div>
          <div className="info-section-label">meanings</div>
          <div className="info-section-body">
            {word ? word.meaning.join(", ") : null}
          </div>
        </div>
      </div>
    );
  }
}

export default WordShow;
