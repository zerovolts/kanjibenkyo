import React from "react"
import {Link} from "react-router-dom"


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalCompleted: 0,
      totalAverage: 0
    }

    this.fetchQuizStats = this.fetchQuizStats.bind(this)
  }

  componentDidMount() {
    this.fetchQuizStats()
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

  render() {
    return (
      <div className="home">
        <h1>Quizzes Completed: {this.state.totalCompleted}</h1>
        <h2>Average Score: {this.state.totalAverage}%</h2>
        <ul>
          <li><Link to="/kana">Kana List</Link></li>
          <li><Link to="/kanji">Kanji List</Link></li>
          <li><Link to="/quiz/kana">Kana Quiz</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home
