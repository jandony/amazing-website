import React from "react";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Material UI Components

// Custom Components
import VerticalTabs from "../VerticalTabs/VerticalTabs";
import FeaturesCarousel from "../Carousel/FeaturesCarousel";

const useStyles = makeStyles((theme) => ({
  featuresTabs: {
    display: "inherit",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  featuresCarousel: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

export default function Features(props) {
  const classes = useStyles();

  return (
    <section id="features">
      <h2>
        Start with a strong foundation: Wodify Core
        <p className="subheading">
          Build community, increase retention, and grow your business.
        </p>
      </h2>
      <div className={classes.featuresTabs}>
        <VerticalTabs />
      </div>
      <div className={classes.featuresCarousel}>
        <FeaturesCarousel />
      </div>
    </section>
  );
}
