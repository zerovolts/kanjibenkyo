import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ProgressBar from "components/progress-bar/progress-bar";
import Time from "utils/time";
import { fetchKanaIfNeeded } from "actions";

import "./kana-show.scss";

class KanaShow extends React.Component {
  state = {
    kana: {}
  };

  componentDidMount() {
    this.fetchKana(this.props.match.params.kana);
    this.props.fetchKanaIfNeeded();
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
    const { kanaList } = this.props;
    const { kana } = this.state;
    const { hiragana, katakana, romaji } = kana;

    const kanaIndex = kanaList.indexOf(kana.hiragana);
    const lastIndex = kanaList.length - 1;

    const nextIndex = kanaIndex + 1;
    const prevIndex = kanaIndex - 1;
    const nextKana = kanaList[nextIndex < lastIndex ? nextIndex : 0];
    const prevKana = kanaList[prevIndex > 0 ? prevIndex : lastIndex];

    return (
      <div className="kana-show">
        {kana.current_user_kana && (
          <ProgressBar percent={kana.current_user_kana.rating} />
        )}
        <div className="kana-header">
          {/* these links shouldn't need to fetch with an onClick handler */}
          <Link
            to={`/kana/${prevKana}`}
            onClick={() => this.fetchKana(prevKana)}
          >
            <i className="fas fa-angle-left" />
          </Link>
          <h1 className="character-header">{hiragana}</h1>
          <Link
            to={`/kana/${nextKana}`}
            onClick={() => this.fetchKana(nextKana)}
          >
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

const mapStateToProps = state => ({
  kanaList: state.kanaList.kana.map(kana => kana.hiragana)
});

const mapDispatchToProps = dispatch => ({
  fetchKanaIfNeeded: () => dispatch(fetchKanaIfNeeded())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanaShow);
