import React from 'react';
import { Link } from 'react-router-dom';
import Hero from "../assets/images/banner.jpg";
const Banner = () => {
    return (
        <div className='mt-top'>
            <div className="banner-space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className='common-title'>The only CRM that  guarantees success in real estate</h1>
                            <p className='common-text'>The Brivity Platform is your time-saving, all-in-one real estate CRM and software solution to generate more business, stay top of mind with your database, and close more deals.</p>
                            <div className="my-5">
                                <Link to="" className='border-btn'>Compare Plans</Link>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <img className='img-fluid' src={Hero} alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;