import React from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../components/Menu';

const OrderPlaced = () => {
    const location = useLocation();
    const confirmationCode = localStorage.getItem('confirmationCode') || '';
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo')) || {};

    console.log('OrderPlaced location:', location);

    if (!confirmationCode) {
        return (
            <div className="cart-wrapper d-flex flex-column" style={{ minHeight: '100vh' }}>
                <Menu />
                <div className="order-placed-container">
                    <h1>Order Confirmation</h1>
                    <p>No order data available. Please try again.</p>
                </div>
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
            <div className="order-placed-container">
                <h1>Thank You for Your Order!</h1>
                <p>Your order has been successfully placed.</p>
                <p>
                    <strong>Confirmation Code:</strong> {confirmationCode}
                </p>
                <p>
                    <strong>Order Details:</strong>
                </p>
                <p>
                    <strong>Name:</strong> {shippingInfo.firstName} {shippingInfo.lastName}
                    <br />
                    <strong>Shipping Address:</strong> {shippingInfo.address}
                    <br />
                    <strong>City:</strong> {shippingInfo.city}
                    <br />
                    <strong>State:</strong> {shippingInfo.state}
                    <br />
                    <strong>Zip Code:</strong> {shippingInfo.zipCode}
                </p>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {item.title} - Quantity: {item.quantity}
                            <br />
                            <strong>Price:</strong> ${item.price.toFixed(2)}
                            <br />
                            <p>{item.url}</p>
                            <strong>Image:</strong> <img src={item.url} alt={item.title} style={{ maxWidth: '100px' }} />
                            <br />
                            <strong>Size:</strong> {item.size}, <strong>Border:</strong> {item.borderSize}
                            <br />
                        </li>
                    ))}
                </ul>
            </div>
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
};

export default OrderPlaced;