import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const role = 'USER';
            const response = await axios.post('http://localhost:8080/api/auth/signup', {
                firstName,
                lastName,
                email,
                password,
                role,
            });
            setMessage('Signup successful! Please sign in.');
            setTimeout(() => {
                navigate('/signin');
            }, 2000);
        } catch (error) {
            setMessage('Signup failed. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h2>Sign Up for MyCorsa</h2>
                <p>Enjoy a seamless experience managing your stay with us.</p>
            </div>
            <form onSubmit={handleSignup}>
                <div className="mb-3">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/')}>
                    Go Back
                </button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default Signup;
