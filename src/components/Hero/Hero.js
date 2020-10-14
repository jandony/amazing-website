import React from "react";

// Local Project Imports
import bgVideo from "../../media/FastTypingVideo.mp4";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Material UI Components
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  heroSection: {
    [theme.breakpoints.down("sm")]: {
      height: "85vh",
    },
  },
  heroVideo: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Hero(props) {
  const classes = useStyles();

  return (
    <section className={`hero ${classes.heroSection}`}>
      <video loop autoPlay width="100%" className={classes.heroVideo}>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>
          The premier gym <br />
          management platform
          <p>To build the fitness business of your dreams.</p>
        </h1>
        <Button variant="contained" color="secondary">
          BOOK A DEMO
        </Button>
      </div>

      <div className="overlay" />
    </section>
  );
}
