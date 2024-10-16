import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Welcome from './components/Welcome';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/welcome" element={<Welcome />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;