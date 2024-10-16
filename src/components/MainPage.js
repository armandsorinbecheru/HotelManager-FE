import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Welcome to MyCorsa</h2>
            <p>Please choose an action:</p>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
            <button onClick={() => navigate('/signin')}>Sign In</button>
        </div>
    );
};

export default MainPage;
