import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>
            <Typography variant="h6" color="inherit">
              City-weather
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
