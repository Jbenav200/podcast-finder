// Filename - pages/contact.jsx

import React from "react";
import { FaHeadphones } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div className="secondary-header">
                <div className="columns-1 mb-10 heading flex justify-center">
                    <h1 className="font-bold pr-2.5">Contact us at PodcastFinder</h1>
                    <FaHeadphones color="#242424" fontSize="3rem"/>
                </div>
            </div>
            <div className="content container mx-10">
                <div className="row">
                <h2 className="font-bold">
                    Mail us on
                    info@podcastfinder.org
                </h2>
                </div>
            </div>
        </>
    );
};

export default Contact;