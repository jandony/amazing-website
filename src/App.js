import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Cards from "./components/Cards/Cards";

import { Animated } from "react-animated-css";

function App() {
  const [visibleState, setVisibleState] = useState({
    hero: true,
    section2: true,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
    section7: false,
    section8: false,
  });

  const testArray = () => {
    console.table(visibleState);
  };

  testArray();

  useEffect(() => {
    // selects all section html tags
    const mySections = document.querySelectorAll("section");
    // midpoint of the viewport height. Also triggers at 50% of viewport height
    const options = {
      threshold: 0,
      rootMargin: "-50%",
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // if the entry is at the midpoint, then...
        if (entry.isIntersecting) {
          const objRef = visibleState[entry.target.id];
          console.log(entry.target.id + ": " + objRef);
          setVisibleState({ ...visibleState, [objRef]: true });
          // else, do nothing
        } else {
          return;
        }
      });
    }, options);
    // our "listener" for each section
    mySections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="App">
      <Animated
        animationIn="bounceInLeft"
        animationInDuration={1000}
        isVisible={visibleState.section1}
      >
        <section id="hero">
          <div className="overlay" />
        </section>
      </Animated>

      <Animated
        animationIn="bounceInLeft"
        animationInDuration={1000}
        animationInDelay={1000}
        isVisible={visibleState.section2}
      >
        <section id="section2">
          <Grid container alignItems="center">
            {/* one */}
            <Grid item xs={12} sm={6} lg={3}>
              <Animated
                animationIn="fadeInUp"
                animationInDuration={1000}
                animationInDelay={2000}
                isVisible={true}
              >
                <Cards />
              </Animated>
            </Grid>

            {/* two */}
            <Grid item xs={12} sm={6} lg={3}>
              <Animated
                animationIn="fadeInUp"
                animationInDuration={1000}
                animationInDelay={2000}
                isVisible={true}
              >
                <Cards />
              </Animated>
            </Grid>

            {/* three */}
            <Grid item xs={12} sm={6} lg={3}>
              <Animated
                animationIn="fadeInUp"
                animationInDuration={1000}
                animationInDelay={2000}
                isVisible={true}
              >
                <Cards />
              </Animated>
            </Grid>

            {/* four */}
            <Grid item xs={12} sm={6} lg={3}>
              <Animated
                animationIn="fadeInUp"
                animationInDuration={1000}
                animationInDelay={2000}
                isVisible={true}
              >
                <Cards />
              </Animated>
            </Grid>
          </Grid>
        </section>
      </Animated>

      <Animated
        className="section3Animated"
        animationIn="bounceInLeft"
        animationInDuration={1000}
        animationInDelay={0}
        isVisible={visibleState.section3}
      >
        <section id="section3">Section 3</section>
      </Animated>

      <Animated
        animationIn="bounceInLeft"
        animationInDuration={1000}
        animationInDelay={0}
        isVisible={visibleState.section4}
      >
        <section id="section4">Section 4</section>
      </Animated>

      <Animated
        animationIn="bounceInLeft"
        animationInDuration={1000}
        animationInDelay={0}
        isVisible={visibleState.section5}
      >
        <section id="section5">Section 5</section>
      </Animated>

      <Animated
        animationIn="bounceInLeft"
        animationInDuration={1000}
        animationInDelay={0}
        isVisible={visibleState.section6}
      >
        <section id="section6">Section 6</section>
      </Animated>

      <Animated
        animationIn="bounceInLeft"
        animationInDuration={1000}
        animationInDelay={0}
        isVisible={visibleState.section7}
      >
        <section id="section7">Section 7</section>
      </Animated>

      <Animated
        animationIn="bounceInLeft"
        animationInDuration={1000}
        animationInDelay={0}
        isVisible={visibleState.section8}
      >
        <section id="section8">Section 8</section>
      </Animated>

      <Animated
        animationIn="bounceInLeft"
        animationInDuration={1000}
        animationInDelay={0}
        isVisible={true}
      >
        <section></section>
      </Animated>
    </div>
  );
}

export default App;
