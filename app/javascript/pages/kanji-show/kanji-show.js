import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ProgressBar from "components/progress-bar/progress-bar";
import Tag from "components/tag/tag";
import InfoGroup from "components/info-group/info-group";
import KunyomiTag from "pages/kanji-show/kunyomi-tag/kunyomi-tag";
import OnyomiTag from "pages/kanji-show/onyomi-tag/onyomi-tag";
import { fetchKanjiIfNeeded, fetchWordsIfNeeded } from "actions";

import "./kanji-show.scss";

class KanjiShow extends React.Component {
  state = {
    kanji: {}
  };

  componentDidMount() {
    this.fetchKanji(this.props.match.params.kanji);
    this.props.fetchKanjiIfNeeded();
    this.props.fetchWordsIfNeeded();
  }

  fetchKanji(character) {
    fetch(`/api/v1/kanji/${character}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          kanji: data
        });
      });
  }

  render() {
    const { kanjiList, wordList } = this.props;
    const { kanji } = this.state;

    console.log(wordList);
    const containingWords = wordList
      .filter(word => word.includes(kanji.character))
      .map(word => (
        <Tag style={{ background: "#f0f0e8" }}>
          <Link to={`/words/${word}`}>{word}</Link>
        </Tag>
      ));

    const kanjiIndex = kanjiList.indexOf(kanji.character);
    const lastIndex = kanjiList.length - 1;
    const prevIndex = kanjiIndex - 1;
    const nextIndex = kanjiIndex + 1;

    const prevKanji = kanjiList[prevIndex > 0 ? prevIndex : lastIndex];
    const nextKanji = kanjiList[nextIndex < lastIndex ? nextIndex : 0];

    const kunyomi = kanji.kunyomi
      ? kanji.kunyomi.map((kunyomi, i) => (
          <KunyomiTag kunyomi={kunyomi} key={kunyomi + i} />
        ))
      : null;

    const onyomi = kanji.onyomi
      ? kanji.onyomi.map((onyomi, i) => (
          <OnyomiTag onyomi={onyomi} key={onyomi + i} />
        ))
      : null;

    const infoSections = {
      "kun'yomi": kunyomi,
      "on'yomi": onyomi,
      meaning: kanji.meaning && kanji.meaning.join(", "),
      words: containingWords
    };

    return (
      <div className="kana-show">
        <div className="tag-container">
          <Tag>Kanji</Tag>
          {kanji && <Tag>Grade {kanji.grade}</Tag>}
          {kanji && <Tag>{kanji.strokes} strokes</Tag>}
        </div>
        <ProgressBar percent={kanji.rating} />
        <div className="kana-header">
          <Link
            to={`/kanji/${prevKanji}`}
            onClick={() => this.fetchKanji(prevKanji)}
          >
            <i className="fas fa-angle-left" />
          </Link>
          <h1 className="character-header">{kanji.character}</h1>
          <Link
            to={`/kanji/${nextKanji}`}
            onClick={() => this.fetchKanji(nextKanji)}
          >
            <i className="fas fa-angle-right" />
          </Link>
        </div>
        <InfoGroup info={infoSections} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  kanjiList: state.kanjiList.kanji.map(kanji => kanji.character),
  wordList: [].concat(
    ...[5, 4, 3, 2, 1].map(jlpt => state.wordList.wordsByJlpt[jlpt])
  )
});

const mapDispatchToProps = dispatch => ({
  fetchKanjiIfNeeded: () => dispatch(fetchKanjiIfNeeded()),
  fetchWordsIfNeeded: () =>
    [5, 4, 3, 2, 1].map(x => dispatch(fetchWordsIfNeeded(x)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanjiShow);
