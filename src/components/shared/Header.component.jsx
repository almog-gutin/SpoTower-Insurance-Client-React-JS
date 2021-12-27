import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const redirectToHome = () => navigate('/');

    return (
        <header className="main-header" onClick={redirectToHome}>
            <h1>SpoTower Assignment</h1>
        </header>
    );
};

export default Header;
