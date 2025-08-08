import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from '../components/Menu';

const OrderPlaced = () => {
    const location = useLocation();
    const confirmationCode = localStorage.getItem('confirmationCode') || '';
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo')) || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log('OrderPlaced location:', location);

    if (!confirmationCode) {
        return (
            <div className="cart-wrapper d-flex flex-column" style={{ minHeight: '100vh' }}>
                <Menu />
                <Container className="order-placed-container text-center">
                    <h1>Order Confirmation</h1>
                    <p>No order data available. Please try again.</p>
                </Container>
                <footer style={{
                    marginTop: 'auto',
                    width: '100%',
                    backgroundColor: '#A7C7E7',
                    padding: '30px',
                    textAlign: 'center',
                }}>
                    <p style={{ margin: 0 }}>© 2025 Emily Jane Photography</p>
                </footer>
            </div>
        );
    }

    return (
        <div className="cart-wrapper d-flex flex-column" style={{ minHeight: '100vh' }}>
            <Menu />
            <br />
            <br />
            <br />
            <Container>
                <div className="order-placed-container text-center" style={{ margin: '20px 0' }}>
                    <h6 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4A4A4A' }}>Thank You for Your Order!</h6>
                    <p style={{ fontSize: '1.2rem', color: '#6C757D' }}>Your order has been successfully placed.</p>
                    <p style={{ fontSize: '1.2rem', color: '#6C757D' }}>Confirmation Code:
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4A4A4A' }}>
                            {confirmationCode}
                        </p>
                    </p>
                </div>
                <Container className="shipping-details-container" style={{ padding: '30px', borderRadius: '15px', backgroundColor: '#F8F9FA', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '30px' }}>
                    <Row className="order-details-container">
                        <Col md={6} className="order-details-column" style={{ marginBottom: '20px' }}>
                            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4A4A4A' }}>Shipping Information</h2>
                            <p style={{ fontSize: '1rem', color: '#6C757D' }}>
                                {shippingInfo.firstName} {shippingInfo.lastName}
                                <br />
                                {shippingInfo.address}{shippingInfo.addressLine2 && `, ${shippingInfo.addressLine2}`}
                                <br />
                                {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
                            </p>
                        </Col>
                        <Col md={6} className="order-details-column">
                            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4A4A4A' }}>Order Items</h2>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {items.map((item, index) => (
                                    <li key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #E9ECEF', paddingBottom: '10px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img src={item.url} alt={item.title} style={{ maxWidth: '80px', marginRight: '15px', borderRadius: '8px' }} />
                                            <div>
                                                <p style={{ margin: 0, fontWeight: 'bold', color: '#4A4A4A' }}>{item.title}</p>
                                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#6C757D' }}>
                                                    Quantity: {item.quantity} | Price: ${item.price.toFixed(2)}
                                                </p>
                                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#6C757D' }}>
                                                    Size: {item.size}, Border: {item.borderSize}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <footer style={{
                marginTop: 'auto',
                width: '100%',
                backgroundColor: '#A7C7E7',
                padding: '30px',
                textAlign: 'center',
                fontSize: '1rem',
            }}>
                <p style={{ margin: 0 }}>© 2025 Emily Jane Photography</p>
            </footer>
        </div>
    );
};

export default OrderPlaced;
