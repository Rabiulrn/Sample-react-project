import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"
import navLogo from "../../images/nav-icon.png"
const NavBar = () => {
    return (
        <div >
            

            <nav class="container-cust">
                <div className="nav-container">
                     <Link to="/Home" className="items">
                     <img className='logo' src={navLogo} alt="nav-icon" />
                        </Link>
                       
                    <ul className='ul-design'>
                        <Link to="/OurProduct" className="items">
                            <li className='li-design'><a className='nav-text' href="google.com" target="_blank">Our Product</a></li>
                        </Link>
                        <Link to="/Pricing" className="items">
                        <li className='li-design'><a className='nav-text' href="fb.com" target="_blank">Pricing</a></li>
                        </Link>
                        <Link to="/Support" className="items">
                        <li className='li-design'><a className='nav-text' href="fb.com" target="_blank">Support</a></li>
                        </Link>
                        <Link to="/SignUp" className="items">
                        <li className='li-design'><a className='nav-text' href="www.fb.com" target="_blank">Sign Up</a></li>
                        </Link>
                        <Link to="/LogIn" className="items">
                        <li className='li-design'><a className='nav-text' href="fb.com" target="_blank">Login</a></li>
                        </Link>
                       
                        
                       
                    </ul>
                </div>

            </nav>
            {/* <div className='nav-con '>
                <div className='container con'>
                    <img className='nav-icon' src="https://site.workfreeli.com/wp-content/uploads/2022/01/WFLogo2022_Wordmark-No-Background.png?1646270373" alt="" />
                    <div>
                        <ul>
                            <li>Our Product</li>
                            <li>Pricing</li>
                            <li>Support</li>
                            <li>Sign Up</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>

            </div> */}


        </div>
    );
};

export default NavBar;