import React from "react";
import { Link } from "react-router-dom";

import ProgressBar from "components/progress-bar/progress-bar";
import InfoGroup from "components/info-group/info-group";
import KunyomiTag from "pages/kanji-show/kunyomi-tag/kunyomi-tag";
import OnyomiTag from "pages/kanji-show/onyomi-tag/onyomi-tag";

import "./kanji-show.scss";

class KanjiShow extends React.Component {
  state = {
    kanji: {}
  };

  componentDidMount() {
    this.fetchKanji(this.props.match.params.kanji);
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
    const { kanji } = this.state;

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

    return (
      <div className="kana-show">
        <ProgressBar percent={kanji.rating} />
        <div className="kana-header">
          <Link to={`/kanji/見`}>
            <i className="fas fa-angle-left" />
          </Link>
          <h1 className="character-header">{kanji.character}</h1>
          <Link to={`/kanji/見`}>
            <i className="fas fa-angle-right" />
          </Link>
        </div>
        <InfoGroup info={infoSections} />
      </div>
    );
  }
}

export default KanjiShow;
