import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";

import { Animated } from "react-animated-css";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        justifyContent: "center",
        width: "100%",
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width: "15%",
    },
    panel: {
        width: "75%",
        height: "700px",
    }
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [visibility, setVisibility] = React.useState({
        slide0: true,
        slide1: true,
        slide2: true,
        slide3: true,
        slide4: true,
        slide5: true,
    });

    const handleChange = (event, newValue) => {
        const prevSlide = visibility[`slide${currentSlide}`];
        // const nextSlide = visibility[`slide${newValue}`]

        console.log("Previous slide: " + currentSlide);
        console.log("Previous visibility: " + visibility[`slide${currentSlide}`]);
        console.log("Next slide: " + newValue);
        console.log("Next visibility: " + visibility[`slide${newValue}`]);
        console.log("----");

        if (prevSlide) {
            setVisibility({
                ...visibility,
                [`slide${currentSlide}`]: false,
                [`slide${newValue}`]: true
            });
        } else {
            setVisibility({
                ...visibility,
                [`slide${currentSlide}`]: true,
            });
        }



        // setVisibility({ ...visibility, [`slide${newValue}`]: true });
        setTimeout(() => setCurrentSlide(newValue), 1000);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={currentSlide}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
            </Tabs>
            <div className={classes.panel}>
                <TabPanel value={currentSlide} index={0}>
                    <Animated animationIn="fadeInRight" animationInDuration={1000} animationOut="fadeOut" animationOutDuration={1000} isVisible={visibility.slide0}>
                        <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="community" />
                    </Animated>
                </TabPanel>
                <TabPanel value={currentSlide} index={1}>
                    <Animated animationIn="fadeInRight" animationInDuration={1000} animationOut="fadeOut" animationOutDuration={1000} isVisible={visibility.slide1}>
                        <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="community" />
                    </Animated>
                </TabPanel>
                <TabPanel value={currentSlide} index={2}>
                    <Animated animationIn="fadeInRight" animationInDuration={1000} animationOut="fadeOut" animationOutDuration={1000} isVisible={visibility.slide2}>
                        <img src="https://images.unsplash.com/photo-1448387473223-5c37445527e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="community" />
                    </Animated>
                </TabPanel>
                <TabPanel value={currentSlide} index={3}>
                    <Animated animationIn="fadeInRight" animationInDuration={1000} animationOut="fadeOut" animationOutDuration={1000} isVisible={visibility.slide3}>
                        <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1323&q=80" alt="community" />
                    </Animated>
                </TabPanel>
                <TabPanel value={currentSlide} index={4}>
                    <Animated animationIn="fadeInRight" animationInDuration={1000} animationOut="fadeOut" animationOutDuration={1000} isVisible={visibility.slide4}>
                        <img src="https://images.unsplash.com/photo-1476611317561-60117649dd94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="community" />
                    </Animated>
                </TabPanel>
                <TabPanel value={currentSlide} index={5}>
                    <Animated animationIn="fadeInRight" animationInDuration={1000} animationOut="fadeOut" animationOutDuration={1000} isVisible={visibility.slide5}>
                        <img src="https://images.unsplash.com/photo-1600741476293-0a8671befb55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80" alt="community" />
                    </Animated>
                </TabPanel>
            </div> {/* end of panels */}
        </div>
    );
}
