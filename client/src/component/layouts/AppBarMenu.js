import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { logout } from "../../actions/auth";
import { CardMedia } from "@material-ui/core";

import log1 from "../../img/log1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  logo: {
    maxWidth: 60,
    marginRight: "10px",
  },
  media: {
    height: "5px",

    maxWidth: 345,
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src={log1} alt="Kitty Katty!" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            <NavLink variant="inherit" to="/">
              KOMPAR
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
