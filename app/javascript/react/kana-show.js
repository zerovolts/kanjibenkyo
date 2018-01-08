import React from "react"

class KanaShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      kana: {}
    }

    this.fetchKana = this.fetchKana.bind(this)
  }

  componentDidMount() {
    this.fetchKana()
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
      <div>
        <h2>{kana.hiragana}</h2>
        <div>hiragana: {kana.hiragana}</div>
        <div>katakana: {kana.katakana}</div>
        <div>romaji: {kana.romaji}</div>
      </div>
    )
  }
}

export default KanaShow
