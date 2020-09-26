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
    minWidth: "85%",
    maxWidth: "768px",
    backgroundColor: "white",
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  mobileToolbar: {
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  navItem: {
    color: "black",
    minHeight: "70px",
    borderRadius: 0,
    borderBottom: "2px solid transparent",
    "&:hover": {
      borderBottom: "2px solid red",
    },
    textTransform: "capitalize",
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

  const onBtnHover = () => {
    // get icon
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.navbar}>
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
            color="black"
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
