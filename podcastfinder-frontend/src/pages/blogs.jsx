
// Filename - pages/blogs.jsx

import React from "react";
import { FaHeadphones } from "react-icons/fa";

const Blogs = () => {
    return( 
        <>
        <div className="secondary-header">
        <div className="columns-1 mb-10 heading flex justify-center">
                    <h1 className="font-bold pr-2.5">PodcastFinder</h1>
                    <FaHeadphones color="#242424" fontSize="3rem"/>
                    <h1 className="font-bold pl-5"> Blogs</h1>
                </div>
        </div>
        <div className="content container mx-10">
            <div className="row">
                <h2 className="font-bold">Check back here for future blogs!</h2>
            </div>
        </div>
        </>
    );
};

export default Blogs;