import React from "react";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Material UI Components
import Button from "@material-ui/core/Button";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// Custom Components
import LogosCarousel from "../Carousel/LogosCarousel";

const useStyles = makeStyles((theme) => ({
  logoBanner: {
    backgroundColor: "#f5f5f5",
  },
}));

export default function Logos(props) {
  const classes = useStyles();
  const screen = window.innerWidth;
  const totalLogos = 5;

  return (
    <section id="companyLogos">
      <h2>
        <p className="subheading">
          5,000+ of the world's top gyms trust Wodify to run their business
        </p>
      </h2>
      <div className={classes.logoBanner}>
        <LogosCarousel totalLogos={screen < 600 ? 3 : totalLogos} />
      </div>
      <Button
        href="https://www.google.com"
        className="primary-btn"
        endIcon={<ChevronRightIcon />}
      >
        See More Customer Love
      </Button>{" "}
    </section>
  );
}
