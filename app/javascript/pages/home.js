import React from "react"
import {Link} from "react-router-dom"

import CharacterBlock from "../components/character-block"

class Home extends React.Component {
  state = {
    totalCompleted: 0,
    totalAverage: 0,
    dailyKanji: {}
  }

  componentDidMount() {
    this.fetchQuizStats()
    this.fetchDailyKanji()
  }

  fetchQuizStats() {
    fetch("/api/v1/quiz/kana/stats")
      .then(res => res.json())
      .then(data => {
        this.setState({
          totalCompleted: data.total_completed,
          totalAverage: data.total_average
        })
      })
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
        <div className="home-block">
          <h1><span className="shadow-title">かな</span> Kana <span className="shadow-title">カナ</span></h1>
          <ul>
            <li><Link to="/kana">List</Link></li>・<li><Link to="/study/kana">Flashcards</Link></li>・<li><Link to="/quiz/kana">Quiz</Link></li>
          </ul>
          <p>Kana are similar to the English alphabet, but they represent syllables rather than consonants and vowels separately. There are 46 basic kana, with two variants for each: Hiragana (ひらがな) for native Japanese words and Katakana (カタカナ) for foreign loanwords. You should be able to read these reasonably well before starting to study Kanji.</p>
          <h3>Quizzes Completed: {this.state.totalCompleted}</h3>
          <h3>Average Score: {this.state.totalAverage}%</h3>
        </div>

        <div className="home-block">
          <h1><span className="shadow-title">漢字</span> Kanji <span className="shadow-title">漢字</span></h1>
          <ul>
            <li><Link to="/kanji">List</Link></li>・<li className="strike">Quiz</li>
          </ul>
          <p>Kanji (漢字) are Chinese characters that were adopted for written Japanese before Japan had a writing system of its own. Unlike Kana, Kanji each have multiple pronunciations and meanings associated with them, depending on the word they are being used in. There are thousands of Kanji in existence, but we will focus on the 2,136 jōyō kanji that are in regular use and taught in Japanese schools.</p>

          <div className="daily-kanji">
            <CharacterBlock
              character={this.state.dailyKanji.character}
              url={"/kanji/" + this.state.dailyKanji.character}
            />
            Kanji of the Day
          </div>
        </div>

      </div>
    )
  }
}

export default Home
