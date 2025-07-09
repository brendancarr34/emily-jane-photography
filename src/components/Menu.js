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

const Menu = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const { cart } = useContext(CartContext);
    const dropdownRef = useRef(null);

    const [navBarBrandColor, setNavBarBrandColor] = useState('black');

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
                setNavBarBrandColor('black');
            }, 300); // Adjust the delay as needed
            return () => clearTimeout(timeout);
        } else {
            setNavBarBrandColor('transparent');
        }
    }, [dropdownVisible]);

    return (
        <Navbar style={{ backgroundColor: '#A7C7E7' }} variant="dark" expand={false} fixed="top">
            <Container>
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

                <Navbar.Brand
                    as={Link}
                    to="/"
                    style={{
                        transform: 'scaleX(1.4)',
                        fontSize: 'clamp(0.8rem, 2vw, 1.5rem)',
                        fontWeight: '600',
                        letterSpacing: '-1px',
                        wordSpacing: 'clamp(0px, 1vw, 6px)',
                        display: window.innerWidth < 350 ? 'none' : 'inline',
                        color: navBarBrandColor,
                    }}
                    display={dropdownVisible ? 'none' : 'inline'}
                >
                    EMILY JANE PHOTOGRAPHY
                </Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/cart" style={{ color: 'black' }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            {cart.length > 0 && (
                                <Badge bg="light" text="dark">
                                    {cart.reduce((total, item) => total + Number(item.quantity), 0)}
                                </Badge>
                            )}
                            <HiOutlineShoppingCart size={26} style={{ marginLeft: '6px', color: 'black' }} />
                        </span>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );

};

export default Menu;
