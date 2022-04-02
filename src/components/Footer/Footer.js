import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { faInstagram,faFacebookF,faLinkedinIn,faTwitter} from '@fortawesome/free-brands-svg-icons'



import "./Footer.css"
import footerLogo from "../../images/WFLogo2022_Logo-No-Background.png"


// const element = <FontAwesomeIcon icon={faCoffee} />
// const faInstagram = <FontAwesomeIcon icon="fa-brands faInstagram" />

const Footer = () => {
    return (
        <div className="footer-section">

            <div className="footer ">
                <div>
                    <div className='rights'>
                        <img className="footer-image" src={footerLogo} alt="" />
                    </div>


                </div>

                <div>
                    <h5 className='f-title'>Product</h5>
                    <div className='f-pad'><a href="fb.com" className="f-link">Our Products</a></div>
                    <div className='f-pad'><a href="fb.com" className="f-link">Pricing</a></div>

                </div>

                <div>
                    <h5 className='f-title'>Workflow Solutions</h5>
                    <div className='f-pad'><a href="fb.com" className="f-link">Chat</a></div>
                    <div className='f-pad'><a href="fb.com" className="f-link">Conference Call</a></div>
                    <div className='f-pad'><a href="fb.com" className="f-link">File Management</a></div>
                    <div className='f-pad'><a href="fb.com" className="f-link">Notification and Privacy</a></div>
                    <div className='f-pad'><a href="fb.com" className="f-link">Admin</a></div>
                    <div><a href="fb.com" className="f-link">Guest</a></div>
                </div>
                <div id='resources'>
                    <h5 className='f-title'>Resources</h5>
                    <div className='f-pad'><a href="fb.com" className="f-link">Support</a></div>
                </div>
            </div>

            <div className="extra-footer container">
                <div className="rights">
                    <p>© 2022 workfreeli. All rights reserved.</p>
                </div>
                <div className="policy">
                    <div className="policy-f">
                        <p >
                            <span className='f-link' style={{ "paddingRight": "15px" }}> Privacy Policy  </span> <span className='f-link'>  Customer Agreement</span>
                        </p>

                    </div>
                    <p>User Terms of Service</p>
                </div>
                <div className="footer-icon">
                <FontAwesomeIcon className='f-link fs-icon' icon={faInstagram} />
                <FontAwesomeIcon className='f-link fs-icon' icon={faTwitter} />
                <FontAwesomeIcon className='f-link fs-icon' icon={faLinkedinIn} />
                <FontAwesomeIcon className='f-link fs-icon' icon={faFacebookF} />


                </div>
            </div>
   
        </div>
    );
};

export default Footer;