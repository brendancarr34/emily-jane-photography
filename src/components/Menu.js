import React, { useContext, useState, useRef, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, Dropdown } from 'react-bootstrap';
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

    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
    <Navbar style={{ backgroundColor: 'rgba(0,0,0,0)', boxShadow: 'none' }} variant="dark" expand={false}>
            <Container fluid
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    flexWrap: 'wrap',
                }}>
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        style={{
                            display: window.innerWidth < 350 ? 'none' : 'inline',
                            margin: '24px 0 0 0', // Remove left margin to move logo fully left
                            padding: 0
                        }}
                    >
                        <img
                            src={logoOverride ? logoOverride : image1}
                            alt="Emily Jane Photography Logo"
                            style={{ height: '100px', width: 'auto', objectFit: 'contain', display: 'block' }}
                        />
                    </Navbar.Brand>
                </div>
                {isMobile ? (
                    <Dropdown align="end">
                        <Dropdown.Toggle 
                            variant="light" 
                            id="dropdown-basic" 
                            style={{ 
                                background: '#a2a02c', 
                                color: '#fff', 
                                border: '1px solid #a2a02c', 
                                fontFamily: 'Inter, sans-serif', 
                                fontWeight: 800, 
                                fontSize: '1.1rem', 
                                letterSpacing: '-1px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                                borderRadius: 8,
                                padding: '8px 24px',
                                // make background of button see through
                                backgroundColor: 'rgba(162, 160, 44, 0.4)',
                                marginTop: '24px',
                            }}
                        >
                            Menu
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 180, background: '#222', color: 'white', fontFamily: 'Inter, sans-serif' }}>
                            <Dropdown.Item as={Link} to="/" style={{ color: 'white' }}>Home</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/collection" style={{ color: 'white' }}>Gallery</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/portfolio" style={{ color: 'white' }}>Portfolio</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/about" style={{ color: 'white' }}>About Me</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/cart" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    {cart.length > 0 && (
                                        <Badge bg="light" text="dark">
                                            {cart.reduce((total, item) => total + Number(item.quantity), 0)}
                                        </Badge>
                                    )}
                                    <HiOutlineShoppingCart size={22} style={{ marginLeft: '4px', color: 'white' }} />
                                </span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                ) : (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '32px',
                            flex: 1,
                            justifyContent: 'flex-end',
                            marginTop: '24px',
                        }}
                    >
                        <Nav.Link as={Link} to="/" style={{ color: 'white', fontWeight: 600, fontSize: '1.15rem', fontFamily: 'Montserrat, Inter, Arial, sans-serif', letterSpacing: '1px' }}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/collection" style={{ color: 'white', fontWeight: 600, fontSize: '1.15rem', fontFamily: 'Montserrat, Inter, Arial, sans-serif', letterSpacing: '1px' }}>
                            Gallery
                        </Nav.Link>
                        <Nav.Link as={Link} to="/portfolio" style={{ color: 'white', fontWeight: 600, fontSize: '1.15rem', fontFamily: 'Montserrat, Inter, Arial, sans-serif', letterSpacing: '1px' }}>
                            Portfolio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" style={{ color: 'white', fontWeight: 600, fontSize: '1.15rem', fontFamily: 'Montserrat, Inter, Arial, sans-serif', letterSpacing: '1px' }}>
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/cart" style={{ color: 'white', fontWeight: 600, fontSize: '1.15rem', fontFamily: 'Montserrat, Inter, Arial, sans-serif', letterSpacing: '1px', display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                {cart.length > 0 && (
                                    <Badge bg="light" text="dark">
                                        {cart.reduce((total, item) => total + Number(item.quantity), 0)}
                                    </Badge>
                                )}
                                <HiOutlineShoppingCart size={26} style={{ marginLeft: '4px', color: 'white' }} />
                            </span>
                        </Nav.Link>
                    </div>
                )}
            </Container>
        </Navbar>
    );

};

export default Menu;
