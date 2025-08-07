import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import CheckoutForm from '../components/CheckoutForm';
import { Container } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Menu from '../components/Menu';

const stripePromise = loadStripe('pk_test_51RjD0j4D8otUS7OmQQu572zrdNeoO8tuDFfb24l9aBS4ILcHfDTSAMZtdW76q7kuKxi3NoSrbG0qIUoHfHgkw67900MKIW3Yo0');

const PaymentDetails = () => {
    const { total, shippingInfo, cart } = useContext(CartContext);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                console.log('Creating payment intent with total:', total);

                const response = await fetch('https://superbowl-squares-api-2-637010006131.us-central1.run.app/api/ejt-photography/create-payment-intent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        amount: total * 100, // Replace with actual amount in cents
                        currency: 'usd',
                    }),
                });

                const data = await response.json();

                if (!data.clientSecret) {
                    throw new Error('Failed to create payment intent.');
                }

                console.log('clientSecret:', data.clientSecret);
                setClientSecret(data.clientSecret); // Set the clientSecret in state
            } catch (error) {
                console.error('Error creating payment intent:', error);
                alert('Error connecting to Stripe. Please try again.');
            }
        };

        if (total > 0) {
            createPaymentIntent();
        }
    }, [total]);

    return (
        <div className="cart-wrapper d-flex flex-column" style={{ minHeight: '100vh' }}>
            <Menu />
            <br />
            <br />
            <br />
            <Container style={{ padding: '20px', borderRadius: '15px', backgroundColor: '#f8f9fa', marginBottom: '20px' }}>
                <h2 style={{ margin: '0px 0px 20px 0px', width: '100%', textAlign: 'center' }}>Order Details</h2>
                <div style={{ marginBottom: '20px' }}>
                    <strong>Email:</strong>
                    <span style={{ marginLeft: '10px' }}>{shippingInfo.email}</span>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <strong>Shipping Info:</strong>
                    <div style={{ marginTop: '5px' }}>
                        <div>{shippingInfo.firstName} {shippingInfo.lastName}</div>
                        <div>{shippingInfo.address} {shippingInfo.addressLine2 && `, ${shippingInfo.addressLine2}`}</div>
                        <div>{`${shippingInfo.city}, ${shippingInfo.state} ${shippingInfo.zipCode}`}</div>
                    </div>
                </div>
                <div>
                    <strong>Cart:</strong>
                    <ul>
                        {/* Replace with actual cart items from context */}
                        {cart.map(item => (
                            <li key={item.id}>
                                {item.title} ({item.size}) - {item.quantity} x ${item.price}
                            </li>
                        ))}
                    </ul>
                    <div>
                        <strong>Total:</strong> ${total}
                    </div>
                </div>
            </Container>
            <Container style={{ padding: '20px', borderRadius: '15px', backgroundColor: '#f8f9fa', marginBottom: '20px' }}>
                <h2 style={{ margin: '0px 0px 20px 0px', width: '100%', textAlign: 'center' }}>Checkout</h2>

                {clientSecret ? (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm clientSecret={clientSecret} />
                    </Elements>
                ) : (
                    <div className="text-center">
                        <h4>Loading payment options...</h4>
                    </div>
                )}
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
};

export default PaymentDetails;