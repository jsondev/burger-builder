import React from "react";
import classes from "./BuildControl.module.css";
import PropTypes from 'prop-types';

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button onClick={props.removed} className={classes.Less} disabled={props.disabled}>Less</button>
    <button onClick={props.added} className={classes.More}>More</button>
  </div>
);

BuildControl.propTypes = {
  label: PropTypes.string,
  removed: PropTypes.func,
  added: PropTypes.func,
  disabled: PropTypes.bool
};

export default BuildControl;
