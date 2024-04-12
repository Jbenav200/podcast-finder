import React, {useState} from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements.js";
import { Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import PFModal from "./PFModal.jsx";

const Navbar = () => {
    const location = useLocation();
    const token = localStorage.getItem('token');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [userToken, setUserToken] = useState("");
    const getIsModalOpen = (boolval) => {
        setIsModalOpen(boolval);
    }
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        console.log(location);
        if(location.pathname !== '/'){
            const newPath = '/'
            navigate(newPath);
        } else {
            window.location.reload();
        }
        
    }

    const openLoginModal = () => {
        setModalTitle("Log in");
        setIsModalOpen(true);
    }

    const getUserToken = (token) => {
        setUserToken(token);
        setIsModalOpen(false);
    }

    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/contact">
                        Contact Us
                    </NavLink>
                    <NavLink to="/blogs">
                        Blogs
                    </NavLink>
                    <NavLink to="/search">
                        Search
                    </NavLink>
                    { token !== null ?
                        <NavLink className="justify-right" to='/'>
                            <Button className="btn-grey" onClick={logOut}>Log Out</Button>
                        </NavLink> : 
                        <NavLink className="justify-right" to='/'>
                            <Button className="btn-pink" onClick={openLoginModal}>Log In</Button>
                        </NavLink> 
                    }
                    
                </NavMenu>
            </Nav>

            <PFModal
                open={isModalOpen}
                title={modalTitle}
                getIsModalOpen={getIsModalOpen}
                getUserToken={getUserToken}
            />
        </>
    );
};

export default Navbar;