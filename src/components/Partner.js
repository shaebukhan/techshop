import React from 'react';
import Place from "../assets/images/PLACE.png";
import ColdBanker from "../assets/images/cb.png";
import Century from "../assets/images/C21.png";
import Kw from "../assets/images/kw.png";
import Remix from "../assets/images/Group.png";
import Compass from "../assets/images/compass.png";
const Partner = () => {
    return (
        <div>
            <div className="common-space">
                <h3 className="common-title text-center my-3 fw-bold">
                    Our Partners
                </h3>
                <p className="common-text   text-center my-4">Join thousands of top agents and teams using Brivity to succeed in real estate</p>
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md-2 d-flex align-items-center p-4"><img src={Place} className='img-fluid' alt="" /></div>
                        <div className="col-md-2 d-flex align-items-center p-4"><img src={ColdBanker} className='img-fluid' alt="" /></div>
                        <div className="col-md-2 d-flex align-items-center p-4"><img src={Century} className='img-fluid' alt="" /></div>
                        <div className="col-md-2 d-flex align-items-center p-4"><img src={Kw} className='img-fluid' alt="" /></div>
                        <div className="col-md-2 d-flex align-items-center p-4"><img src={Remix} className='img-fluid' alt="" /></div>
                        <div className="col-md-2 d-flex align-items-center p-4"><img src={Compass} className='img-fluid' alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;