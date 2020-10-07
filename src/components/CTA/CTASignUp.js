import React from "react";

// Utilities

// Material UI Components
import Grid from '@material-ui/core/Grid';

export default function CTASignUp(props) {

    return (
        <Grid container spacing={3} direction="row">
            <Grid item sm={12} md={6} style={{ backgroundColor: "red" }}>
                <h2>Reclaim your time</h2>
                <p>Get a FREE list of the ‘Top 10 tips to reduce stress as a gym owner’ by Jason Khalipa.</p>
            </Grid>
            <Grid item sm={12} md={6}>
                <Grid container direction="column" justify="center">
                    Photo
                </Grid>
            </Grid>
        </Grid>
    );
}
