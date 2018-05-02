import React from "react"
import Katsuyo from "katsuyo"

class KanaTextbox extends React.Component {
  state = {
    text: ""
  }

  handleChange = (event) => {
    const diff = this.state.text 
    console.log(event.target)
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div className="kana-textbox">
        <input type="text" onChange={this.handleChange} value={this.state.text}></input>
        <div className="kana-textbox-jp">{Katsuyo.toKana(this.state.text)}</div>
      </div>
    )
  }
}

export default KanaTextbox