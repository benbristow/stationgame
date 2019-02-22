import { Fragment } from "react";

export default props => (
  <Fragment>
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
