import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    {/* Loop through the controls */}
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={()=> props.ingredientAdded(ctrl.type)}
      />
    ))}
  </div>
);

export default BuildControls;
