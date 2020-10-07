import React from "react";

// Local Project Imports
import bgVideo from "../../media/FastTypingVideo.mp4";

// Utilities
import { makeStyles } from "@material-ui/core/styles";
import { Animated } from "react-animated-css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

// Material UI Components
import Button from "@material-ui/core/Button";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// Custom Components
import LogosCarousel from "../Carousel/LogosCarousel";
import VerticalTabs from "../VerticalTabs/VerticalTabs";
import FeaturesCarousel from "../Carousel/FeaturesCarousel";
import Resources from "../Resources/Resources";
import CTASignUp from "../CTA/CTASignUp";

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
      </Animated>

      {/* FEATURES SECTION */}
      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
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
      </AnimatedOnScroll>

      {/* ADDONS SECTION */}
      <section id="add-on">
        <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
          <h2>
            More than just another gym management software
            <p className="subheading">
              Tools to help you stand out from the competition and save you
              time, so you can focus on growing your business.
            </p>
          </h2>
          <p>Sticky Section with Tabs?</p>
        </AnimatedOnScroll>
      </section>

      {/* RESOURCES SECTION */}
      <section id="resources">
        <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
          <Resources />
        </AnimatedOnScroll>
      </section>

      {/* CTA SIGNUP SECTION */}
      <section id="signup">
        <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
          <CTASignUp />
        </AnimatedOnScroll>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials">
        <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
          <h2>Testimonials</h2>
        </AnimatedOnScroll>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits">
        <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
          <h2>Benefits</h2>
        </AnimatedOnScroll>
      </section>

      {/* COMMUNITY OUTREACH SECTION */}
      <section id="community">
        <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
          <h2>Outreach</h2>
        </AnimatedOnScroll>
      </section>

      {/* CTA BOOKING SECTION */}
      <section id="booking">
        <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
          <h2>CTA Book Now</h2>
        </AnimatedOnScroll>
      </section>
    </React.Fragment>
  );
}
