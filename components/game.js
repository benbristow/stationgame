import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { sampleSize } from "lodash";
import Stations from "../data/stations.json";

import GameViewChoose from "./gameViews/choose";
import GameViewAnswer from "./gameViews/answer";
import GameViewEnd from "./gameViews/end";

class Game extends Component {
  defaultState = {
    deck: [],
    filteredStations: [],
    view: "choose",
    currentIndex: 0,
    score: 0,
    choice: {}
  };

  constructor(props) {
    super(props);
    this.state = this.getFreshState();
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  getFreshState = () => {
    const { gameLength } = this.props;

    const deck = sampleSize(Stations, gameLength);
    return {
      ...this.defaultState,
      deck: deck,
      filteredStations: Stations.filter(
        station => station.name[0] === deck[0].name[0]
      )
    };
  };

  selectAnswer = option => {
    const { currentIndex, filteredStations, deck, score } = this.state;
    const choiceStation = filteredStations[option.value];
    const answerStation = deck[currentIndex];

    this.setState({
      view: "answer",
      choice: option,
      score: choiceStation.crs === answerStation.crs ? score + 1 : score
    });
  };

  nextStation = () => {
    const { gameLength } = this.props;
    const { currentIndex, deck } = this.state;

    if (currentIndex + 1 < gameLength) {
      const nextStation = deck[currentIndex + 1];

      this.setState({
        view: "choose",
        currentIndex: currentIndex + 1,
        choice: {},
        filteredStations: Stations.filter(
          station => station.name[0] === nextStation.name[0]
        )
      });
    } else {
      this.setState({
        view: "end"
      });
    }
  };

  render() {
    const { gameLength } = this.props;
    const {
      view,
      currentIndex,
      filteredStations,
      deck,
      choice,
      score
    } = this.state;

    return (
      <Fragment>
        {deck.length && (
          <div className="sg-game">
            {view === "choose" && (
              <GameViewChoose
                onChangeSelected={this.selectAnswer}
                currentIndex={currentIndex}
                selected={choice}
                answer={deck[currentIndex]}
                gameLength={gameLength}
                stations={filteredStations}
              />
            )}
            {view === "answer" && (
              <GameViewAnswer
                onContinue={this.nextStation}
                answer={deck[currentIndex]}
                choice={filteredStations[choice.value]}
              />
            )}
            {view === "end" && (
              <GameViewEnd
                score={score}
                total={gameLength}
                onPlayAgain={() => this.setState(this.getFreshState())}
              />
            )}
          </div>
        )}
      </Fragment>
    );
  }
}

Game.propTypes = {
  gameLength: PropTypes.number
};

export default Game;
