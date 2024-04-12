// Filename - pages/index.jsx

import React, { useState } from "react";
import PFModal from "../components/PFModal";
import { Button, Carousel } from "antd";
import { FaHeadphones } from "react-icons/fa";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [userToken, setUserToken] = useState("");
    const token = localStorage.getItem('token');
    const getIsModalOpen = (boolval) => {
        setIsModalOpen(boolval);
    }

    const setModalProps = (title, modalOpen) => {
        setModalTitle(title);
        setIsModalOpen(modalOpen);
    }

    const getUserToken = (token) => {
        setUserToken(token);
    }

    const carouselStyle = {
        height: "200px",
        width: "100%"
    }
    return (
        <>
            <div className="header">
                <div className="columns-1 mb-10 heading flex justify-center">
                    <h1 className="font-bold pr-2.5">Welcome to PodcastFinder</h1>
                    <FaHeadphones color="#242424" fontSize="3rem"/>
                </div>
                <div className='columns-2 md:columns-2 z-0'>
                    { token == null &&
                        <><div className="flex justify-end">
                            <Button size="large" className="btn-grey text-white font-bold" onClick={() => { setModalProps("Sign Up", true); } }>Sign up</Button>
                        </div><div className="flex justify-start">
                                <Button size="large" className="btn-pink font-bold" onClick={() => { setModalProps("Log In", true); } }>Sign in</Button>
                            </div></>
                    }
                </div>
                
                <svg className="header-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#242424" fillOpacity="1" d="M0,160L7.7,176C15.5,192,31,224,46,240C61.9,256,77,256,93,266.7C108.4,277,124,299,139,288C154.8,277,170,235,186,224C201.3,213,217,235,232,224C247.7,213,263,171,279,154.7C294.2,139,310,149,325,149.3C340.6,149,356,139,372,128C387.1,117,403,107,418,90.7C433.5,75,449,53,465,74.7C480,96,495,160,511,170.7C526.5,181,542,139,557,149.3C572.9,160,588,224,604,240C619.4,256,635,224,650,202.7C665.8,181,681,171,697,144C712.3,117,728,75,743,58.7C758.7,43,774,53,790,90.7C805.2,128,821,192,836,224C851.6,256,867,256,883,218.7C898.1,181,914,107,929,96C944.5,85,960,139,975,181.3C991,224,1006,256,1022,245.3C1037.4,235,1053,181,1068,165.3C1083.9,149,1099,171,1115,154.7C1130.3,139,1146,85,1161,106.7C1176.8,128,1192,224,1208,224C1223.2,224,1239,128,1254,122.7C1269.7,117,1285,203,1301,202.7C1316.1,203,1332,117,1347,106.7C1362.6,96,1378,160,1394,192C1409,224,1425,224,1432,224L1440,224L1440,320L1432.3,320C1424.5,320,1409,320,1394,320C1378.1,320,1363,320,1347,320C1331.6,320,1316,320,1301,320C1285.2,320,1270,320,1254,320C1238.7,320,1223,320,1208,320C1192.3,320,1177,320,1161,320C1145.8,320,1130,320,1115,320C1099.4,320,1084,320,1068,320C1052.9,320,1037,320,1022,320C1006.5,320,991,320,975,320C960,320,945,320,929,320C913.5,320,898,320,883,320C867.1,320,852,320,836,320C820.6,320,805,320,790,320C774.2,320,759,320,743,320C727.7,320,712,320,697,320C681.3,320,666,320,650,320C634.8,320,619,320,604,320C588.4,320,573,320,557,320C541.9,320,526,320,511,320C495.5,320,480,320,465,320C449,320,434,320,418,320C402.6,320,387,320,372,320C356.1,320,341,320,325,320C309.7,320,294,320,279,320C263.2,320,248,320,232,320C216.8,320,201,320,186,320C170.3,320,155,320,139,320C123.9,320,108,320,93,320C77.4,320,62,320,46,320C31,320,15,320,8,320L0,320Z"></path></svg>
            </div>
            <div className="content container">

                <div id="About" className="my-20 justify-center">
                    
                    <h2>About PodcastFinder</h2>
                    <p>PodcastFinder was created by Jonathan Ben Avraham in 2024 with the aim of helping people find podcasts that suit their tastes.</p>
                </div>
                
                <PFModal
                open={isModalOpen}
                title={modalTitle}
                getIsModalOpen={getIsModalOpen}
                getUserToken={getUserToken}
                />
            </div>
        </>
    );
};

export default Home;