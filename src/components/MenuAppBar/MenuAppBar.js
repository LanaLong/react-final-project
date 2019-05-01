import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import { NavLink } from "react-router-dom";

const styles = theme => ({
  root: {
    zIndex: 100
  },
  grow: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  }
});

class MenuAppBar extends PureComponent {
  handleClick = () => {};

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Loft Taxi
          </Typography>
          <NavLink exact to="/map">
            <Button className={classes.button}>Карта</Button>
          </NavLink>
          <NavLink exact to={"/profile"}>
            <Button className={classes.button}>Профиль</Button>
          </NavLink>
          <NavLink exact to="/login">
            <Button className={classes.button}>Войти</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(MenuAppBar);
