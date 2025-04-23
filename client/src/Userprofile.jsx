import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css'; // Make sure to create a CSS file for custom styling
import userlogo from './assets/Myprofile.png';

function UserProfile() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Load user profile from localStorage
    useEffect(() => {
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        if (userProfile) {
            setUser(userProfile);
        } else {
            navigate('/login'); // If no user profile, redirect to login page
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("userProfile"); // Remove user from localStorage
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="container user-profile-bg d-flex justify-content-center align-items-center vh-100 p-3">
            <div className="profile-box bg-white shadow rounded p-5 w-100 max-w-600">
                <div className="text-center mb-4">
                    <img
                        src={userlogo} // Placeholder for user avatar
                        alt="User Avatar"
                        className="rounded-circle mb-3"
                        style={{ width: "120px", height: "120px" }}
                    />
                    <h2>{user?.name}</h2>
                    <p className="text-muted">{user?.email}</p>
                </div>

                <div className="profile-details mb-4">
                    <h5><strong>Account Details</strong></h5>
                    <div className="list-group">
                        <div className="list-group-item">
                            <strong>Name:</strong> {user?.name}
                        </div>
                        <div className="list-group-item">
                            <strong>Email:</strong> {user?.email}
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between mt-4">
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => navigate('/')}
                    >
                        Go Back to Homepage
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;

