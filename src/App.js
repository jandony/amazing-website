import React from "react";

// Utilities
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

// Main Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Routes/Home";
import Pricing from "./components/Routes/Pricing";
import Support from "./components/Routes/Support";
import Copyright from "./components/Copyright/Copyright";

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
        <Copyright />
      </Router>
    </div> // App (div)
  );
}

export default App;
