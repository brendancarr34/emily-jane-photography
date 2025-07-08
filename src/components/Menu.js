import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [dropdownVisible, setDropdownVisible] = React.useState(false);


    const menuStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#A7C7E7',
        color: 'black',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
    };

    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
        fontSize: '1.2rem',
    };

    const { cart } = useContext(CartContext);

    return (
        <nav style={menuStyle}>
            <div style={{ position: 'relative' }}>
                <button
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'black',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                    }}
                    onClick={() => setDropdownVisible(!dropdownVisible)}
                >
                    &#9776;
                </button>
                {dropdownVisible && (
                    <div
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            backgroundColor: '#A7C7E7',
                            color: 'white',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                            borderRadius: '4px',
                            overflow: 'hidden',
                        }}
                    >
                        <Link
                            to="/collection"
                            style={{
                                display: 'block',
                                padding: '10px 20px',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            Gallery
                        </Link>
                        <Link
                            to="/about"
                            style={{
                                display: 'block',
                                padding: '10px 20px',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            About Me
                        </Link>
                    </div>
                )}
            </div>
            <Link to="/" style={linkStyle}>Emily Jane Photography</Link>
            <Link to="/cart" style={linkStyle}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="black"
                        viewBox="0 0 24 24"
                        style={{ marginRight: '2px' }}
                    >
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7.16 4.26L6.1 2H1v2h3.6l3.59 7.59-1.35 2.44C6.52 14.37 7 15.13 7 16h12v-2H7.42c-.14-.31-.22-.65-.22-1 0-.13.02-.26.05-.39l1.1-1.96h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49-1.74-1.01L16.16 8H8.53l-.37-.74z" />
                    </svg>
                    {cart.length > 0 ? `(${cart.reduce((total, item) => total + Number(item.quantity), 0)})` : ''}
                </span>
            </Link>
        </nav>
    );
};

export default Menu;