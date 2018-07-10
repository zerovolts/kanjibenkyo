import React from "react";

import Flashcard from "./kana-study/flashcard";

import "./kana-study.scss";

class KanaStudy extends React.Component {
  state = {
    kana: [],
    currentIndex: 0,
    flipped: false,
    sliding: false
  };

  componentDidMount() {
    fetch("/api/v1/study/kana")
      .then(res => res.json())
      .then(data => {
        this.setState({
          kana: data
        });
      });
  }

  nextCard = () => {
    this.setState({
      flipped: false,
      sliding: true
    });

    setTimeout(() => {
      if (this.state.currentIndex < this.state.kana.length - 1) {
        this.setState({
          sliding: false,
          currentIndex: this.state.currentIndex + 1
        });
      } else {
        this.setState({
          sliding: false,
          currentIndex: 0
        });
      }
    }, 1000);
  };

  flipCard = () => {
    this.setState({
      flipped: !this.state.flipped
    });
  };

  render() {
    const currentKana = this.state.kana[this.state.currentIndex] || {};

    return (
      <div className="kana-study">
        <Flashcard
          front={currentKana.hiragana}
          back={currentKana.romaji}
          flipped={this.state.flipped}
          sliding={this.state.sliding}
          flipFunction={this.flipCard}
        />
        <button onClick={this.nextCard}>Next Card</button>
      </div>
    );
  }
}

export default KanaStudy;
