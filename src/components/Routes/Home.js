import React from "react";

// Utilities
// import { makeStyles } from "@material-ui/core/styles";
import { Animated } from "react-animated-css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

// Material UI Components

// Custom Components
import Hero from "../Hero/Hero";
import Logos from "../Logos/Logos";
import Features from "../Features/Features";
import Addons from "../Addons/Addons";
import Resources from "../Resources/Resources";
import CTASignUp from "../CTA/CTASignUp";
import Footer from "../Footer/Footer";

// const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  const vhToggle = 100;
  //   const classes = useStyles();

  return (
    <React.Fragment>
      {/* HERO SECTION */}
      <Animated
        animationIn="fadeIn"
        animationInDelay={1000}
        animationInDuration={1000}
      >
        <Hero />
      </Animated>

      {/* CUSTOMER LOGOS SECTION */}
      <Animated
        animationIn="fadeInUp"
        animationInDuration={1000}
        animationInDelay={2000}
      >
        <Logos />
      </Animated>

      {/* FEATURES SECTION */}
      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <Features />
      </AnimatedOnScroll>

      {/* ADDONS SECTION */}
      <section id="add-on">
        <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
          <Addons />
        </AnimatedOnScroll>
      </section>

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
      {/* <section id="testimonials">
        <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
          <Testimonials />
        </AnimatedOnScroll>
      </section> */}

      {/* BENEFITS SECTION */}
      {/* <section id="benefits">
        <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
          <Benefits />
        </AnimatedOnScroll>
      </section> */}

      {/* COMMUNITY OUTREACH SECTION */}
      {/* <section id="community">
        <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
          <Community />
        </AnimatedOnScroll>
      </section> */}

      {/* CTA BOOKING SECTION */}
      {/* <section id="booking">
        <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
          <CTABooking />
        </AnimatedOnScroll>
      </section> */}

      {/* FOOTER SECTION */}
      <Animated
        animationIn="fadeIn"
        animationInDelay={1000}
        animationInDuration={1000}
      >
        <Footer />
      </Animated>
    </React.Fragment>
  );
}
