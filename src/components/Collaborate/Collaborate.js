import React from 'react';
import "./Collaborate.css"
import colab from "../../images/Collaborate-on-one-platform-graphic-1536x1170.webp"
const Collaborate = () => {
    return (
        <div className='collab collab-font'>
            <div style={{"padding-right":"40px"}}>
                <h1 style={{"padding-bottom":"30px"}}>Collaborate on one Plateform</h1>
                <p>
                    Workfreeli encourages collaboration by offering unique features that are natively integrated to offer a seamless experience, whether it's managing your team or business.
                    <br />
                    <br />
                    Our early release offers all the features you would need to connect with teammates, share and manage files, intuitively manage your tasks, and much more!
                </p>
                <div style={{"marginTop":"50px"}}>
                <a className='btn-uni' href="fb.com">Learn more</a>
                </div>
               
                    
            </div>
            <div >
                <img className='collab-image' src={colab}alt="" />
            </div>
        </div>
    );
};

export default Collaborate;