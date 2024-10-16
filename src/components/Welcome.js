import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/signin');
        }
    }, [navigate]);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div>
            <h2>It worked!!</h2>
            <p>You are signed in.</p>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default Welcome;
