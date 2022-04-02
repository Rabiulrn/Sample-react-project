import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
// import { faInstagram,faFacebookF,faLinkedinIn,faTwitter} from '@fortawesome/free-brands-svg-icons'
import NavBar from '../NavBar/NavBar';
import './Pricing.css';
import chat from "../../images/pricingLogo/WorkFreeli_Icons_LightBlue_conversations.png"
import file from "../../images/pricingLogo/WorkFreeli_Icons_LightBlue_attach-file.png"
import task from "../../images/pricingLogo/WorkFreeli_Icons_LightBlue_tasks-1.png"
import call from "../../images/pricingLogo/WorkFreeli_Icons_LightBlue_call.png"
import admin from "../../images/pricingLogo/admin.png"
import guest from "../../images/pricingLogo/guest.png"
import Footer from '../Footer/Footer';

const Pricing = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='starter-plan'>
                <div className="starter-plan-h1">
                    <p>Try our Starter plan for FREE or go with our <br />
                        Essential plan for more users and storage.</p>
                </div>
            </div>


            <div className='st-plan-con'>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 mt-4 mx-3 single-plan">
                            <p className='text-center' style={{ "font-size": "28px" }} >Starter</p>
                            <p className='text-center price' style={{ "font-size": "40px" }} >$0 USD
                                {/* <br /><span style={{"font-size":"20px"}}>free for 10 users</span> */}
                            </p>
                            <p className='text-center users' >free for 10 users</p>

                            <p className='plan-p'>
                                <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>
                                Up to 10 users</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>
                                5 GB of account storage</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>Invite up to 10 guests (coming soon)</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>Unlimited voice calls (max 30 min per call)</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>Up to 100 video calls (max 30 min per call)</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>Encrypted data transmission</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>Can upgrade to essential plan for more users and additional storage anytime</p>
                            <a className='btn-uni' href="fb.com">Get Started</a>
                        </div>

                        <div class="col-sm-4  mt-4 mx-3 single-plan">
                            <p className='text-center' style={{ "font-size": "28px" }} >Essential</p>
                            <p className='text-center price' style={{ "font-size": "40px" }} >$4 USD
                                {/* <br /><span style={{"font-size":"20px"}}>free for 10 users</span> */}
                            </p>
                            <p className='text-center users' >per user per month</p>

                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span> First month FREE</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>5 GB of account storage</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>2 GB of additional account storage will be added with each user</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>Invite unlimited guests for collaboration (coming soon)</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>No limitations on voice & video call durations</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>Encrypted data transmission</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>Option to purchase additional storage (see plans below)</p>

                            <a className='btn-uni' href="fb.com">Start your free trial</a>
                        </div>

                        <div class="col-sm-4 mt-4 mx-3 single-plan">
                            <p className='text-center' style={{ "font-size": "28px" }} >Enterprise</p>
                            <p className='text-center price' style={{ "font-size": "40px" }} >Contact Sales
                                {/* <br /><span style={{"font-size":"20px"}}>free for 10 users</span> */}
                            </p>
                            <p className='text-center users' >for more than 50 users</p>

                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>All features included in the Essential Plan</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>Enhanced security</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>Premium content delivery network</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>Dedicated account manager for easy onboarding</p>
                            <p className='plan-p'> <span> <FontAwesomeIcon className='check-icon' icon={faCheck} /></span>Dedicated support team and faster response time</p>

                            <a className='btn-uni' href="fb.com">Contract Sales</a>
                        </div>

                    </div>

                </div>
            </div>




            <div className="additional-plan mt-4">
                <div className='text-center'>
                    <p className='additional-plan-h'>Additional Storage Plans</p>
                    <p className='additional-plan-p'>Workfreeli offers the flexibility to add more storage to your plan at any time.</p>
                    <p className='additional-plan-p'>The storage is applied to the entire business account and can be used by anyone in the business.</p>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 p-4 mt-5 mx-3  add-single-plan">
                            <p className='text-center' style={{ "font-size": "28px" }} >20 GB Storage Plan</p>
                            <p className='text-center price' style={{ "font-size": "40px" }} >$3 USD
                                {/* <br /><span style={{"font-size":"20px"}}>free for 10 users</span> */}
                            </p>
                            <p className='text-center users' >per month</p>

                            <p>
                                <span className='circle-info'><FontAwesomeIcon icon={faCircleInfo} /></span>
                                <span className='additional-plan-text'> Only Essential and Enterprise accounts can buy additional <br /> storage plans anytime after sign- <br /> up.</span>

                            </p>

                        </div>

                        <div class="col-sm-4 p-3 mt-5 mx-3 add-single-plan">
                            <p className='text-center' style={{ "font-size": "28px" }} >50 GB Storage Plan</p>
                            <p className='text-center price' style={{ "font-size": "40px" }} >$7 USD
                                {/* <br /><span style={{"font-size":"20px"}}>free for 10 users</span> */}
                            </p>
                            <p className='text-center users' >per month</p>

                            <p>
                                <span className='circle-info'><FontAwesomeIcon icon={faCircleInfo} /></span>
                                <span className='additional-plan-text'> Only Essential and Enterprise accounts can buy additional <br /> storage plans anytime after sign- <br /> up.</span>

                            </p>

                        </div>

                        <div class="col-sm-4 p-3   mt-5 mx-3 add-single-plan">
                            <p className='text-center' style={{ "font-size": "28px" }} >100 GB Storage Plan</p>
                            <p className='text-center price' style={{ "font-size": "40px" }} >$14 USD
                                {/* <br /><span style={{"font-size":"20px"}}>free for 10 users</span> */}
                            </p>
                            <p className='text-center users' >per month</p>

                            <p>
                                <span className='circle-info'><FontAwesomeIcon icon={faCircleInfo} /></span>
                                <span className='additional-plan-text'> Only Essential and Enterprise accounts can buy additional <br /> storage plans anytime after sign- <br /> up.</span>

                            </p>

                        </div>

                    </div>

                </div>
            </div>


            <div className="features-con">
                <p className='text-center feature-h'>Features at a Glance</p>
                <div className="feature">
                    <div className='single-feature'>
                        <div >
                            <img className='feature-logo' src={chat} alt="" />
                        </div>
                        <div>
                            <p className='feature-type'>Chat</p>
                            <p className='feature-text'>
                                - Direct messages <br />
                                - Rooms for collaboration <br />
                                - Private messages within a room <br />
                                - Reply to start a thread <br />
                                - Flag messages <br />
                            </p>
                        </div>
                    </div>
                    <div className='single-feature'>
                        <div >
                            <img className='feature-logo' src={file} alt="" />
                        </div>
                        <div>
                            <p className='feature-type'>Chat</p>
                            <p className='feature-text'>
                                - Upload files to rooms <br />
                                - Create a file share link to share files with anyone <br />
                                - Tag files with personal and shared team tags  <br />
                                - Manage files in the File Hub <br />
                                - Set titles for links <br />
                            </p>
                        </div>
                    </div>
                    <div className='single-feature'>
                        <div >
                            <img className='feature-logo' src={task} alt="" />
                        </div>
                        <div>
                            <p className='feature-type'>Chat</p>
                            <p className='feature-text'>
                                - Stay organized <br />
                                - Turn chat bubbles to tasks  <br />
                                - Assign tasks to teammates  <br />
                                - Set due dates and reminders  <br />
                                - Manage tasks in the dashboard <br />
                            </p>
                        </div>
                    </div>
                    <div className='single-feature'>
                        <div >
                            <img className='feature-logo' src={call} alt="" />
                        </div>
                        <div>
                            <p className='feature-type'>Chat</p>
                            <p className='feature-text'>
                                - Voice and video call conferences <br />
                                - Unique call link to invite anyone <br />
                                - Share your screen <br />
                                - Raise Hand feature  <br />
                                - Built-in chat feature <br />
                            </p>
                        </div>
                    </div>
                    <div className='single-feature'>
                        <div >
                            <img className='feature-logo' src={admin} alt="" />
                        </div>
                        <div>
                            <p className='feature-type'>Chat</p>
                            <p className='feature-text'>
                                - Manage users, teams, and guests  <br />
                                - Create shared team tags and room categories <br />
                                - Assign roles to manage user permissions <br />
                            </p>
                        </div>
                    </div>
                    <div className='single-feature'>
                        <div >
                            <img className='feature-logo' src={guest} alt="" />
                        </div>
                        <div>
                            <p className='feature-type'>Chat</p>
                            <p className='feature-text'>
                                - Invite guests to a room or conference call  <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="join-cont-p">
                <div className="join-cont">
                    <div className="join-text">
                        <p style={{ "fontSize": "28px", "paddingBottom": "28px" }} className='join-h1 text-center'>Start using Workfreeli today, <br />
                            no trials, no credit card required</p>



                        <div>
                            <a className='btn-uni text-center' href="fb.com">Try it today</a>
                        </div>


                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Pricing;