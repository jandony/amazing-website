import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  scrollBtn: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1000,
  },
  logoButton: {
    right: 0,
  },

  loginButton: {
    color: "grey",
  },
  navbar: {
    display: "flex",
    left: 0,
    right: 0,
    margin: "0 auto",
    maxWidth: "1440px",
    backgroundColor: "white",
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileToolbar: {
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navItem: {
    color: "black",
    minHeight: "70px",
    borderRadius: 0,
    borderBottom: "2px solid transparent",
    fontFamily: "Roboto",
    fontSize: "1rem",
    textTransform: "capitalize",
    opacity: 0.5,
    "&:hover": {
      borderBottom: "2px solid red",
      backgroundColor: "white",
      opacity: 1,
    },
  },
  link: {
    textDecoration: "none",
    borderRadius: 0,
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

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

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.navbar} elevation={0}>
        {/* Mobile Navbar */}
        <Toolbar variant="dense" className={classes.mobileToolbar}>
          <Link to="/" className={classes.link}>
            <Button>
              <img
                src="https://cdn.pixabay.com/photo/2015/05/03/17/49/design-751452_1280.png"
                alt="temp logo"
                height="50"
              />
            </Button>
          </Link>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* Tablet & Desktop Navbar */}
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.link}>
            <Button>
              <img
                src="https://cdn.pixabay.com/photo/2015/05/03/17/49/design-751452_1280.png"
                alt="temp logo"
                height="50"
              />
            </Button>
          </Link>
          <div id="nav-items">
            <div class="dropdown">
              <Button
                className={`${classes.navItem} dropbtn`}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Products
              </Button>

              <div class="dropdown-content">
                <Grid container spacing={1}>
                  <Grid item lg={3}>
                    <Grid container className="column1" direction="column">
                      <h3>Products 1</h3>
                      <a href="https://www.google.com/">Link 1</a>
                      <a href="https://www.google.com/">Link 2</a>
                      <a href="https://www.google.com/">Link 3</a>
                    </Grid>
                  </Grid>

                  <Grid item lg={3}>
                    <Grid container className="column2" direction="column">
                      <h3>Products 2</h3>
                      <a href="https://www.google.com/">Link 1</a>
                      <a href="https://www.google.com/">Link 2</a>
                      <a href="https://www.google.com/">Link 3</a>
                    </Grid>
                  </Grid>

                  <Grid item lg={3}>
                    <Grid container className="column3" direction="column">
                      <h3>Products 3</h3>
                      <a href="https://www.google.com/">Link 1</a>
                      <a href="https://www.google.com/">Link 2</a>
                      <a href="https://www.google.com/">Link 3</a>
                    </Grid>
                  </Grid>

                  <Grid item lg={3}>
                    <Grid container className="column4" direction="column">
                      <h3>Products 4</h3>
                      <a href="https://www.google.com/">Link 1</a>
                      <a href="https://www.google.com/">Link 2</a>
                      <a href="https://www.google.com/">Link 3</a>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              {/* dropdown-content */}
            </div>
            {/* dropdown */}

            <div class="dropdown">
              <Button
                className={`${classes.navItem} dropbtn`}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Resources
              </Button>
              <div class="dropdown-content">
                <Grid container spacing={1}>
                  <Grid item lg={3}>
                    <Grid container className="column1" direction="column">
                      <h3>Resources 1</h3>
                      <a href="https://www.google.com/">Link 1</a>
                      <a href="https://www.google.com/">Link 2</a>
                      <a href="https://www.google.com/">Link 3</a>
                    </Grid>
                  </Grid>

                  <Grid item lg={3}>
                    <Grid container className="column2" direction="column">
                      <h3>Resources 2</h3>
                      <a href="https://www.google.com/">Link 1</a>
                      <a href="https://www.google.com/">Link 2</a>
                      <a href="https://www.google.com/">Link 3</a>
                    </Grid>
                  </Grid>

                  <Grid item lg={3}>
                    <Grid container className="column3" direction="column">
                      <h3>Resources 3</h3>
                      <a href="https://www.google.com/">Link 1</a>
                      <a href="https://www.google.com/">Link 2</a>
                      <a href="https://www.google.com/">Link 3</a>
                    </Grid>
                  </Grid>

                  <Grid item lg={3}>
                    <Grid container className="column4" direction="column">
                      <h3>Resources 4</h3>
                      <a href="https://www.google.com/">Link 1</a>
                      <a href="https://www.google.com/">Link 2</a>
                      <a href="https://www.google.com/">Link 3</a>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>

            <Link to="/pricing" className={classes.link}>
              <Button className={classes.navItem}>Pricing</Button>
            </Link>
            <Link to="/support" className={classes.link}>
              <Button className={classes.navItem}>Support</Button>
            </Link>
          </div>
          <div id="CTABtns">
            <Button className={classes.loginButton}>WODIFY LOGIN</Button>
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
