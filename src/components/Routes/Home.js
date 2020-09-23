import React from "react";

import { Animated } from "react-animated-css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Grid from "@material-ui/core/Grid";
import Cards from "../Cards/Cards";

export default function Home() {
  const vhToggle = "100";

  return (
    <React.Fragment>
      <Animated
        animationIn="bounceInLeft"
        animationInDelay={1000}
        animationInDuration={1000}
      >
        <section id="hero">
          <div className="overlay" />
        </section>
      </Animated>

      <Animated
        animationIn="bounceInLeft"
        animationInDuration={1000}
        animationInDelay={2000}
      >
        <section id="section2">
          <Grid container alignItems="center">
            {/* one */}
            <Grid item xs={12} sm={6} lg={3}>
              <Animated
                animationIn="fadeInUp"
                animationInDuration={1000}
                animationInDelay={3000}
              >
                <Cards />
              </Animated>
            </Grid>

            {/* two */}
            <Grid item xs={12} sm={6} lg={3}>
              <Animated
                animationIn="fadeInUp"
                animationInDuration={1000}
                animationInDelay={3000}
              >
                <Cards />
              </Animated>
            </Grid>

            {/* three */}
            <Grid item xs={12} sm={6} lg={3}>
              <Animated
                animationIn="fadeInUp"
                animationInDuration={1000}
                animationInDelay={3000}
              >
                <Cards />
              </Animated>
            </Grid>

            {/* four */}
            <Grid item xs={12} sm={6} lg={3}>
              <Animated
                animationIn="fadeInUp"
                animationInDuration={1000}
                animationInDelay={3000}
              >
                <Cards />
              </Animated>
            </Grid>
          </Grid>
        </section>
      </Animated>

      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section id="section3">Section 3</section>
      </AnimatedOnScroll>

      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section id="section4">Section 4</section>
      </AnimatedOnScroll>

      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section id="section5">Section 5</section>
      </AnimatedOnScroll>

      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section id="section6">Section 6</section>
      </AnimatedOnScroll>

      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section id="section7">Section 7</section>
      </AnimatedOnScroll>

      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section id="section8">Section 8</section>
      </AnimatedOnScroll>

      <AnimatedOnScroll animationIn="fadeInUp" screenOffset={vhToggle}>
        <section></section>
      </AnimatedOnScroll>
    </React.Fragment>
  );
}
