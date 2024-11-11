import React from 'react';
import Winlisting from "../assets/images/tasks-win.png";
import { PiNetworkFill } from "react-icons/pi";
import { HiSpeakerphone } from "react-icons/hi";
import { TiMessages } from "react-icons/ti";
const Deals = () => {
    return (
        <div className='common-space'>
            <div className="container-fluid">
                <h3 className="common-sm-title text-center my-5">
                    Win listings & close more deals
                </h3>
                <div className="row pt-5">

                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div className="d-flex">
                            <div className="nature-icon c-clr">
                                <PiNetworkFill />
                            </div>
                            <div className="nature-text">
                                <h4 className="d-clr">Manage</h4>
                                <p className="d-clr my-3">
                                    Manage your time, team, listings, and business in one place to leverage your resources and stay organized, productive and effective
                                </p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="nature-icon c-clr">
                                <HiSpeakerphone />
                            </div>
                            <div className="nature-text">
                                <h4 className="d-clr"> Market</h4>
                                <p className="d-clr my-3">
                                    Market your listings and yourself on all social platforms and use the reporting dashboards to see what has the best ROI
                                </p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="nature-icon c-clr">
                                <TiMessages />
                            </div>
                            <div className="nature-text">
                                <h4 className="d-clr">Communicate</h4>
                                <p className="d-clr my-3">
                                    Wow clients by communicating everything you do in a transaction for listings and pendings
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <img className='img-fluid' src={Winlisting} alt="nature" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;