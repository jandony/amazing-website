import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  scrollBtn: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1000,
  },
  menuButton: {
    right: 0,
  },
  navbar: {
    paddingBottom: 0,
    display: "flex",
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  navItem: {
    color: "white",
    minHeight: "64px",
    borderRadius: 0,
    borderBottom: "2px solid transparent",
    "&:hover": {
      borderBottom: "2px solid red",
    },
  },
  link: {
    textDecoration: "none",
  },
  title: {
    color: "white",
    minHeight: "50px",
    paddingTop: "0.5rem",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.scrollBtn}
      >
        {children}
      </div>
    </Zoom>
  );
}

export default function Navbar(props) {
  const classes = useStyles();

  const onBtnHover = () => {
    // get icon
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.navbar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.link}>
            <Button>
              <Typography variant="h6" className={classes.title}>
                Logo
              </Typography>
            </Button>
          </Link>
          <div id="nav-items">
            <Button
              className={classes.navItem}
              endIcon={<KeyboardArrowDownIcon />}
              onMouseEnter={onBtnHover}
            >
              Products
            </Button>
            <Button
              className={classes.navItem}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Resources
            </Button>
            <Link to="/pricing" className={classes.link}>
              <Button className={classes.navItem}>Pricing</Button>
            </Link>
            <Link to="/support" className={classes.link}>
              <Button className={classes.navItem}>Support</Button>
            </Link>
          </div>
          <div id="CTABtns">
            <Button color="inherit" className={classes.menuButton}>
              WODIFY LOGIN
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.menuButton}
            >
              BOOK A DEMO
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
