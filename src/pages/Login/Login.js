import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Logo from "../../assets/images/logo.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import axios from 'axios';
import Loader from '../../components/Loader';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email and password
        if (!email.includes('@')) {
            toast.error("Invalid Email! Please include '@' in your email.");
            return;
        }
        if (!email) {
            toast.error("Email is required!");
            return;
        }
        if (!password) {
            toast.error("Password is required!");
            return;
        }

        setLoading(true); // Show loader

        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
                email,
                password,
            });

            if (res.data.success) {
                toast.success("Logged in successfully!");

                // Set cookies for auth token and user info
                Cookies.set("token", res.data.token, { expires: 1, sameSite: 'Lax', secure: true });
                Cookies.set("auth", JSON.stringify({
                    user: res.data.user,
                }), { expires: 1, sameSite: 'Lax', secure: true });

                // Redirect based on user role
                if (res.data.user.role === 1) {
                    navigate("/dashboard/admin");
                } else {
                    navigate("/dashboard/user");
                }
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred while logging in. Please try again.");
        } finally {
            setLoading(false); // Hide loader
        }
    };

    return (
        <>
            <Navbar />
            {loading && <Loader />}
            <div className='mt-top'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-6">
                            <div className="card o-hidden border-0 my-5">
                                <div className="card-body p-0 shadow-lg rounded-3">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="p-5">
                                                <div className="text-center mb-1">
                                                    <img width="200" src={Logo} alt="Logo" />
                                                </div>

                                                <h3 className="common-sm-title text-center fw-medium mb-4">Sign In</h3>
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group mb-2">
                                                        <label className="common-text mb-1">Email</label>
                                                        <input
                                                            className="form-control p-3"
                                                            placeholder="Email"
                                                            name="email"
                                                            type="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label className="common-text mb-1">Password</label>
                                                        <input
                                                            className="form-control p-3"
                                                            placeholder="Password"
                                                            name="password"
                                                            type="password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <button className="common-nav-right mt-3 w-100" type="submit">
                                                        SIGN IN
                                                    </button>
                                                    <div className="text-center my-3">
                                                        <Link to="/register" className="c-clr">Don't have an Account?</Link>
                                                    </div>
                                                    <div className="text-center my-3">
                                                        <Link className="c-clr" to="/forgot-password">Forgot Password?</Link>
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

export default Login;
