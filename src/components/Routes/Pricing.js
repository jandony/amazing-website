import React from "react";
import { Animated } from "react-animated-css";

export default function Pricing() {
  return (
    <React.Fragment>
      <Animated
        animationIn="fadeIn"
        animationInDelay={1000}
        animationInDuration={1000}
      >
        <section>
          <h1>Pricing Page</h1>
        </section>
      </Animated>
    </React.Fragment>
  );
}
