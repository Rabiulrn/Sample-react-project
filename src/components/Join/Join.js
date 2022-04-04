import React from 'react';
import "./Join.css"
const Join = () => {
    return (
        <div>
            <div className='join-div'>
                <div className='container join-text'>
                    <h1> Join WorkFreeli Today</h1>
                    <p>
                        With our complimentary starter plan, you and your teammates can try all our features.
                    </p>
                    <div style={{ "marginTop": "50px" }}>
                        <a className='btn-uni' href="fb.com"  >Try it for free</a>
                    </div>

                </div>

            </div>

            <div className="join-cont-p">
                <div className="join-cont">
                    <div className="join-text">
                        <p className='join-h1'>Lots more to come!</p>
                        <p className='join-p'>We are continuously rolling out new features. To be the first to know, subscribe to our newsletter today.</p>

                        <div className="join-input">
                            <div class="field">
                                <input type="text" name="fullname" id="h-input"  style={{ "marginRight": "20px" }} />
                                <span className='label'>Your Email </span>
                            </div>
                            <div>
                                <a className='btn-uni' href="fb.com">Subscribe</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            {/* <div className='subscribe'>
                <div className=' container sub-text'>
                    <h1>We look forward to introducing additional business <br /> features.</h1>
                    <p>
                        To be the first to know, subcribe to our newsletter today.
                    </p>

                    <div className="form-floating mb-3 float-label">
                        <input type="email" className="form-control float-label" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Your Email</label>
                    </div>

                    <a className='btn-uni' href="fb.com">Subscribe</a>
                </div>
            </div> */}
            
            <div className='last-msg-container'>
                <div className="wrapper">
                    <h1 className='static-txt'>Work</h1>
                    <ul class="dynamic-txts">
                        <li><span>Togather</span></li>
                        <li><span>On Time</span></li>
                        <li><span>Socially</span></li>
                        <li><span>Freeli</span></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Join;