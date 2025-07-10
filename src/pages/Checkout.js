import React, { useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { CartContext } from '../components/CartContext';
import Menu from '../components/Menu';
import CheckoutForm from '../components/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51RjD0j4D8otUS7OmQQu572zrdNeoO8tuDFfb24l9aBS4ILcHfDTSAMZtdW76q7kuKxi3NoSrbG0qIUoHfHgkw67900MKIW3Yo0');
const Checkout = () => {
    const { cart, total, updateCartDetails } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
    });


    const handleOrder = async () => {

        console.log('Placing order with data:', formData);
        const orderData = {
            customerName: formData.firstName,
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
            const response = await fetch('http://localhost:3001/api/ejt-photography/orders', {
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

    React.useEffect(() => {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        updateCartDetails({ [name]: value });
    };

    const handleSubmit = async (e) => {
        console.log('Form submitted with data:', formData);
        // e.preventDefault();

        // try {
        //     // Create a payment intent on your server
        //     const response = await fetch('/api/create-payment-intent', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             amount: 10000, // Replace with actual amount in cents
        //             currency: 'usd',
        //         }),
        //     });

        //     const { clientSecret } = await response.json();

        //     if (!clientSecret) {
        //         throw new Error('Failed to create payment intent.');
        //     }

        //     // Redirect user to Stripe's payment flow (handled in CheckoutForm)
        //     alert('Payment intent created successfully. Proceed to payment.');
        // } catch (error) {
        //     console.error('Error creating payment intent:', error);
        //     alert('Error processing payment. Please try again.');
        // }

        try {
            // Create a payment intent on your server
            console.log('Creating payment intent with form data:', formData);
            const response = await fetch('http://localhost:3001/api/ejt-photography/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: total * 100, // Replace with actual amount in cents
                    currency: 'usd',
                }),
            });

            const { clientSecret } = await response.json();

            if (!clientSecret) {
                throw new Error('Failed to create payment intent.');
            }

            // Redirect user to Stripe's payment flow (handled in CheckoutForm)
            alert('Payment intent created successfully. Proceed to payment.');
        } catch (error) {
            console.error('Error creating payment intent:', error);
            // alert('Error processing payment. Please try again.');
        }

        // alert('Checkout details updated!');
    };

    return (
        <Elements stripe={stripePromise}>
            <div>
                <Menu />
                <br />
                <br />
                <br />
                <Container>
                    <h2 style={{ margin: '15px 0', width: '100%', textAlign: 'center' }}>Checkout</h2>
                    <CheckoutForm
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleOrder={handleOrder}
                    />
                </Container>
            </div>
        </Elements>
    );
};

export default Checkout;