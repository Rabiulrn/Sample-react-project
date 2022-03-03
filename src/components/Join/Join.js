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
                    <a className='btn-uni' href="fb.com">Try it for free</a>
                </div>

            </div>
            <div className='subscribe'>
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
            </div>

{/* <div className='last-msg-container'>
    <div className="last-msg">
        <h1>hi i am <span>Rabiul</span></h1>
    </div>

</div> */}
        </div>
    );
};

export default Join;