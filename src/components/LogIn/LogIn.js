import React from 'react';
import NavBar from '../NavBar/NavBar';
import "./LogIn.css"

const LogIn = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="login-container">
                <div className="left">hello
                <div className="left-img">

                </div>
                </div>
                <div className="right">
                    <p >Hello! Welcome Back</p>
                    <div className="login-input">
                        <label htmlFor=""></label>
                        <span></span>
                    </div>
                </div>
            </div>
            <h1>Login page</h1>
        </div>
    );
};

export default LogIn;