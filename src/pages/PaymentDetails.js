import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../components/CartContext';
import CheckoutForm from '../components/CheckoutForm';
import { Container } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51RjD0j4D8otUS7OmQQu572zrdNeoO8tuDFfb24l9aBS4ILcHfDTSAMZtdW76q7kuKxi3NoSrbG0qIUoHfHgkw67900MKIW3Yo0');

const PaymentDetails = () => {
    const { shippingInfo, total, cart, updateCartDetails } = useContext(CartContext);
    const [clientSecret, setClientSecret] = useState('');
    const [useDifferentBilling, setUseDifferentBilling] = useState(false);
    const [billingInfo, setBillingInfo] = useState(shippingInfo || {
        firstName: '',
        lastName: '',
        address: '',
        email: '',
    });

        const handleOrder = async () => {
        console.log('Placing order with data:', billingInfo);
        const orderData = {
            customerName: clientSecret.slice(0, 28), // Example: using clientSecret as customer name
            item: decodeURIComponent(cart[0].title), // Assuming the first item in the cart is the one to order
            address: billingInfo.address,
            email: billingInfo.email,
            addressLine2: billingInfo.addressLine2,
            city: billingInfo.city,
            state: billingInfo.state,
            zipCode: billingInfo.zipCode,
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


    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        updateCartDetails({ [name]: value });
    };

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

    const billingData = useDifferentBilling ? billingInfo : shippingInfo;

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={useDifferentBilling}
                    onChange={() => setUseDifferentBilling((v) => !v)}
                />
                Use different billing info
            </label>
            {useDifferentBilling && (
                <p>
                    {/* Billing fields */}
                </p>
            )}
            <Container>
                <h2 style={{ margin: '15px 0', width: '100%', textAlign: 'center' }}>Checkout</h2>

                {clientSecret ? (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm
                            billingData={billingData}
                            handleChange={handleChange}
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
    );
};

export default PaymentDetails;