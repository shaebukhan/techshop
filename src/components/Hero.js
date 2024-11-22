import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ title, desc, buttonTxt, image }) => {
    return (

        <div className='mt-top'>
            <div className="banner-space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className='common-title'>{title}</h1>
                            <p className='common-text'>{desc}</p>
                            <div className="my-5">
                                <Link to="" className='border-btn'>{buttonTxt}</Link>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <img className='img-fluid rounded-3' src={image} alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;