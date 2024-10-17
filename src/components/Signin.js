import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/signin', {
                email,
                password,
            });
            localStorage.setItem('token', response.data.token);
            navigate('/welcome');
        } catch (error) {
            setError('Invalid email or password. Please try again.');
        }
    };

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <div className="header">
                <h2>Sign In to MyCorsa</h2>
                <p>Access your account and manage your stay effortlessly.</p>
            </div>
            <form onSubmit={handleSignin}>
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
                <button type="submit" className="btn btn-primary">Sign In</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={handleGoBack}>
                    Go Back
                </button>
            </form>
            {error && <p className="message text-danger">{error}</p>}
        </div>
    );
};

export default Signin;
