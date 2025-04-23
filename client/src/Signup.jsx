import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css'; // Create a separate CSS file for signup styles

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                
                // Store user info locally (exclude password)
                localStorage.setItem("userProfile", JSON.stringify({ name, email }));
                
                navigate('/user-profile'); // Redirect to profile page
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container-fluid signup-bg d-flex justify-content-center align-items-center vh-100 p-3">
            <div className="signup-box bg-white shadow rounded p-4">
                <h2 className="text-center mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    <button type="submit" className="btn btn-success w-100">
                        Register
                    </button>
                </form>
                <p className="mt-3 text-center">Already have an account?</p>
                <Link
                    to="/login"
                    className="btn btn-outline-secondary w-100 text-decoration-none"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;

