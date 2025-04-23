import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // You can create a separate CSS file for custom styles

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log("Login result:", result.data);
                if (result.data === "Success") {
                    navigate('/user-profile');
                } else {
                    alert("Login failed: " + result.data);
                }
            })
            .catch(err => {
                console.error("Login error:", err);
                alert("Login error: " + (err.response?.data || "Unknown error"));
            });
    };

    return (
        <div className="container-fluid login-bg d-flex justify-content-center align-items-center vh-100 p-3">
            <div className="login-box bg-white shadow rounded p-4">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">
                        Login
                    </button>
                </form>
                <p className="text-center mb-2">Don't have an account?</p>
                <Link
                    to="/register"
                    className="btn btn-outline-secondary w-100"
                >
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default Login;

