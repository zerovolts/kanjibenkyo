import React from "react";

import NewQuiz from "pages/kana-quiz/new-quiz/new-quiz";

class NewKanaQuiz extends React.Component {
  state = {
    totalCompleted: 0,
    totalAverage: 0
  };

  componentDidMount() {
    this.fetchQuizStats();
  }

  fetchQuizStats() {
    fetch("/api/v1/quiz/kana/stats")
      .then(res => res.json())
      .then(data => {
        this.setState({
          totalCompleted: data.total_completed,
          totalAverage: data.total_average
        });
      });
  }

  render() {
    const { totalCompleted, totalAverage } = this.state;

    return (
      <NewQuiz
        totalCompleted={totalCompleted}
        totalAverage={totalAverage}
        createFunction={this.props.createFunction}
      />
    );
  }
}

export default NewKanaQuiz;
