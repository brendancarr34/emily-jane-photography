import React, { useContext, useState, useRef, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import { IoCartOutline } from 'react-icons/io5';
import { BsCart } from 'react-icons/bs';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { RiShoppingCartLine } from 'react-icons/ri';
import image1 from '../resources/1.png';


const Menu = ({ logoOverride }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const { cart } = useContext(CartContext);
    const dropdownRef = useRef(null);

    const [navBarBrandColor, setNavBarBrandColor] = useState('white');

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (!dropdownVisible) {
            // Delay the color change slightly to ensure the dropdown is fully closed
            const timeout = setTimeout(() => {
                setNavBarBrandColor('white');
            }, 300); // Adjust the delay as needed
            return () => clearTimeout(timeout);
        } else {
            setNavBarBrandColor('transparent');
        }
    }, [dropdownVisible]);

    return (
    <Navbar style={{ backgroundColor: 'rgba(0,0,0,0)', boxShadow: 'none' }} variant="dark" expand={false} fixed="top">
            <Container fluid style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '40px', paddingRight: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        style={{
                            display: window.innerWidth < 350 ? 'none' : 'inline',
                            margin: '24px 0 0 24px', // top and left margin equal
                            padding: 0
                        }}
                        display={dropdownVisible ? 'none' : 'inline'}
                    >
                        <img 
                            src={logoOverride ? logoOverride : image1} 
                            alt="Emily Jane Photography Logo" 
                            style={{ height: '100px', width: 'auto', objectFit: 'contain', display: 'block' }} 
                        />
                    </Navbar.Brand>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={() => setDropdownVisible(!dropdownVisible)}
                        style={{
                            border: 'none',
                            borderColor: 'transparent',
                            backgroundColor: 'transparent',
                            color: 'black',
                        }}
                    >
                        <span style={{ backgroundColor: 'black', display: 'block', height: '2px', margin: '4px 0', width: '20px' }}></span>
                        <span style={{ backgroundColor: 'black', display: 'block', height: '2px', margin: '4px 0', width: '20px' }}></span>
                        <span style={{ backgroundColor: 'black', display: 'block', height: '2px', margin: '4px 0', width: '20px' }}></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        in={dropdownVisible}
                        style={{ color: 'black' }}
                        ref={dropdownRef}
                    >
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/collection" style={{ color: 'black', marginTop: '20px' }}>
                                Gallery
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about" style={{ color: 'black' }}>
                                About Me
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        <Nav.Link as={Link} to="/cart" style={{ color: 'black' }}>
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                {cart.length > 0 && (
                                    <Badge bg="light" text="dark">
                                        {cart.reduce((total, item) => total + Number(item.quantity), 0)}
                                    </Badge>
                                )}
                                <HiOutlineShoppingCart size={26} style={{ marginLeft: '4px', color: 'black' }} />
                            </span>
                        </Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );

};

export default Menu;
