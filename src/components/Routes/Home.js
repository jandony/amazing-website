import React from "react";

// Local Project Imports
import bgVideo from "../../media/FastTypingVideo.mp4";

// Utilities
import { makeStyles } from "@material-ui/core/styles";
import { Animated } from "react-animated-css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

// Material UI Components
import Button from "@material-ui/core/Button";

// Custom Components
import LogosCarousel from "../Carousel/LogosCarousel";
import VerticalTabs from "../VerticalTabs/VerticalTabs";
import FeaturesCarousel from "../Carousel/FeaturesCarousel";

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
  logoBanner: {
    backgroundColor: "#f5f5f5",
  },
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

export default function Home() {
  const vhToggle = 100;
  const classes = useStyles();
  const screen = window.innerWidth;

  const totalLogos = 5;

  return (
    <React.Fragment>
      {/* HERO SECTION */}
      <Animated
        animationIn="fadeIn"
        animationInDelay={1000}
        animationInDuration={1000}
      >
        <section className={`hero ${classes.heroSection}`}>
          <video loop autoPlay width="100%" className={classes.heroVideo}>
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="hero-content">
            <h1>
              The premier gym <br />
              management platform
            <h3>To build the fitness business of your dreams.</h3>
            </h1>
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
          <h2>
            5,000+ of the world's top gyms trust Wodify to run their business
          </h2>
          <div className={classes.logoBanner}>
            <LogosCarousel totalLogos={screen < 600 ? 3 : totalLogos} />
          </div>
        </section>
      </Animated>

      {/* FEATURES SECTION */}
      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section id="features">
          <h2>Start with a strong foundation: Wodify Core
          <p className="subheading">Build community, increase retention, and grow your business.</p>
          </h2>
          <div className={classes.featuresTabs}>
            <VerticalTabs />
          </div>
          <div className={classes.featuresCarousel}>
            <FeaturesCarousel />
          </div>
        </section>
      </AnimatedOnScroll>

      {/* ADDONS SECTION */}
      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section>
          <h2>Add-Ons</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised
            in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.</p>
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