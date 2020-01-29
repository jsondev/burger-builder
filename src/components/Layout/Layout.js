import React from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar";

const Layout = props => (
  <Aux>
    <div>
      <Toolbar />
      Sidedrawer, Backdroup</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
