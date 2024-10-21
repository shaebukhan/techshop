import React from 'react';
import { Link } from 'react-router-dom';
import CraHero from "../../assets/images/brivity-cma.png";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MarketingAuto from "../../assets/images/marekting-automation-tools.png";
import Demo2 from '../../components/Demo2';
const Cma = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-top'>
                <div className="banner-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className='common-title'>Brivity’s CMA real estate reports do it all!</h1>
                                <p className='common-text'>Are you ready to take control of the conversation and give clients a Comparative Market Analysis report they’ll love?</p>
                                <div className="my-5">
                                    <Link to="" className='border-btn'>Compare Solutions</Link>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center justify-content-center">
                                <img className='img-fluid' src={CraHero} alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container py-5">
                <h3 className="common-title text-center my-5">
                    What’s the Brivity CMA advantage?
                </h3>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img className='img-fluid' src={MarketingAuto} alt="banner" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className='d-clr fw-bold'>
                            Your ultimate lead nurture and conversion tool</h2>
                        <p className='common-text'>Never worry about losing touch with your clients and sphere again with Brivity’s custom-branded Market Reports. Each report is created with trusted data, such as when properties go up for sale, pending or off-market, and community insights, giving your clients valuable information about their home investment. With Brivity’s real estate CMA branded to you, you’ll quickly become the real estate market expert who keeps everyone in the know.</p>

                    </div>

                </div>
            </div>
            <Demo2 title={"Unique Websites. No Contracts. One Login."} />
            <Footer />
        </div>
    );
};

export default Cma;