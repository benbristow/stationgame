import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { sampleSize } from "lodash";
import Stations from "../data/stations.json";

import GameViewChoose from "./gameViews/choose";
import GameViewAnswer from "./gameViews/answer";
import GameViewEnd from "./gameViews/end";

class Game extends Component {
  componentWillMount() {
    this.setState(this.freshState());
  }

  freshState = () => {
    return {
      deck: sampleSize(Stations, this.props.gameLength),
      view: "choose",
      currentIndex: 0,
      score: 0,
      choice: {}
    };
  };

  selectAnswer = option => {
    const { currentIndex, deck, score } = this.state;
    const choiceStation = Stations[option.value];
    const answerStation = deck[currentIndex];

    this.setState({
      view: "answer",
      choice: option,
      score: choiceStation.crs === answerStation.crs ? score + 1 : score
    });
  };

  nextStation = () => {
    const { gameLength } = this.props;
    const { currentIndex } = this.state;

    if (currentIndex + 1 < gameLength) {
      this.setState({
        view: "choose",
        currentIndex: currentIndex + 1,
        choice: {}
      });
    } else {
      this.setState({
        view: "end"
      });
    }
  };

  render() {
    const { gameLength } = this.props;
    const { view, currentIndex, deck, choice, score } = this.state;

    return (
      <div className="sg-game">
        {view === "choose" && (
          <GameViewChoose
            onChangeSelected={this.selectAnswer}
            currentIndex={currentIndex}
            selected={choice}
            answer={deck[currentIndex]}
            gameLength={gameLength}
            stations={Stations}
          />
        )}
        {view === "answer" && (
          <GameViewAnswer
            onContinue={this.nextStation}
            answer={deck[currentIndex]}
            choice={Stations[choice.value]}
          />
        )}
        {view === "end" && (
          <GameViewEnd
            score={score}
            total={gameLength}
            onPlayAgain={() => this.setState(this.freshState())}
          />
        )}
      </div>
    );
  }
}

Game.propTypes = {
  gameLength: PropTypes.number
};

export default Game;
