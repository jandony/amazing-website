import React from 'react';
import Grid from '@material-ui/core/Grid';
import Cards from "./components/Cards/Cards";

import { Animated } from "react-animated-css";

function App() {

  return (
    <div className="App">

      <Animated animationIn="bounceInLeft" animationInDuration={1000} isVisible={true}>
        <section id="hero">
          <div className="overlay" />
        </section>
      </Animated>

      <Animated animationIn="bounceInLeft" animationInDuration={1000} animationInDelay={1000} isVisible={true}>
        <section id="boxes">
          <Grid container alignItems="center">
            {/* one */}
            <Grid item xs={12} md={6} lg={3}>
              <Animated animationIn="fadeInUp" animationInDuration={1000} animationInDelay={3000} isVisible={true}>
                <Cards />
              </Animated>
            </Grid>

            {/* two */}
            <Grid item xs={12} md={6} lg={3}>
              <Animated animationIn="fadeInUp" animationInDuration={1000} animationInDelay={3500} isVisible={true}>
                <Cards />
              </Animated>
            </Grid>

            {/* three */}
            <Grid item xs={12} md={6} lg={3}>
              <Animated animationIn="fadeInUp" animationInDuration={1000} animationInDelay={4000} isVisible={true}>
                <Cards />
              </Animated>
            </Grid>

            {/* four */}
            <Grid item xs={12} md={6} lg={3}>
              <Animated animationIn="fadeInUp" animationInDuration={1000} animationInDelay={4500} isVisible={true}>
                <Cards />
              </Animated>
            </Grid>
          </Grid>
        </section>
      </Animated>

      <Animated animationIn="bounceInLeft" animationInDuration={1000} animationInDelay={2000} isVisible={true}>
        <section id="about">
          Section 3
      </section>
      </Animated>
    </div >
  );
}

export default App;
