import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const menuStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: 'white',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.2rem',
    };

    return (
        <nav style={menuStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/collection" style={linkStyle}>Collection</Link>
        </nav>
    );
};

export default Menu;