import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements.js";

const Footer = () => {
    return(
        <div id="footer" className="footer columns-2">
            <div className="contents">
                <div className="mt-10">
                    <p>&copy; BenavDev 2024</p>
                </div>
                <div className="pt-10">
                    <NavMenu className="">
                        <NavLink to='/privacy-policy'>Privacy Policy</NavLink>
                        <NavLink to='/cookie-policy'>Cookie Policy</NavLink>
                        <NavLink to='site-map'>Site Map</NavLink>
                    </NavMenu>
                </div>
            </div>
        </div>
    )
}

export default Footer;