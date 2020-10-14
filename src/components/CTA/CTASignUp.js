import React from "react";

// Utilities

// Material UI Components
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function CTASignUp(props) {
  return (
    <Grid container spacing={3} direction="row" id="signUpGrid">
      <Grid item sm={12} md={6} id="signUpColumn1" className="signUpColumn">
        <h2>Reclaim your time</h2>
        <p>
          Get a FREE list of the ‘Top 10 tips to reduce stress as a gym owner’
          by Jason Khalipa.
        </p>
        <form id="email-form" noValidate autoComplete="off">
          <TextField id="email-input" label="Your email" variant="filled" />
          <Button className="primary-btn-filled" variant="contained">
            BOOK A DEMO
          </Button>
        </form>
      </Grid>
      <Grid item sm={12} md={6} id="signUpColumn2" className="signUpColumn">
        <Grid container direction="column" justify="center" id="signUpPhoto">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            width="100%"
            alt="community"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
