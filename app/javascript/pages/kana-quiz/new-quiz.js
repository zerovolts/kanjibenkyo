import React from "react"

class NewQuiz extends React.Component {
  state = {
    totalCompleted: 0,
    totalAverage: 0
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
    const {totalCompleted, totalAverage} = this.state

    return (
      <div className="quiz">
        <h3>Quizzes Completed: {totalCompleted}</h3>
        <h3>Average Score: {totalAverage}%</h3>
        <button className="quiz-start-button" onClick={this.props.createFunction}>Start Quiz</button>
      </div>
    )
  }
}

export default NewQuiz
