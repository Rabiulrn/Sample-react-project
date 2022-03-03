import React from 'react';
import "./NewFeature.css"
import "../Footer/Footer.css"
const NewFeature = () => {
    return (
        <div className='newft-container'>
            <div className='newft-image'>
                <div className='newft-text'>
                    <h1>Coming soon!</h1>
                    <div className='newft-icon'>
                    <div>
                        <a href="fb.com">
                            <div className='footer-icon'>
                                <img src="https://site.workfreeli.com/wp-content/uploads/2022/01/app-store-1.png" alt="" />
                            </div>
                        </a>
                    </div>
                    <div style={{"paddingLeft":"80px"}}>
                        <a href="fb.com">
                            <div className='footer-icon'>
                                <img src="https://site.workfreeli.com/wp-content/uploads/2022/01/google-play-1.png" alt="" />
                            </div>
                        </a>
                    </div>
                    </div>
                   
                </div>
                <div>
                    
                </div>
            </div>


        </div>
    );
};

export default NewFeature;