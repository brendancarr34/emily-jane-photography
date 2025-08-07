import React, { useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CartContext } from '../components/CartContext';
import { Form, Button } from 'react-bootstrap';

const CheckoutForm = ({
    billingData = {},
    handleChange,
    handleOrder,
    clientSecret,
    shippingInfo = {},
    useDifferentBilling = false,
    billingInfo = {},
    handleBillingChange,
    showBillingFields = false,
    setUseDifferentBilling,
}) => {
    const { total, clearCart } = useContext(CartContext);
    const stripe = useStripe();
    const elements = useElements();

    // Use billing info if checkbox is checked, otherwise use shipping info
    const paymentData = useDifferentBilling ? billingInfo : billingData;

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
            alert('Payment successful!');
            // Pass shippingInfo to handleOrder if needed
            handleOrder(shippingInfo);
            clearCart();
        }
    };

    return (
        <div>
            {clientSecret ? (
                <Form onSubmit={handlePayment}>
                    {/* Shipping or Billing Fields */}
                    <Form.Group style={{ marginBottom: '10px' }}>
                        <Form.Check
                            type="checkbox"
                            label="Use different billing info"
                            checked={useDifferentBilling}
                            onChange={() => setUseDifferentBilling && setUseDifferentBilling((v) => !v)}
                        />
                    </Form.Group>
                    {(useDifferentBilling && showBillingFields) ? (
                        <>
                            <Form.Group style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                <div style={{ flex: 1 }}>
                                    <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Card Holder First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={billingInfo.firstName || ''}
                                        onChange={handleBillingChange}
                                        required
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Card Holder Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={billingInfo.lastName || ''}
                                        onChange={handleBillingChange}
                                        required
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group controlId="billingAddress" style={{ marginBottom: '10px' }}>
                                <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Address Line 1</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={billingInfo.address || ''}
                                    onChange={handleBillingChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="billingAddressLine2" style={{ marginBottom: '10px' }}>
                                <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Address Line 2</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="addressLine2"
                                    value={billingInfo.addressLine2 || ''}
                                    onChange={handleBillingChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="billingCity" style={{ marginBottom: '10px' }}>
                                <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={billingInfo.city || ''}
                                    onChange={handleBillingChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                <div style={{ flex: 1 }}>
                                    <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>State</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="state"
                                        value={billingInfo.state || ''}
                                        onChange={handleBillingChange}
                                        required
                                    >
                                        <option value="">Select State</option>
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
                                    <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Zip Code</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="zipCode"
                                        value={billingInfo.zipCode || ''}
                                        onChange={handleBillingChange}
                                        required
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group controlId="billingEmail" style={{ marginBottom: '10px' }}>
                                <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={billingInfo.email || ''}
                                    onChange={handleBillingChange}
                                    required
                                />
                            </Form.Group>
                        </>
                    ) : (
                        <>
                            <Form.Group style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                <div style={{ flex: 1 }}>
                                    <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={billingData.firstName || ''}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={billingData.lastName || ''}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formAddress" style={{ marginBottom: '10px' }}>
                                <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Address Line 1</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={billingData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formAddressLine2" style={{ marginBottom: '10px' }}>
                                <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Address Line 2</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="addressLine2"
                                    value={billingData.addressLine2 || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formCity" style={{ marginBottom: '10px' }}>
                                <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={billingData.city || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                <div style={{ flex: 1 }}>
                                    <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>State</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="state"
                                        value={billingData.state || ''}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select State</option>
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
                                    <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Zip Code</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="zipCode"
                                        value={billingData.zipCode || ''}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formEmail" style={{ marginBottom: '10px' }}>
                                <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={billingData.email || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </>
                    )}
                    <Form.Group controlId="formCardElement" style={{ marginBottom: '20px' }}>
                        <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Credit or Debit Card</Form.Label>
                        <div style={{ padding: '10px', border: '1px solid #ced4da', borderRadius: '4px' }}>
                            <CardElement options={{ hidePostalCode: true }} />
                        </div>
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={!stripe}
                        style={{ backgroundColor: '#A7C7E7', color: 'black', border: 'none', padding: '10px 20px' }}
                    >
                        Pay ${total.toFixed(2)}
                    </Button>
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