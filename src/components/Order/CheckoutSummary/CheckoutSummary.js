import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = (props) => (
  <div className={classes.CheckoutSummary}>
    <h1>We hope it tastes well!</h1>
    <div style={{ width: "100%", margin: "auto" }}>
      <Burger ingredients={props.ingredients} />
    </div>
    <Button clicked btnType="Danger">
      Cancel
    </Button>
    <Button clicked btnType="Success">
      Continue
    </Button>
  </div>
);

export default CheckoutSummary;
