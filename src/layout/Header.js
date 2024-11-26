import React, { useState, useEffect } from 'react';
import './layout.style.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('userDetails'));
        if (user) {
            setUserName(user.firstName); 
        }
    }, []);

    const handleLogout = () => {
        navigate('/'); 
        alert("Logout successfully")
    };
console.log(userName,"userName")
    return (
        <header className="header">
            <div className="header-logo">
                <img
                    src="https://via.placeholder.com/50x50.png?text=Logo"
                    alt="E-Commerce Logo"
                    className="logo-image"
                />
                <span className="logo-text">ShopEase</span>
            </div>

            <nav className="header-navigation">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            <div className="header-right">
                <div className="header-profile">
                    <img
                        src="https://via.placeholder.com/40x40"
                        alt="User Avatar"
                        className="profile-avatar"
                    />
                    {userName ? (
                        <span className="profile-name">{userName}</span>
                    ) : (
                        <span className="profile-name">Guest</span>
                    )}
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
