import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('USER');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleGoBack  = () => {
        navigate('/');
    };

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
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
                <button type="button" onClick={handleGoBack}>Go back to the main page</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Signup;
