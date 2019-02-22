import { Fragment } from "react";

export default props => (
  <Fragment>
    <h1>Game over!</h1>
    <p>
      You scored {props.score} out of {props.total}
    </p>
    <button
      className="btn btn-primary mt-3 btn-lg btn-block"
      onClick={props.onPlayAgain}
      autoFocus
    >
      Play Again
    </button>
  </Fragment>
);
