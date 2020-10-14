import React from "react";

// Utilities
// import { makeStyles } from "@material-ui/core/styles";

// Material UI Components

// Custom Components

// const useStyles = makeStyles((theme) => ({}));

export default function Copyright(props) {
  //   const classes = useStyles();

  return (
    <div id="copyright">
      <p id="copyrightMobile">
        © 2020 Jeff Andony Web Development. <br />
        All rights reserved.
      </p>
      <p id="copyrightDesktop">
        © 2020 Jeff Andony Web Development. All rights reserved.
      </p>
    </div>
  );
}
