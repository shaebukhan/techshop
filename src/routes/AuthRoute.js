import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Loader from './Loader';

// Shows loader and handles redirection logic
const RedirectWithLoader = ({ countdown, redirectTo }) => {
    const [timer, setTimer] = useState(countdown);

    useEffect(() => {
        if (timer > 0) {
            const timerId = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(timerId); // Clean up the timeout on unmount
        }
    }, [timer]);

    return (
        <div style={{ height: '100vh' }} className="d-flex flex-column align-items-center justify-content-center">
            <Loader />

            {timer === 0 && <Navigate to={redirectTo} replace />} {/* Redirect when countdown reaches 0 */}
        </div>
    );
};

// Protects routes from unauthorized access (checks if logged in)
const PrivateRoute = ({ children }) => {
    const token = Cookies.get('token');

    if (!token) {
        return <RedirectWithLoader countdown={5} redirectTo="/login" />; // Show loader and redirect to login after countdown
    }

    return children; // If logged in, allow access
};

// Blocks access to login and register pages if already logged in (for public routes like login/register)
const PublicRoute = ({ children }) => {
    const token = Cookies.get('token'); // Check if token exists
    const authData = Cookies.get('auth');            // Get authentication details
    if (token && authData) {
        // Parse the auth data to get user role
        const parsedAuthData = JSON.parse(authData);
        const role = parsedAuthData?.user?.role;


        if (role === 1) {
            return <RedirectWithLoader countdown={5} redirectTo="/dashboard/admin" />; // Admin user, redirect to admin dashboard
        }

        if (role === 0) {
            return <RedirectWithLoader countdown={5} redirectTo="/dashboard/user" />; // Regular user, redirect to user dashboard
        }
    }

    return children; // If not logged in, allow access to public pages
};

// AdminRoute: If not logged in or not admin, show loader and redirect
const AdminRoute = ({ children }) => {
    const token = Cookies.get('token'); // Get authentication token
    const authData = Cookies.get('auth'); // Get auth data from cookies

    if (!token || !authData) {
        return <RedirectWithLoader countdown={5} redirectTo="/login" />; // Show loader and redirect to login if not authenticated
    }

    const parsedAuthData = JSON.parse(authData);
    const role = parsedAuthData?.user?.role;

    if (role !== 1) {
        return <RedirectWithLoader countdown={5} redirectTo="/dashboard/user" />; // Show loader and redirect to user dashboard if not an admin
    }

    return children; // If logged in as admin, allow access
};


export { PrivateRoute, PublicRoute, AdminRoute };
