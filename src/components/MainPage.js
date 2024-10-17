// src/components/MainPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className="container text-center">
            <h1>Welcome to MyCorsa</h1>
            <p>Manage your stay at the seaside with ease</p>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary mx-2" onClick={() => navigate('/signup')}>
                    Sign Up
                </button>
                <button className="btn btn-secondary mx-2" onClick={() => navigate('/signin')}>
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default MainPage;
