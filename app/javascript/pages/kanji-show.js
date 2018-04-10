import React from "react"

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
    const kanji = this.state.kanji

    return (
      <div className="kana-show">
        <h1 className="character-header">{kanji.character}</h1>
        <table>
          <tbody>
            <tr>
              <td>kun'yomi</td>
              <td>{kanji.kunyomi ? kanji.kunyomi.join(", ") : null}</td>
            </tr>
            <tr>
              <td>on'yomi</td>
              <td>{kanji.onyomi ? kanji.onyomi.join(", ") : null}</td>
              </tr>
            <tr>
              <td>meaning</td>
              <td>{kanji.meaning ? kanji.meaning.join(", ") : null}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default KanjiShow
