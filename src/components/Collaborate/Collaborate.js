import React from 'react';
import "./Collaborate.css"
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
                <a className='btn-uni' href="fb.com">Learn more</a>
                    
            </div>
            <div >
                <img className='collab-image' src="https://site.workfreeli.com/wp-content/uploads/2022/01/feature-one-1.png" alt="" />
            </div>
        </div>
    );
};

export default Collaborate;