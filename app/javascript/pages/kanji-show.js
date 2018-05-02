import React from "react"
import { Link } from "react-router-dom"

import ProgressBar from "../components/progress-bar"
import KunyomiTag from "./kanji-show/kunyomi-tag"
import OnyomiTag from "./kanji-show/onyomi-tag"

class KanjiShow extends React.Component {
  state = {
    kanji: {}
  }

  componentDidMount() {
    this.fetchKanji(this.props.match.params.kanji)
  }

  fetchKanji(character) {
    fetch(`/api/v1/kanji/${character}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          kanji: data
        })
      })
  }

  render() {
    const { kanji } = this.state

    const kunyomi = kanji.kunyomi ? kanji.kunyomi.map((kunyomi, i) =>
      <KunyomiTag kunyomi={kunyomi} key={kunyomi + i} /> 
    ) : null

    const onyomi = kanji.onyomi ? kanji.onyomi.map((onyomi, i) =>
      <OnyomiTag onyomi={onyomi} key={onyomi + i} />
     ) : null

    return (
      <div className="kana-show">
        <ProgressBar percent={kanji.rating} />
        <div className="kana-header">
          <Link to={`/kanji/見`}>
            <i className="fas fa-angle-left"></i>
          </Link>
          <h1 className="character-header">
            {kanji.character}
          </h1>
          <Link to={`/kanji/見`}>
            <i className="fas fa-angle-right"></i>
          </Link>
        </div>

        <div className="info-section">
          <div className="info-section-label">kun'yomi</div>
          <div className="info-section-body">{kunyomi}</div>
          <div className="info-section-label">on'yomi</div>
          <div className="info-section-body">{onyomi}</div>
          <div className="info-section-label">meaning</div>
          <div className="info-section-body">{kanji.meaning ? kanji.meaning.join(", ") : null}</div>
        </div>
      </div>
    )
  }
}

// {kanji.kunyomi ? kanji.kunyomi.join(", ") : null}

export default KanjiShow
