import React from 'react';
import "./Support.css"
import { Link } from "react-router-dom";
import navLogo from "../../images/nav-icon.png"

const Support = () => {
    return (
        <div>
            <div className="s-nav">
                <div className="s-nav-logo">
                <Link to="/Home" className="items">
                     <img className='s-logo' src={navLogo} alt="nav-icon" />
                        </Link>
                </div>
                <div className="s-nav-btn">
<ul className='s-nav-ul'>
    <li>support home</li>
    <li>Contact us</li>
</ul>
                </div>
            </div>
            <div className="s-banner">
                <div className="s-banner-text">
                    <p className='s-banner-h'>How can we help?</p>
                    <input className='s-banner-input' type="text" placeholder='Search our knoledge base' />
                    <p>Popular topics: <span className='s-banner-p'>Threaded Messages Create and Edit a Room</span> </p>
                </div>
            </div>
            <h1>Support page</h1>
        </div>
    );
};

export default Support;