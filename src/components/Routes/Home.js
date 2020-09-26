import React from "react";

// Local Project Imports
import bgVideo from "../../media/FastTypingVideo.mp4";

// Utilities
import { makeStyles } from "@material-ui/core/styles";
import { Animated } from "react-animated-css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

// Material UI Components
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// Custom Components
import VerticalTabs from "../VerticalTabs/VerticalTabs";

const useStyles = makeStyles((theme) => ({
  heroVideo: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Home() {
  const vhToggle = "100";
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* HERO SECTION */}
      <Animated
        animationIn="fadeIn"
        animationInDelay={1000}
        animationInDuration={1000}
      >
        <section className="hero">
          <video loop autoPlay width="100%" className={classes.heroVideo}>
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="hero-content">
            <h1>
              The premier gym <br />
              management platform
            </h1>
            <h3>To build the fitness business of your dreams.</h3>
            <Button variant="contained" color="secondary">
              BOOK A DEMO
            </Button>
          </div>

          <div className="overlay" />
        </section>
      </Animated>

      {/* CUSTOMER LOGOS SECTION */}
      <Animated
        animationIn="fadeInUp"
        animationInDuration={1000}
        animationInDelay={2000}
      >
        <section id="companyLogos">
          <h2>5,000+ of the world's top gyms trust Wodify to run their business</h2>
          <Grid container alignItems="center" spacing={1}>

            {/* one */}
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <div className="placeholder">Logo</div>
            </Grid>

            {/* two */}
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <div className="placeholder">Logo</div>
            </Grid>

            {/* three */}
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <div className="placeholder">Logo</div>
            </Grid>

            {/* four */}
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <div className="placeholder">Logo</div>
            </Grid>

            {/* five */}
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <div className="placeholder">Logo</div>
            </Grid>

            {/* six */}
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <div className="placeholder">Logo</div>
            </Grid>
          </Grid>
        </section>
      </Animated>

      {/* FEATURES SECTION */}
      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section id="features">
          <h2>Start with a strong foundation: Wodify Core</h2>
          <p>Build community, increase retention, and grow your business.</p>
          <VerticalTabs />
        </section>
      </AnimatedOnScroll>

      {/* ADDONS SECTION */}
      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section>
          <h2>Add-Ons</h2>
        </section>
      </AnimatedOnScroll>

      {/* RESOURCES SECTION */}
      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section>
          <h2>Resources</h2>
        </section>
      </AnimatedOnScroll>

      {/* CTA SIGNUP SECTION */}
      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section>
          <h2>CTA Sign Up</h2>
        </section>
      </AnimatedOnScroll>

      {/* TESTIMONIALS SECTION */}
      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section>
          <h2>Testimonials</h2>
        </section>
      </AnimatedOnScroll>

      {/* BENEFITS SECTION */}
      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section>
          <h2>Benefits</h2>
        </section>
      </AnimatedOnScroll>

      {/* COMMUNITY OUTREACH SECTION */}
      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section>
          <h2>Outreach</h2>
        </section>
      </AnimatedOnScroll>

      {/* CTA BOOKING SECTION */}
      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section>
          <h2>CTA Book Now</h2>
        </section>
      </AnimatedOnScroll>
    </React.Fragment>
  );
}
