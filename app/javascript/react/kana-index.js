import React from "react"

class KanaIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      kanaList: []
    }

    this.fetchKanaList = this.fetchKanaList.bind(this)
  }

  componentDidMount() {
    this.fetchKanaList()
  }

  fetchKanaList() {
    fetch("/api/v1/kana")
      .then(res => res.json())
      .then(data => {
        this.setState({
          kanaList: data
        })
      })
  }

  render() {
    const kanaList = this.state.kanaList.map(kana =>
      <div key={kana.hiragana}>
        <h2>{kana.hiragana}</h2>
        <div>hiragana: {kana.hiragana}</div>
        <div>katakana: {kana.katakana}</div>
        <div>romaji: {kana.romaji}</div>
      </div>
    )

    return (
      <div>
        {kanaList}
      </div>
    )
  }
}

export default KanaIndex
