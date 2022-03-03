import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-section">
            <div className='container'>
                <img className="footer-image" src="https://site.workfreeli.com/wp-content/uploads/2022/01/WFLogo2022_Wordmark-No-Background.png" alt="" />
            </div>
            <div className="footer container">
                <div>
                    <div className='rights'>
                        <p>All rights reserved workfreeli</p>
                    </div>
                    <i class="ua-icon ua-icon-instagram"></i>
                    <div>
                        <a href="fb.com">
                            <div className='footer-icon'>
                                <img src="https://site.workfreeli.com/wp-content/uploads/2022/01/app-store-1.png" alt="" />
                            </div>
                        </a>
                    </div>
                    <br />
                    <br />
                    <div>
                        <a href="fb.com">
                            <div className='footer-icon'>
                                <img src="https://site.workfreeli.com/wp-content/uploads/2022/01/google-play-1.png" alt="" />
                            </div>
                        </a>
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
                <div>
                    <h5 className='f-title'>Resources</h5>
                    <div className='f-pad'><a href="fb.com" className="f-link">Support</a></div>
                </div>
            </div>


        </div>
    );
};

export default Footer;