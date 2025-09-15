import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CartContext } from '../components/CartContext';
import { Form, Button } from 'react-bootstrap';

const CheckoutForm = ({
    clientSecret,
}) => {

    const { total, clearCart, shippingInfo, cart } = useContext(CartContext);

    const stripe = useStripe();
    const elements = useElements();
    const [billingInfo, setBillingInfo] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleOrder = async (shippingInfo, confirmationCode) => {
        console.log('Placing order with shipping data:', shippingInfo);
        const orderData = {
            id: clientSecret.slice(0, 27),
            customerName: shippingInfo.firstName + ' ' + shippingInfo.lastName,
            item: cart,
            address: shippingInfo.address,
            email: shippingInfo.email,
            addressLine2: shippingInfo.addressLine2,
            city: shippingInfo.city,
            state: shippingInfo.state,
            zipCode: shippingInfo.zipCode,
            quantity: cart.length,
            price: total,
            confirmationCode: confirmationCode
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
                // alert(`Order placed successfully: ${data.message}`);
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Error placing order. Please try again.');
        }
    };


    const [billingDataSameAsShipping, setBillingDataSameAsShipping] = useState(true);

    useEffect(() => {
        setPaymentData(billingDataSameAsShipping ? shippingInfo : billingInfo);
    }, [billingDataSameAsShipping, shippingInfo, billingInfo]);

    const [paymentData, setPaymentData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
    });

    // const paymentData = billingDataSameAsShipping ? shippingInfo : billingInfo;

    const handlePayment = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            alert('Stripe has not loaded yet.');
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: `${paymentData.firstName} ${paymentData.lastName}`,
                    email: paymentData.email,
                    address: {
                        line1: paymentData.address,
                        city: paymentData.city,
                        state: paymentData.state,
                        postal_code: paymentData.zipCode,
                    },
                },
            },
        });

        if (error) {
            console.error('Payment error:', error);
            alert('Payment failed. Please try again.');
        } else if (paymentIntent.status === 'succeeded') {
            // alert('Payment successful!');
            // create confirmation code
            const confirmationCode = Math.random().toString(36).substring(2, 15).toUpperCase();
            console.log('Confirmation Code:', confirmationCode);
            // alert(`Your confirmation code is: ${confirmationCode}`);
            // Pass shippingInfo to handleOrder if needed
            handleOrder(shippingInfo, confirmationCode);

            // Redirect to order placed page and pass shippingInfo and confirmationCode
            console.log('Redirecting to order placed page with confirmation code:', confirmationCode);
            // Store confirmationCode and items in localStorage
            localStorage.setItem('confirmationCode', confirmationCode);
            localStorage.setItem('cartItems', JSON.stringify(cart));
            localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));

            // Redirect to order placed page
            window.location.href = '/emily-jane-photography/#/order-placed';

            // Clear the cart after successful payment
            console.log('Clearing cart after successful payment');
            clearCart();
        }
    };

    return (
        <div>
            {clientSecret ? (
                <Form onSubmit={handlePayment}>
                    <Form.Group style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ flex: 1 }}>
                            <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Card Holder First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={billingInfo.firstName || ''}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Card Holder Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={billingInfo.lastName || ''}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formCardElement" style={{ marginBottom: '20px' }}>
                        <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Credit or Debit Card</Form.Label>
                        <div style={{ padding: '10px', border: '1px solid #ced4da', borderRadius: '4px' }}>
                            <CardElement options={{ hidePostalCode: true }} />
                        </div>
                    </Form.Group>
                    <Form.Group style={{ marginBottom: '10px' }}>
                        <Form.Check
                            type="checkbox"
                            label="Use shipping address as billing address"
                            checked={billingDataSameAsShipping}
                            onChange={() => { setBillingDataSameAsShipping((v) => !v) }}
                        />
                    </Form.Group>
                    {!billingDataSameAsShipping ? (
                        <>
                            <Form.Group controlId="billingAddress" style={{ marginBottom: '10px' }}>
                                {/* <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}></Form.Label> */}
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={billingInfo.address || ''}
                                    onChange={handleChange}
                                    placeholder="Address"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="billingAddressLine2" style={{ marginBottom: '10px' }}>
                                {/* <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Address Line 2</Form.Label> */}
                                <Form.Control
                                    type="text"
                                    name="addressLine2"
                                    value={billingInfo.addressLine2 || ''}
                                    placeholder="Apartment, suite, etc. (optional)"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="billingCity" style={{ marginBottom: '10px' }}>
                                {/* <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>City</Form.Label> */}
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={billingInfo.city || ''}
                                    onChange={handleChange}
                                    placeholder="City"
                                    required
                                />
                            </Form.Group>
                            <Form.Group style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                <div style={{ flex: 1 }}>
                                    {/* <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>State</Form.Label> */}
                                    <Form.Control
                                        as="select"
                                        name="state"
                                        value={billingInfo.state || ''}
                                        onChange={handleChange}
                                        placeholder="State"
                                        required
                                    >
                                        <option value="">State</option>
                                        {/* ...state options... */}
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </Form.Control>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px', display: billingInfo.zipCode ? 'block' : 'none' }}>Zip Code</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="zipCode"
                                        value={billingInfo.zipCode || ''}
                                        onChange={handleChange}
                                        placeholder="Zip Code"
                                        required
                                    />
                                </div>
                            </Form.Group>
                        </>
                    ) : (<div>

                    </div>)

                    }

                    <div className="text-end d-flex align-items-center justify-content-end" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '0px' }}>
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={!stripe}
                            // onClick={() => window.location.href = '/checkout/shipping'}
                            style={{
                                padding: '10px 10px',
                                backgroundColor: '#55020e',
                                color: 'black',
                                border: 'none',
                                borderRadius: '5px',
                                marginTop: '25px',
                                display: 'inline-block',
                                transform: 'scaleX(1.4)',
                                transformOrigin: 'right',
                                marginRight: '10px',
                            }}
                        >
                            <p style={{
                                margin: 0,
                                padding: '8px 10px',
                                fontFamily: '"Inter", sans-serif',
                                fontSize: 'clamp(0.8rem, 1.5vw, 1.5rem)',
                                fontWeight: '600',
                                whiteSpace: 'nowrap',
                                letterSpacing: '-1px',
                                maxFontSize: '1rem',
                                width: '100%',
                                textAlign: 'center',
                            }}>PAY ${total.toFixed(2)}</p>
                        </Button>
                    </div>
                </Form>
            ) : (
                <div>
                    <p>Loading payment details...</p>
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;