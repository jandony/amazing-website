import React from "react";
import { Animated } from "react-animated-css";

export default function Pricing() {
  return (
    <React.Fragment>
      <Animated
        animationIn="bounceInLeft"
        animationInDelay={1000}
        animationInDuration={1000}
      >
        <h1>Pricing Page</h1>
      </Animated>
    </React.Fragment>
  );
}
