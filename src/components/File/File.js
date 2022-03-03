import React from 'react';
import "../Collaborate/Collaborate.css"
import "./File.css"
const File = () => {
    return (
        <div className='file-cont collab-font'>
            <div>
                <img className='file-image'  src="https://site.workfreeli.com/wp-content/uploads/2022/01/Workfreeli_File-Management-Illustration.png" alt="" />
            </div>
            <div style={{"paddingLeft":"80px"}}>
            <h1 style={{"padding-bottom":"30px",
                         "marginTop":"40px"}}>Collaborate on one Plateform</h1>
                <p>
                    Workfreeli encourages collaboration by offering unique features that are natively integrated to offer a seamless experience, whether it's managing your team or business.
                    <br />
                    <br />
                    Our early release offers all the features you would need to connect with teammates, share and manage files, intuitively manage your tasks, and much more!
                </p>
                <a className='btn-uni' href="fb.com">Learn more</a>
            </div>
        </div>
    );
};

export default File;