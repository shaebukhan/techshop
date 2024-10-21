import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: "#f8f7f6" }} className="common-space">
                <img className="ftr-logo" src={Logo} alt="logo" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <h6 className="ftr-small-title">Connect</h6>
                            <div className="ftr-link">
                                <Link to="tel:8662953322">
                                    (866) 295-3322</Link>
                            </div>
                            <div className="ftr-link">
                                <Link to="mailto:sales@brivity.com">sales@techshop.com</Link>
                            </div>
                            <div className="social-icons">
                                <Link to=""><FaFacebookF /></Link>
                                <Link to=""><FaTwitter /></Link>
                                <Link to=""><FaInstagram /></Link>
                                <Link to=""><FaYoutube /></Link>
                                <Link to=""><FaLinkedinIn /></Link>
                            </div>
                            <div className="my-3">
                                <input type="text" className="form-control" placeholder="Email Address" />
                                <button className="my-3 bg-clr border-0 w-100 rounded-3 p-2 text-white" type="submit">Subscribe</button>
                                <p className="ftr-link">
                                    We send weekly emails with latest specials, offers and ways to win cool stuff!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h6 className="ftr-small-title">Features</h6>
                            <div className="ftr-link">
                                <Link to="">My Account</Link>
                            </div>

                            <div className="ftr-link">
                                <Link to="">Special and latest offers</Link>
                            </div>
                            <div className="ftr-link">
                                <Link to=""> Shopping Guide </Link>
                            </div>
                            <div className="ftr-link">
                                <Link to=""> Payment Methods</Link>
                            </div>
                            <div className="ftr-link">
                                <Link to=""> Frequntly asked questions ?</Link>
                            </div>


                        </div>
                        <div className="col-md-3">
                            <h6 className="ftr-small-title">Company</h6>
                            <div className="ftr-link">
                                <Link to="">  About</Link>
                            </div>

                            <div className="ftr-link">
                                <Link to=""> Career</Link>
                            </div>
                            <div className="ftr-link">
                                <Link to="">Technical Service</Link>
                            </div><div className="ftr-link">
                                <Link to=""> Warranty and Returns</Link>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <h6 className="ftr-small-title">Resources</h6>
                            <div className="ftr-link">
                                <Link to="">Contact</Link>
                            </div>

                            <div className="ftr-link">
                                <Link to=""> Terms of Service</Link>
                            </div>

                            <div className="ftr-link">
                                <Link to="">  Privacy Policy</Link>
                            </div>

                        </div>
                    </div>
                </div>
                <hr className="my-5" />
                <p className=" ">
                    All Rights Reserved. Copyright 1991-2023  TechShop Computers  Pty Ltd (ABN: 48 051 046 596). The  TechShop Computers Logo & Mouse Pointer in Circles are registered Trademarks of  TechShop Computers  Pty Ltd. All other trademarks and copyrights are the property of their respective owners. For further information on terms of service & conditions please see Terms & Conditions. Ultrabook, Celeron, Celeron Inside, Core Inside, Intel, Intel Logo, Intel Atom, Intel Atom Inside, Intel Core, Intel Inside, Intel Inside Logo, Intel vPro, Itanium, Itanium Inside, Pentium, Pentium Inside, vPro Inside, Xeon, Xeon Phi, and Xeon Inside are trademarks of Intel Corporation in the U.S. and/or other countries.

                </p>
            </div>
        </>
    );
};

export default Footer;
