import React from "react";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Material UI Components
import Grid from '@material-ui/core/Grid';
import ForumIcon from '@material-ui/icons/Forum';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import DevicesIcon from '@material-ui/icons/Devices';
import PostAddIcon from '@material-ui/icons/PostAdd';

// Custom Components
import ResourceCard from "../ResourceCard/ResourceCard";

const useStyles = makeStyles({
    resourceContainer: {
        textAlign: "center",
    },
});

export default function Resources(props) {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.resourceContainer}>
            <Grid item md={6} lg={4}>
                <ResourceCard
                    icon={<ForumIcon className="cardIcon" />}
                    title="Dedicated Support"
                    description="Connect to a Customer Success Agent via phone or email and resolve your issues quickly and effectively."
                    resourceURL="https://www.google.com"
                />
            </Grid>
            <Grid item md={6} lg={4}>
                <ResourceCard
                    icon={<FileCopyIcon className="cardIcon" />}
                    title="Wodify Blueprints"
                    description="Stay on track with on-demand resources and live webinars that improve your experience and help you achieve your goals."
                    resourceURL="https://www.google.com"
                />
            </Grid>
            <Grid item md={6} lg={4}>
                <ResourceCard
                    icon={<MenuBookIcon className="cardIcon" />}
                    title="Wodify Knowledge Base"
                    description="Browse a comprehensive library of help articles, walkthroughs, and troubleshooting guides."
                    resourceURL="https://www.google.com"
                />
            </Grid>
            <Grid item md={6} lg={4}>
                <ResourceCard
                    icon={<ViewDayIcon className="cardIcon" />}
                    title="Wodify Feature Forum"
                    description="Use your voice to vote and submit new feature ideas to help shape the future of Wodify!"
                    resourceURL="https://www.google.com"
                />
            </Grid>
            <Grid item md={6} lg={4}>
                <ResourceCard
                    icon={<DevicesIcon className="cardIcon" />}
                    title="Marketing Materials"
                    description="Get your members and prospects excited with customizable print, social media, and online communications."
                    resourceURL="https://www.google.com"
                />
            </Grid>
            <Grid item md={6} lg={4}>
                <ResourceCard
                    icon={<PostAddIcon className="cardIcon" />}
                    title="Wodify Blog"
                    description="Keep up-to-date with fitness-targeted news articles, advice for gym owners, and curated guest posts from industry leaders."
                    resourceURL="https://www.google.com"
                />
            </Grid>
        </Grid>
    );
}
