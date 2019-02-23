import { Fragment } from "react";
import Select from "react-select";

const selectStyles = {
  valueContainer: provided => ({
    ...provided,
    display: "flex",
    justifyContent: "center"
  })
};

export default props => (
  <Fragment>
    <div className="sg-game__state">
      Station {props.currentIndex + 1}/{props.gameLength}
    </div>
    <div className="sg-game__crs">{props.answer.crs}</div>
    <Select
      required
      onChange={props.onChangeSelected}
      autoFocus
      menuPlacement="top"
      placeholder="Search for a station"
      styles={selectStyles}
      options={props.stations.map((station, index) => {
        return { value: index, label: station.name };
      })}
    />
  </Fragment>
);
