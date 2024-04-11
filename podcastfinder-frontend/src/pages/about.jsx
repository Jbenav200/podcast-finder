// Filename - pages/about.jsx

import React from "react";
import { FaHeadphones } from "react-icons/fa";

const About = () => {
    return (
        <>
            <div className="secondary-header">
                <div className="columns-2 mb-10 heading flex justify-center">
                    <h1 className="font-bold">About PodcastFinder</h1>
                    <FaHeadphones/>
                </div>
            </div>
            <div className="content container xs:mx-10">
                <div className="row">
                <h2 className="font-bold">
                    PodcastFinder is your one stop shop for finding
                    podcasts to your taste on various platforms.
                </h2>
                <p>PodcastFinder was created by Jonathan Ben Avraham in 2024 with the aim of helping people find podcasts that suit their tastes.</p>
                </div>
            </div>
        </>
    );
};

export default About;