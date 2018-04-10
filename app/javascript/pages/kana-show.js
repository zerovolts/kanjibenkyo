import React from "react"

class KanaShow extends React.Component {
  state = {
    kana: {}
  }

  componentDidMount() {
    this.fetchKana(this.props.match.params.kana)
  }

  fetchKana(hiragana = "random") {
    fetch(`/api/v1/kana/${hiragana}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          kana: data
        })
      })
  }

  render() {
    const kana = this.state.kana

    return (
      <div className="kana-show">
        <h1 className="character-header">{kana.hiragana}</h1>
        <table>
          <tr><td>hiragana</td><td>{kana.hiragana}</td></tr>
          <tr><td>katakana</td><td>{kana.katakana}</td></tr>
          <tr><td>romaji</td><td>{kana.romaji}</td></tr>
        </table>
      </div>
    )
  }
}

export default KanaShow
