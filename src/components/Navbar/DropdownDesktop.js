import React from "react";
import Grid from "@material-ui/core/Grid";

export default function DropdownDesktop(props) {
  return (
    <React.Fragment>
      <div className="dropdown-content">
        <Grid container spacing={1}>
          <Grid item lg={3}>
            <Grid container className="column1" direction="column">
              <h3>Products 1</h3>
              <a href="https://www.google.com/">Link 1</a>
              <a href="https://www.google.com/">Link 2</a>
              <a href="https://www.google.com/">Link 3</a>
            </Grid>
          </Grid>

          <Grid item lg={3}>
            <Grid container className="column2" direction="column">
              <h3>Products 2</h3>
              <a href="https://www.google.com/">Link 1</a>
              <a href="https://www.google.com/">Link 2</a>
              <a href="https://www.google.com/">Link 3</a>
            </Grid>
          </Grid>

          <Grid item lg={3}>
            <Grid container className="column3" direction="column">
              <h3>Products 3</h3>
              <a href="https://www.google.com/">Link 1</a>
              <a href="https://www.google.com/">Link 2</a>
              <a href="https://www.google.com/">Link 3</a>
            </Grid>
          </Grid>

          <Grid item lg={3}>
            <Grid container className="column4" direction="column">
              <h3>Products 4</h3>
              <a href="https://www.google.com/">Link 1</a>
              <a href="https://www.google.com/">Link 2</a>
              <a href="https://www.google.com/">Link 3</a>
            </Grid>
          </Grid>
        </Grid>
      </div>
      {/* dropdown-content */}
    </React.Fragment>
  );
}
