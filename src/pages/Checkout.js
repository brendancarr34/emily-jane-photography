import React, { useState, useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { CartContext } from '../components/CartContext';
import Menu from '../components/Menu';
import CheckoutForm from '../components/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51RjD0j4D8otUS7OmQQu572zrdNeoO8tuDFfb24l9aBS4ILcHfDTSAMZtdW76q7kuKxi3NoSrbG0qIUoHfHgkw67900MKIW3Yo0');

const Checkout = () => {
    const { cart, total, updateCartDetails } = useContext(CartContext);
    const [clientSecret, setClientSecret] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
    });

    const handleOrder = async () => {
        console.log('Placing order with data:', formData);
        const orderData = {
            customerName: clientSecret.slice(0, 28), // Example: using clientSecret as customer name
            item: decodeURIComponent(cart[0].title), // Assuming the first item in the cart is the one to order
            address: formData.address,
            email: formData.email,
            addressLine2: formData.addressLine2,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
            quantity: 1, // Replace with actual quantity
            price: 100 // Replace with actual price
        };

        try {
            const response = await fetch('https://superbowl-squares-api-2-637010006131.us-central1.run.app/api/ejt-photography/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });
            const data = await response.json();
            if (response.ok) {
                alert(`Order placed successfully: ${data.message}`);
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Error placing order. Please try again.');
        }
    };

    useEffect(() => {

        if (cart && cart.length > 0) {
            const firstItem = cart[0];
            setFormData((prevData) => ({
                ...prevData,
                firstName: prevData.firstName || firstItem.firstName || '',
                lastName: prevData.lastName || firstItem.lastName || '',
                address: prevData.address || firstItem.address || '',
                email: prevData.email || firstItem.email || '',
                addressLine2: prevData.addressLine2 || firstItem.addressLine2 || '',
                city: prevData.city || firstItem.city || '',
                state: prevData.state || firstItem.state || '',
                zipCode: prevData.zipCode || firstItem.zipCode || '',
            }));
        }
    }, [cart]);

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
                alert('Error processing payment. Please try again.');
            }
        };

        if (total > 0) {
            console.log('Total amount for payment intent:', total);
            createPaymentIntent(); // Call the function to create the payment intent
        }
    }, [total]); // Run this effect whenever the total changes


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        updateCartDetails({ [name]: value });
    };

    return (
        // <Elements stripe={stripePromise} options={{ clientSecret }}>
            <div>
                <Menu />
                <br />
                <br />
                <br />
                <Container>
                    <h2 style={{ margin: '15px 0', width: '100%', textAlign: 'center' }}>Checkout</h2>
                    
                    {clientSecret ? (
                        <Elements stripe={stripePromise} options={{ clientSecret }}>
                            <CheckoutForm
                                formData={formData}
                                handleChange={handleChange}
                                // handleSubmit={handleSubmit}
                                handleOrder={handleOrder}
                                clientSecret={clientSecret}
                            />
                        </Elements>
                    ) : (
                        <div className="text-center">
                            <h4>Loading payment options...</h4>
                        </div>
                    )}
                    
                </Container>
            </div>
        // </Elements>
    );
};

export default Checkout;