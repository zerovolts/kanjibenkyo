import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ProgressBar from "components/progress-bar/progress-bar";
import Tag from "components/tag/tag";
import InfoGroup from "components/info-group/info-group";
import KunyomiTag from "pages/kanji-show/kunyomi-tag/kunyomi-tag";
import OnyomiTag from "pages/kanji-show/onyomi-tag/onyomi-tag";
import { fetchKanjiIfNeeded, fetchWordsIfNeeded } from "actions";
import { callApi } from "utils/request";

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
    callApi(`/api/v1/kanji/${character}`).then(data => {
      this.setState({
        kanji: data
      });
    });
  }

  renderWordTag = word => (
    <Tag style={{ background: "#f0f0e8" }}>
      <Link to={`/words/${word}`}>{word}</Link>
    </Tag>
  );

  render() {
    const { kanjiList, wordList } = this.props;
    const { kanji } = this.state;

    const containingWords = wordList.filter(word =>
      word.includes(kanji.character)
    );
    const firstPositionWords = containingWords
      .filter(word => word[0] === kanji.character)
      .map(this.renderWordTag);
    const lastPositionWords = containingWords
      .filter(
        word =>
          word[word.length - 1] === kanji.character &&
          word[0] !== word[word.length - 1]
      )
      .map(this.renderWordTag);
    const middlePositionWords = containingWords
      .filter(
        word =>
          word[0] !== kanji.character &&
          word[word.length - 1] !== kanji.character
      )
      .map(this.renderWordTag);

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
      meaning: kanji.meaning && kanji.meaning.join(", ")
    };

    const wordSection = {
      [`first position - ${firstPositionWords.length}`]: firstPositionWords,
      [`middle position - ${middlePositionWords.length}`]: middlePositionWords,
      [`last position - ${lastPositionWords.length}`]: lastPositionWords
    };

    return (
      <div className="kanji-show">
        <div className="top-section">
          <div className="kanji-header">
            <div className="character-header-block">{kanji.character}</div>
            <ProgressBar percent={kanji.rating} />
            <div className="tag-container">
              <Tag>Kanji</Tag>
              {kanji && <Tag>Grade {kanji.grade}</Tag>}
              {kanji && <Tag>{kanji.strokes} strokes</Tag>}
            </div>
          </div>
          <InfoGroup info={infoSections} style={{ width: "20rem" }} />
        </div>
        <div className="bottom-section">
          <InfoGroup info={wordSection} style={{ width: "38rem" }} />
        </div>
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
