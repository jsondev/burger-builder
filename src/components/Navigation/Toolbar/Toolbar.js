import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import MenuToggle from "../SideDrawer/MenuToggle/MenuToggle";

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <MenuToggle clicked={props.open} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
