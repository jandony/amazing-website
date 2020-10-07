import React from "react";

// Utilities

// Material UI Components
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function ResourceCard(props) {

    return (
        <div className="resourceCard">
            {props.icon}
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <Button fullWidth={true} href={props.resourceURL} className="primary-btn" endIcon={<ChevronRightIcon />}>Primary</Button>
        </div>
    );
}
