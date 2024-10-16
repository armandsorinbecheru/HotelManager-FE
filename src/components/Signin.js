import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleGoBack  = () => {
        navigate('/');
    };

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

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSignin}>
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
                <button type="submit">Sign In</button>
                <button type="button" onClick={handleGoBack}>Go back to the main page</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Signin;
