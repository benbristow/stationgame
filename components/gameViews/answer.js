import { Fragment } from "react";

export default props => (
  <Fragment>
    {props.choice.crs === props.answer.crs ? (
      <h1 className="sg-game__outcome sg-game__outcome--correct">Correct</h1>
    ) : (
      <h1 className="sg-game__outcome sg-game__outcome--incorrect">
        Incorrect
      </h1>
    )}
    You chose {props.choice.name}. <br />
    The answer was {props.answer.name}
    <button
      className="btn btn-primary mt-3 btn-lg btn-block"
      onClick={props.onContinue}
      autoFocus
    >
      Next Station
    </button>
  </Fragment>
);
