import React from 'react';
import NatureImg from "../assets/images/nurture.png";
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { FaDroplet } from "react-icons/fa6";
const Nature = () => {
    return (
        <div className='common-space'>
            <div className="container-fluid">
                <h3 className="common-sm-title text-center my-5">
                    Nurture and convert like a machine
                </h3>
                <div className="row pt-5">
                    <div className="col-md-6 ">
                        <img className='img-fluid' src={NatureImg} alt="nature" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div className="d-flex">
                            <div className="nature-icon c-clr">
                                <AiOutlineMessage />
                            </div>
                            <div className="nature-text">
                                <h4 className="d-clr">Easy Follow Up</h4>
                                <p className="d-clr my-3">
                                    Get notified when a lead comes in so you can text, call or email them straight from your CRM and automate your follow up process
                                </p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="nature-icon c-clr">
                                <IoNotifications />
                            </div>
                            <div className="nature-text">
                                <h4 className="d-clr">Targeted Listing Alerts</h4>
                                <p className="d-clr my-3">
                                    Send listing alerts to buyers about new properties and track their behavior to see who is ready to buy
                                </p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="nature-icon c-clr">
                                <FaDroplet />
                            </div>
                            <div className="nature-text">
                                <h4 className="d-clr">Accurate Market Reports</h4>
                                <p className="d-clr my-3">
                                    Send market reports to your entire database of leads to let them know when properties in their area go up for sale, pending or off-market
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nature;