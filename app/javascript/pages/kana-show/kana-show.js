import React from "react";
import { Link } from "react-router-dom";

import ProgressBar from "components/progress-bar/progress-bar";
import Time from "utils/time";

import "./kana-show.scss";

class KanaShow extends React.Component {
  state = {
    kana: {}
  };

  componentDidMount() {
    this.fetchKana(this.props.match.params.kana);
  }

  fetchKana(hiragana = "random") {
    fetch(`/api/v1/kana/${hiragana}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          kana: data
        });
      });
  }

  render() {
    const { kana } = this.state;
    const { hiragana, katakana, romaji } = kana;

    return (
      <div className="kana-show">
        {kana.current_user_kana && (
          <ProgressBar percent={kana.current_user_kana.rating} />
        )}
        <div className="kana-header">
          <Link to={`/kana/${"あ"}`}>
            <i className="fas fa-angle-left" />
          </Link>
          <h1 className="character-header">{hiragana}</h1>
          <Link to={`/kana/${"あ"}`}>
            <i className="fas fa-angle-right" />
          </Link>
        </div>
        <table className="kana-show-table">
          <tbody>
            <tr>
              <td>hiragana</td>
              <td>{hiragana}</td>
            </tr>
            <tr>
              <td>katakana</td>
              <td>{katakana}</td>
            </tr>
            <tr>
              <td>romaji</td>
              <td>{romaji}</td>
            </tr>
            {kana.current_user_kana && (
              <React.Fragment>
                <tr>
                  <td>streak</td>
                  <td>{kana.current_user_kana.streak}</td>
                </tr>
                <tr>
                  <td>score</td>
                  <td>{kana.current_user_kana.score}</td>
                </tr>
                <tr>
                  <td>correct</td>
                  <td>{kana.current_user_kana.correct}</td>
                </tr>
                <tr>
                  <td>next review</td>
                  <td>
                    {Time.largestTimeIntervalString(
                      Date.parse(kana.current_user_kana.time_of_next_review)
                    )}
                  </td>
                </tr>
              </React.Fragment>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default KanaShow;
