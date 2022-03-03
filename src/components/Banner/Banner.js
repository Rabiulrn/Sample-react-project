import React from 'react';
import "./Banner.css"
const Banner = () => {
    return (
        <div>
            <div className='banner-img'>
                <div className='banner-text'>
                    <h1>Inspire teamwork
                        and stay connected</h1>
                    <p>
                        Workfreeli replaces the many apps today's teams rely on with a single platform that combines chat, calls, files, and task management (coming soon).
                    </p>
                    <a className='btn-uni' href="fb.com">Try it for free</a>


                </div>

            </div>
            <div className='banner-ft'>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 p-3">
                            <img src="https://site.workfreeli.com/wp-content/uploads/2022/01/rocket-icon-248px-whitr-1.png" alt="rocket" />
                    <h4 class="text-warning mt-2" style={{"font-size":"25px"}}>Easy onboarding</h4><br />
                            <p class="text-light" style={{"font-size":"20px"}}>Workfreeli only takes a few minutes to set up. It’s fully cloud-based, runs on any browser or device, and will soon be available as an app on iOS and Android. With tips, tutorials and coach marks, users can ease into the flow of things.</p>
                        </div>

                        <div class="col-sm-4 p-3">
                            <img src="https://site.workfreeli.com/wp-content/uploads/2022/01/benefir-icon-3-1.png" alt="benefir" /><br /><br />
                            <h4 class="text-warning mt-3" style={{"font-size":"25px"}}>Low cost, high impact</h4><br />
                            <p class="text-light"  style={{"font-size":"20px"}}>Expect a transformative impact to the way your team works. Workfreeli features a variety of tools and functionality that will allow you to manage your business on a single platform – saving you money and time.</p>
                        </div>

                        <div class="col-sm-4 p-3">
                            <img src="https://site.workfreeli.com/wp-content/uploads/2022/01/benefit-icon-2-1.png" alt="benfit" /><br /><br />
                            <h4 class="text-warning mt-3" style={{"font-size":"25px"}} >Quick file access</h4><br />
                            <p class="text-light"  style={{"font-size":"20px"}}>Never struggle to find a document again with Workfreeli's File Hub. With the use of tags and a built-in advanced search, you can easily access all your important files. </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;