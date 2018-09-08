import React from "react";
import { Link } from "react-router-dom";
import { isHiragana, isKatakana } from "katsuyo";

import Tag from "components/tag/tag";
import InfoGroup from "components/info-group/info-group";
import CharacterBlock from "components/character-block/character-block";

import "./word-show.scss";

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

    const kanji = word
      ? word.word
          .split("")
          .filter(character => !isHiragana(character) && !isKatakana(character))
          .map(kanji => (
            <CharacterBlock
              character={kanji}
              rating={0}
              url={`/kanji/${kanji}`}
            />
          ))
      : [];

    const infoSections = {
      furigana: word && word.furigana,
      meanings: word && word.meaning.join(", ")
    };

    return (
      <div className="word-show">
        <div className="tag-container">
          <Tag>Word</Tag>
          {word && <Tag>JLPT N{word.jlpt}</Tag>}
        </div>
        <div className="kana-header">
          <h1 className="character-header">{word ? word.word : ""}</h1>
        </div>
        <div className="kanji-blocks">{kanji}</div>
        <div className="info-section">
          <InfoGroup info={infoSections} />
        </div>
      </div>
    );
  }
}

export default WordShow;
