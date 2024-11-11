import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoClose, IoCloudUpload } from "react-icons/io5";
import './sidebar.css';
import SignLogo from "../../assets/images/logo.jpg";
import { MdDashboardCustomize } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoPlus } from "react-icons/go";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaJediOrder, FaUserSecret } from "react-icons/fa6";
const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
    const location = useLocation(); // to get the current URL path
    const [activePath, setActivePath] = useState('');

    useEffect(() => {
        // Update activePath whenever the location changes
        setActivePath(location.pathname);
    }, [location]);


    return (
        <nav id="sidebar" className={sidebarOpen ? "active" : ""}>
            <div className="custom-menu">
                <button type="button" id="closeSidebar" onClick={toggleSidebar}>
                    <IoClose />
                </button>
            </div>

            <div className="py-2">
                <div className="my-2">
                    <Link to="/dashboard">
                        <img className='sidebar-logo' src={SignLogo} alt="logo" />
                    </Link>
                </div>

                <ul className="list-unstyled components mb-5">
                    <li className={activePath === '/dashboard/admin' ? 'active-sidebar' : ''}>
                        <Link to="/dashboard/admin">
                            <MdDashboardCustomize className="mr-3" /> Dashboard
                        </Link>
                    </li>
                    <li className={activePath === '/dashboard/admin/products' ? 'active-sidebar' : ''}>
                        <Link to="/dashboard/admin/products">
                            <MdProductionQuantityLimits className="mr-3" /> Products
                        </Link>
                    </li>
                    <li className={activePath === '/dashboard/admin/upload-products' ? 'active-sidebar' : ''}>
                        <Link to="/dashboard/admin/upload-products">
                            <IoCloudUpload className="me-2" />Upload
                        </Link>
                    </li>
                    <li className={activePath === '/dashboard/admin/orders' ? 'active-sidebar' : ''}>
                        <Link to="/dashboard/admin/orders">
                            <FaJediOrder className="mr-3" />  Orders
                        </Link>
                    </li>
                    <li className={activePath === '/dashboard/admin/users' ? 'active-sidebar' : ''}>
                        <Link to="/dashboard/admin/users">
                            <FaUserSecret className="mr-3" />   Users
                        </Link>
                    </li>

                    <li className={activePath === '/dashboard/admin/profile' ? 'active-sidebar' : ''}>
                        <Link to="/dashboard/admin/profile">
                            <CgProfile className="mr-3" />  Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
