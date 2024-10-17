import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token');
        navigate('/signin');
    };

    return (
        <div className="container text-center">
            <h2>Welcome to MyCorsa</h2>
            <p>We're happy to assist you during your stay!</p>
            <button className="btn btn-danger" onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default Welcome;
