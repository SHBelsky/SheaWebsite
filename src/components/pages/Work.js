// Node module imports
import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

// Include imports
import PageTemplate from "../includes/PageTemplate";

// CSS
import "../../styles/pages/work.less";

function Tile(props) {
    const {
        backgroundColor,
        destination,
        icon,
        subtitle,
        title,
    } = props;
    const tileStyles = {
        backgroundColor,
    };
    return (
        <Link
            className="workTile"
            to={destination}
            style={tileStyles}
        >
            <img alt={`Icon for ${title}`} src={icon} className="workTile__icon" />
            <div className="workTile__title">
                {title}
            </div>
            <div className="workTile__subtitle">
                {subtitle}
            </div>
        </Link>
    );
}

Tile.propTypes = {
    backgroundColor: propTypes.string.isRequired,
    destination: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
};

function Work() {
    return (
        <PageTemplate
            className="work-container"
            subtitle="WORK WORK! Angelica..."
            title="Work Experience"
        >
            <Tile
                backgroundColor="#7D297F"
                destination="/work/wayfair"
                icon={require("../../media/work/Wayfair.png")}
                title="Wayfair"
                subtitle="Front-End Web Developer"
            />
            <Tile
                backgroundColor="red"
                destination="/work/ezra"
                icon={require("../../media/work/Ezra.png")}
                title="Ezra Tech, LLC"
                subtitle="Co-Founder, CTO, CIO"
            />
            <Tile
                backgroundColor="#0057C8"
                destination="/work/google"
                icon={require("../../media/work/Google.png")}
                title="Google"
                subtitle="User Experience Engineer Intern"
            />
            <Tile
                backgroundColor="#6F6F6F"
                destination="/work/dti"
                icon={require("../../media/work/DTI.png")}
                subtitle="Creator of 'Trends in Web Development', Developer Lead"
                title="Cornell Design & Tech Initiative"
            />
            <Tile
                backgroundColor="teal"
                destination="/work/rapid"
                icon={require("../../media/work/Rapid.png")}
                subtitle="Project: The Music Box"
                title="INFO 4320: Rapid Prototyping"
            />
            <Tile
                backgroundColor="cadetblue"
                destination="/work/cis"
                icon={require("../../media/work/CornellCIS.png")}
                subtitle="Undergraduate and Head Teaching Assistant"
                title="Computing and Information Science"
            />
            <Tile
                backgroundColor="black"
                destination="/work/ibm"
                icon={require("../../media/work/Watson.png")}
                subtitle="Front-End Developer Intern"
                title="IBM Watson"
            />
            <Tile
                backgroundColor="navy"
                destination="/work/issa"
                icon={require("../../media/work/ISSA.png")}
                subtitle="President and Co-President"
                title="Information Science Student Association"
            />
            <Tile
                backgroundColor="red"
                destination="/work/brh"
                icon={require("../../media/work/BRH.png")}
                subtitle="Web Team Lead, Volunteer Coordinator"
                title="BigRed//Hacks"
            />
            <Tile
                backgroundColor="tomato"
                destination="/work/slopeday"
                icon={require("../../media/work/SDPB.png")}
                subtitle="Volunteer Director, Recrutment Director"
                title="Slope Day Programming Board"
            />

        </PageTemplate>
    );
}

export default Work;
