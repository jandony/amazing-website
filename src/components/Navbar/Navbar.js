import React, { useState, useEffect } from "react";

// Utilities
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// Material UI Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// Custom Components
import DropdownDesktop from "./DropdownDesktop";
import DropdownMobile from "./DropdownMobile";

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
    backgroundColor: "white",
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
  // Variables
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Mobile dropdown drawer
  const openDrawer = () => {
    if (!drawerState) {
      setDrawerState(true);
      document.getElementById("dropdown-mobile").style.marginTop = "0px";
    } else {
      setDrawerState(false);
      document.getElementById("dropdown-mobile").style.marginTop = "-500px";
    }
  };

  // WP REST API Variables
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState([]);
  const [menu, setMenu] = useState([]);

  // Get WP Posts
  const getPosts = () => {
    fetch(`http://www.jeffandony.com/wp-json/wp/v2/posts?_embed`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setPosts(responseJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get WP Pages
  const getPages = () => {
    fetch(`http://www.jeffandony.com/wp-json/wp/v2/pages?_embed`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setPages(responseJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get WP Menu
  const getMenu = () => {
    fetch(`http://www.jeffandony.com/wp-json/wp-api-menus/v2/menus/16`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setMenu(responseJSON);
        console.log(responseJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      getPosts();
      getPages();
      getMenu();
      console.log(menu);
    }
  }, [loaded]);

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
            onClick={() => openDrawer()}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <DropdownMobile
          drawerState={drawerState}
          setDrawerState={setDrawerState}
        />

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
            <div className="dropdown">
              <Button
                className={`${classes.navItem} dropbtn`}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Products
              </Button>
              <DropdownDesktop />
            </div>

            <div className="dropdown">
              <Button
                className={`${classes.navItem} dropbtn`}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Resources
              </Button>
              <div className="dropdown-content">
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
      {/* <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}

      {/* {menu.items.map((post, index) => {
        return <p key={index}>{post.title}</p>;
      })} */}
    </React.Fragment>
  );
}
