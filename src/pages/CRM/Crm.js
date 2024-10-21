import React from 'react';
import { Link } from 'react-router-dom';
import CrmHero from "../../assets/images/crm-hero.png";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PlanAuto from "../../assets/images/Plan-Automation-2x.png";
import { SiTicktick } from "react-icons/si";
import Slider from '../../components/Slider';
import MarketingAuto from "../../assets/images/marekting-automation-tools.png";
import Demo2 from '../../components/Demo2';
const Crm = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-top'>
                <div className="banner-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className='common-title'>Prospecting to closing, all in one place.</h1>
                                <p className='common-text'>Brivity’s powerful real estate CRM software helps you create stronger relationships, manage your funnel more efficiently, and close more deals — all within one seamless, integrated platform.</p>
                                <div className="my-5">
                                    <Link to="" className='border-btn'>Compare Plans</Link>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center justify-content-center">
                                <img className='img-fluid' src={CrmHero} alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="common-space">
                    <div className="container-fluid">

                        <div className="row pt-5">

                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h2 className="d-clr fw-bold">Automated lead response and nurture programs</h2>
                                <p className="common-text">Put your lead follow up on autopilot with Brivity’s automated nurture programs. Instantly respond with robust smart Auto Plans that trigger texts and emails and prompt you when to make calls and follow up on tasks</p>
                                <div className="d-flex my-3">
                                    <div className="nature-icon c-clr">
                                        <SiTicktick />
                                    </div>
                                    <div className="nature-text">
                                        <p className="d-clr common-text m-0">
                                            Activate built-in nurture programs for buyers, sellers, inactive prospects, open house visitors, website visitors, or build your own for effortless communication with leads.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex my-3">
                                    <div className="nature-icon c-clr">
                                        <SiTicktick />
                                    </div>
                                    <div className="nature-text">

                                        <p className="d-clr common-text m-0">
                                            Send engaging content consumers actually want to receive – Market Reports and Listing Alerts. <span className='c-clr'> Open rates for Brivity Market Reports beat the industry average by 47%! </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex my-3">
                                    <div className="nature-icon c-clr">
                                        <SiTicktick />
                                    </div>
                                    <div className="nature-text">

                                        <p className="d-clr common-text m-0">
                                            Connect with more contacts and record outcomes instantly with Brivity’s integrated dialer.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex my-3">
                                    <div className="nature-icon c-clr">
                                        <SiTicktick />
                                    </div>
                                    <div className="nature-text">

                                        <p className="d-clr common-text m-0">
                                            Leverage proven call, email, and text scripts developed by top-producing agents for maximum conversion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center justify-content-center">
                                <img className='img-fluid' src={PlanAuto} alt="nature" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Slider />
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img className='img-fluid' src={MarketingAuto} alt="banner" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className='d-clr fw-bold'>
                            Design and marketing automation tools</h2>
                        <p className='common-text'> Instantly create beautiful flyers, postcards, and social media graphics that align with your brand standards using our library of professional template designs. With just a few clicks, customize and resize your designs for easy downloads, social sharing, or one-click printing.</p>

                    </div>

                </div>
            </div>
            <Demo2 title={"Gain your time back and close more business with Brivity!"} />
            <Footer />
        </div>
    );
};

export default Crm;