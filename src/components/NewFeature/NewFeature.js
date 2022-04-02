import React from 'react';
import "./NewFeature.css"
import "../Footer/Footer.css"
import gp from "../../images/google-play-1.png"
import apps from "../../images/app-store-1.png"
const NewFeature = () => {
    return (
        <div className='newft-container'>
            <div className='newft-image'>
                <div className='newft-text'>
                    <h1>Coming soon!</h1>
                    <div className='newft-icon'>
                    <div>
                        <a href="fb.com">
                            <div className='apps-icon'>
                                <img src={gp} alt="" />
                            </div>
                        </a>
                    </div>
                    <div style={{"paddingLeft":"80px"}}>
                        <a href="fb.com">
                            <div className='apps-icon'>
                                <img src={apps}alt="" />
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