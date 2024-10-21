import React from 'react';
import Navbar from '../../components/Navbar';
import Logo from "../../assets/images/logo.jpg";
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <>
            <Navbar />
            <div className='mt-top'>

                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-6">
                            <div className="card o-hidden border-0   my-5">
                                <div className="card-body p-0 shadow-lg rounded-3">
                                    {/* Nested Row within Card Body */}
                                    <div className="row">
                                        {/* <div class="col-lg-6 d-none d-lg-block bg-login-image"></div> */}
                                        <div className="col-lg-12">
                                            <div className="p-5">
                                                <div className="text-center mb-1">
                                                    <img width={"200"} src={Logo} alt="" />

                                                </div>

                                                <h3 className="common-sm-title text-center fw-medium mb-4">Register</h3>
                                                <form  >
                                                    <div className="form-group mb-2">
                                                        <label className="common-text mb-1">Username </label>
                                                        <input className="form-control p-3" placeholder="Name" name="name" type="text" autofocus required />
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <label className="common-text mb-1"> Email </label>
                                                        <input className="form-control p-3" placeholder="Email" name="email" type="text" autofocus required />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label className="common-text mb-1">Password  </label>
                                                        <input className="form-control p-3" placeholder="Password" name="password" type="password" required />
                                                    </div>
                                                    <button className="common-nav-right mt-3 w-100" type="submit" name="login">REGISTER</button>
                                                    <div className="text-center my-3">
                                                        <Link to={"/login"} className='c-clr'>   Already  have an Account ?   </Link>

                                                    </div>


                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Register;