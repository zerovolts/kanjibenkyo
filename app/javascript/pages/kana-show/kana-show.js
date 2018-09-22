import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";

import CharacterBlock from "components/character-block/character-block";
import ProgressBar from "components/progress-bar/progress-bar";
import Tag from "components/tag/tag";
import Time from "utils/time";
import { fetchKanaIfNeeded } from "actions";
import { callApi } from "utils/request";

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
    callApi(`/api/v1/kana/${hiragana}`).then(data => {
      this.setState({
        kana: data
      });
    });
  }

  render() {
    const { kanaList } = this.props;
    const { kana } = this.state;
    const { hiragana, katakana, romaji, stats } = kana;

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
          {!isEmpty(stats) && <ProgressBar percent={stats.rating} />}
          <div className="tag-container">
            <Tag>Kana</Tag>
            {kana && kana.obsolete && <Tag>Obsolete</Tag>}
          </div>
        </div>
        <div>
          <div className="character-blocks">
            <CharacterBlock
              character={hiragana}
              rating={100}
              url={`/kana/${hiragana}`}
            />
            <CharacterBlock
              character={katakana}
              rating={100}
              url={`/kana/${hiragana}`}
            />
            <CharacterBlock
              character={romaji}
              rating={100}
              url={`/kana/${hiragana}`}
            />
          </div>
          <table className="kana-show-table">
            <tbody>
              {!isEmpty(stats) && (
                <React.Fragment>
                  <tr>
                    <td>streak</td>
                    <td>{stats.streak}</td>
                  </tr>
                  <tr>
                    <td>score</td>
                    <td>{stats.score}</td>
                  </tr>
                  <tr>
                    <td>correct</td>
                    <td>{stats.correct}</td>
                  </tr>
                  <tr>
                    <td>next review</td>
                    <td>
                      {Time.largestTimeIntervalString(
                        Date.parse(stats.time_of_next_review)
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
