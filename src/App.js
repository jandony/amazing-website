import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

// import { Animated } from "react-animated-css";
// import { AnimatedOnScroll } from "react-animated-css-onscroll";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Routes/Home";
import Pricing from "./components/Routes/Pricing";
import Support from "./components/Routes/Support";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/support" component={Support} />
        </AnimatedSwitch>
      </Router>
    </div> // App (div)
  );
}

export default App;
