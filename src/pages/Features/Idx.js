import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Idx1 from "../../assets/images/levelup-slide.png";
import Recently from '../../components/Recently';
import Footer from '../../components/Footer';
import Demo2 from '../../components/Demo2';
const Idx = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-top'>
                <div className="banner-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className='common-title'>Your brand is unique. Your real estate website should be too.</h1>
                                <p className='common-text'>Brivity websites are customizable, responsive, and designed to capture massive amounts of leads. Give your website visitors exactly what they’re looking for to keep them coming back.</p>
                                <div className="my-5">
                                    <Link to="" className='border-btn'>Compare Solutions</Link>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center justify-content-center">

                                <img className="img-fluid" src={Idx1} alt="banner" />

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Recently />
            <Demo2 title={"Capture and convert more leads with Brivity!"} />
            <Footer />
        </div>
    );
};

export default Idx;