import React, { useState } from 'react';
import UserSidebar from './UserSidebar';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import UserNav from './UserNav';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';

const UserProfile = () => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    // Load initial auth data from cookies
    const token = Cookies.get('token');
    const authDataString = Cookies.get('auth');
    const auth = authDataString ? JSON.parse(authDataString) : null;

    // Set initial form values from auth data
    const [formData, setFormData] = useState({
        name: auth?.user?.name || '',
        email: auth?.user?.email || '',
        id: auth?.user?.id || '',
        password: ''  // Initialize password as empty
    });

    // Toggle sidebar open/close
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Update profile function
    const UpdateProfile = async (e) => {
        e.preventDefault();
        const { name, email, password, id } = formData;

        if (!email.includes('@')) {
            toast.error("Invalid Email! Please include '@' in your email.");
            return;
        }
        setLoading(true);
        try {
            // Prepare payload, only include password if it's provided
            const payload = { name, email };
            if (password) payload.password = password;

            const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/update-profile/${id}`, payload, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (response.data.success) {
                toast.success(response.data.message);

                // Update auth data in cookies
                const updatedUser = { ...auth.user, name: response.data.user.name, email: response.data.user.email };
                const updatedAuth = { ...auth, user: updatedUser };

                Cookies.set('auth', JSON.stringify(updatedAuth), { expires: 1, sameSite: 'Lax', secure: true });
                navigate("/dashboard/user");

            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('Failed to update profile.');
        } finally {
            setLoading(false); // Hide loader
        }
    };

    return (
        <>
            {loading && <Loader />}
            <div className="dashboard-container"></div>
            <UserSidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            {/* Main Content */}
            <div className={`dashboard-main ${sidebarOpen ? 'shifted' : ''}`}>
                <UserNav />
                <form onSubmit={UpdateProfile}>
                    <div className="kyc-screen common-prop">
                        <h3 className='common-title my-3'>Update Profile</h3>

                        {/* Name Input */}
                        <div className="w-100 mb-3">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control w-100"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="w-100 mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control w-100"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* New Password Input */}
                        <div className="w-100 mb-3">
                            <label>New Password</label>
                            <input
                                type="password"
                                className="form-control w-100"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder='Enter New Password (optional)'
                            />
                        </div>

                        <div className="py-4">
                            <button className='common-nav-right' type='submit'>
                                Update Profile
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserProfile;
