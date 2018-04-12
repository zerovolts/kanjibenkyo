import React from "react"
import {Link} from "react-router-dom"

import Torii from "./home/torii"
import CharacterBlock from "../components/character-block"

class Home extends React.Component {
  state = {
    dailyKanji: {}
  }

  componentDidMount() {
    this.fetchDailyKanji()
  }

  fetchDailyKanji() {
    fetch("/api/v1/kanji/daily")
      .then(res => res.json())
      .then(data => {
        this.setState({
          dailyKanji: data
        })
      })
  }

  render() {
    return (
      <div className="home">
        <Torii>
          <h1>Welcome!</h1>
          <div className="choice-container">
            <div className="choice-box">
              <h2>Beginner at Japanese</h2>
              <p>If you are not comfortable with Kana, or you want to brush up.</p>
              <Link to={"/kana"}><button>Choose Path</button></Link>
            </div>
            <div className="choice-box">
              <h2>Skip the Kana</h2>
              <p>For those who already know Kana, skip straight to the Kanji.</p>
              <Link to={"/kanji"}><button>Choose Path</button></Link>
            </div>
          </div>
        </Torii>
      </div>
    )
  }
}

// <div className="daily-kanji">
//   <CharacterBlock
//     character={this.state.dailyKanji.character}
//     url={"/kanji/" + this.state.dailyKanji.character} />
//   Kanji of the Day
// </div>

export default Home
