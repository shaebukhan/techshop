import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { IoIosChatbubbles } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";
import Demo2 from "../../components/Demo2";
const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="mt-top  m-h-75 d-flex align-items-center justify-content-center">
                <h1 className="common-title d-clr ">Contact Us</h1>
            </div>
            <div className="bg-little-dark common-space m-h-100">
                <div className="contact-card-main">
                    <div className="contact-card ">
                        <div className="contact-card-icon bg-clr">
                            <IoIosChatbubbles />
                        </div>
                        <h3 className="contact-card-title">Support</h3>
                        <p className="d-clr text-center common-text">855-427-4848 <br />
                            For FAQ and video tutorials,  <br />visit <Link className="c-clr" to="/"> here</Link> </p>
                    </div>
                    <div className="contact-card ">
                        <div className="contact-card-icon bg-orng">
                            <FaEnvelope />
                        </div>
                        <h3 className="contact-card-title">Sales</h3>
                        <p className="d-clr text-center common-text">866-295-3322 <br />
                            <Link className="c-clr" to="sales@brivity.com">sales@brivity.com</Link> </p>
                    </div>
                    <div className="contact-card ">
                        <div className="contact-card-icon bg-clr">
                            <ImLocation />
                        </div>
                        <h3 className="contact-card-title">Address</h3>
                        <p className="d-clr text-center common-text">2211 Rimland Drive Suite 230 <br />
                            Bellingham, WA 98226 </p>
                    </div>
                </div>
            </div>
            <div className="common-space">

                <h1 className="common-sm-title d-clr text-center ">Get In Touch</h1>
                <p className="common-text text-center mb-5">
                    Have a general question about Brivity? Fill out this form.</p>
                <div className="row align-items-stretch no-gutters contact-wrap">
                    <div className="col-md-12">
                        <div className="form h-100">

                            <form className="mb-5" method="post" id="contactForm" name="contactForm">
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor className="common-text">Name *</label>
                                        <input type="text" className="form-control rounded-2 p-3" name="name" id="name" placeholder="Your name" />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor className="common-text">Email *</label>
                                        <input type="text" className="form-control rounded-2 p-3" name="email" id="email" placeholder="Your email" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor className="common-text">Phone</label>
                                        <input type="text" className="form-control rounded-2 p-3" name="phone" id="phone" placeholder="Phone #" />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor className="common-text">Company</label>
                                        <input type="text" className="form-control rounded-2 p-3" name="company" id="company" placeholder="Company  name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group mb-3">
                                        <label htmlFor="message" className="common-text">Message *</label>
                                        <textarea className="form-control rounded-2 p-3" name="message" id="message" cols={30} rows={4} placeholder="Write your message" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="">
                                        <button className="common-nav-right" type="submit">SUBMIT</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default Contact;