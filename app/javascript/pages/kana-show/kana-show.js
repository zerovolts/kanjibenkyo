import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CharacterBlock from "components/character-block/character-block";
import ProgressBar from "components/progress-bar/progress-bar";
import Tag from "components/tag/tag";
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
        <div className="kana-header">
          {/* <Link
            to={`/kana/${prevKana}`}
            onClick={() => this.fetchKana(prevKana)}
          >
            <i className="fas fa-angle-left" />
          </Link> */}
          <div className="kana-character-block">{hiragana}</div>
          {/* <Link
            to={`/kana/${nextKana}`}
            onClick={() => this.fetchKana(nextKana)}
          >
            <i className="fas fa-angle-right" />
          </Link> */}
          {kana.current_user_kana && (
            <ProgressBar percent={kana.current_user_kana.rating} />
          )}
          <div className="tag-container">
            <Tag>Kana</Tag>
            {kana && kana.obsolete && <Tag>Obsolete</Tag>}
          </div>
        </div>
        <div>
          <div className="character-blocks">
            <CharacterBlock
              character={hiragana}
              rating={kana.rating}
              url={`/kana/${hiragana}`}
            />
            <CharacterBlock
              character={katakana}
              rating={kana.rating}
              url={`/kana/${hiragana}`}
            />
            <CharacterBlock
              character={romaji}
              rating={kana.rating}
              url={`/kana/${hiragana}`}
            />
          </div>
          <table className="kana-show-table">
            <tbody>
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
