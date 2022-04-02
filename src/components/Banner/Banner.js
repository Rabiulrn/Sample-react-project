import React from 'react';
import "./Banner.css"
import rocket from "../../images/rocket-icon.png"
import desktop from "../../images/desktop-icon.png"
import third from "../../images/benefit-icon-2-1.png"
const Banner = () => {
    return (
        <div>
            <div className='banner-img'>
                <div className='banner-text'>
                    <p className='banner-h'>Inspire teamwork
                        and stay connected</p>
                    <p className='banner-p'>
                        Workfreeli replaces the many apps today's teams rely on with a single platform that combines chat, calls, files, and task management (coming soon).
                    </p>
                    <a className='btn-uni' href="fb.com">Try it for free</a>


                </div>

            </div>
            <div className='banner-ft'>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 p-3">
                            <img src={rocket} alt="rocket" />
                            <h4 class="text-warning mt-2" style={{ "font-size": "25px" }}>Easy onboarding</h4><br />
                            <p class="text-light" style={{ "font-size": "20px" }}>Workfreeli only takes a few minutes to set up. It’s fully cloud-based, runs on any browser or device, and will soon be available as an app on iOS and Android. With tips, tutorials and coach marks, users can ease into the flow of things.</p>
                        </div>

                        <div class="col-sm-4 p-3">
                            <img src={desktop} alt="benefit" /><br /><br />
                            <h4 class="text-warning mt-3" style={{ "font-size": "25px" }}>Low cost, high impact</h4><br />
                            <p class="text-light" style={{ "font-size": "20px" }}>Expect a transformative impact to the way your team works. Workfreeli features a variety of tools and functionality that will allow you to manage your business on a single platform – saving you money and time.</p>
                        </div>

                        <div class="col-sm-4 p-3">
                            <img src={third} alt="benefit"   /><br /><br />
                            <h4 class="text-warning mt-3" style={{ "font-size": "25px" }} >Quick file access</h4><br />
                            <p class="text-light" style={{ "font-size": "20px" }}>Never struggle to find a document again with Workfreeli's File Hub. With the use of tags and a built-in advanced search, you can easily access all your important files. </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;