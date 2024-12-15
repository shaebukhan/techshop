import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Logo from "../../assets/images/logo.jpg";
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import { toast } from "react-toastify";
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form validation
        if (!name) {
            toast.error("Name is required!");
            return;
        } else if (!email) {
            toast.error("Email is required!");
            return;
        } else if (!password) {
            toast.error("Password is required!");
            return;
        }

        setLoading(true);

        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
                name,
                email,
                password,
            });

            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong!");
        } finally {
            setLoading(false);
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
                                                <h3 className="common-sm-title text-center fw-medium mb-4">Register</h3>
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group mb-2">
                                                        <label className="common-text mb-1">Username</label>
                                                        <input
                                                            className="form-control p-3"
                                                            placeholder="Name"
                                                            name="name"
                                                            type="text"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            required
                                                        />
                                                    </div>
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
                                                    <button className="common-nav-right mt-3 w-100" type="submit">REGISTER</button>
                                                    <div className="text-center my-3">
                                                        <Link to="/login" className='c-clr'>Already have an Account?</Link>
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
