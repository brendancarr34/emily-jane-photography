import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import { Container, Form, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';

const ShippingDetails = () => {
    const { setShippingInfo, total, cart } = useContext(CartContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
    });
    const navigate = useNavigate();
    console.log('Cart contents:', cart);

    if (!Array.isArray(cart) || cart.length === 0) {
        console.warn('Cart is empty or not properly populated.');
    } else {
        cart.forEach((item, index) => {
            if (!item.title) {
                console.warn(`Item at index ${index} is missing a "title" property.`);
            }
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleProceed = (e) => {
        e.preventDefault();
        setShippingInfo(formData);
        navigate('/checkout/payment');
    };

    return (
        <div>
            <Menu />
            <br />
            <br />
            <br />
            {/* if the window is less than 768, show the total from cartContext */}

            <Container className="d-flex justify-content-center align-items-center" style={{ marginBottom: '20px' }}>
                {window.innerWidth < 768 && (
                    <div style={{ textAlign: 'center', padding: '10px' }}>
                        <p style={{ margin: '0' }}>{`${cart.length} Items - Total $${total.toFixed(2)}`}</p>
                        <ul style={{ listStyleType: 'none', padding: '0', margin: '10px 0' }}>
                            {cart.map((item, index) => (
                                <li key={index} style={{ marginBottom: '5px' }}>{item.title}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </Container>

            <Row style={{ width: '100%' }}>
                <Col
                    style={{
                        flex: window.innerWidth < 768 ? '0 0 100%' : '0 0 75%',
                        maxWidth: window.innerWidth < 768 ? '100%' : '70%',
                        margin: '0 auto',
                        marginLeft: window.innerWidth < 768 ? '12px' : '25px',
                        paddingRight: window.innerWidth < 768 ? '12px' : '0px',
                    }}
                >
                    <Container className="shipping-details-container" style={{ padding: '20px', borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
                        <h2 style={{ margin: '15px 0', width: '100%', textAlign: 'center' }}>Shipping Details</h2>
                        <Form onSubmit={handleProceed}>
                            <Form.Group style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                <div style={{ flex: 1 }}>
                                    <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
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
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formAddressLine2" style={{ marginBottom: '10px' }}>
                                <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>Address Line 2</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="addressLine2"
                                    value={formData.addressLine2}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formCity" style={{ marginBottom: '10px' }}>
                                <Form.Label style={{ marginBottom: '5px', paddingLeft: '5px' }}>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={formData.city}
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
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select State</option>
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
                                        value={formData.zipCode}
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
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                style={{ backgroundColor: '#A7C7E7', color: 'black', border: 'none', padding: '10px 20px', marginTop: '20px' }}
                            >
                                Proceed to Payment
                            </Button>
                        </Form>
                    </Container>
                </Col>
                {window.innerWidth >= 768 && (
                    <Col
                        style={{
                            flex: '0 0 25%',
                            maxWidth: '30%',
                            margin: '0 auto',
                            padding: '0px'
                        }}
                    >
                        <Container className="shipping-details-image" style={{ padding: '0px'}}>
                            <div style={{ padding: '10px', borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
                                <h4 style={{ textAlign: 'center', marginBottom: '15px' }}>Your Cart</h4>
                                {cart.map((item, index) => (
                                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                        <span>{item.title}</span>
                                        <span>{`$${item.price.toFixed(2)}`}</span>
                                    </div>
                                ))}
                                <hr />
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                    <span>Total</span>
                                    <span>{`$${total.toFixed(2)}`}</span>
                                </div>
                            </div>
                        </Container>
                    </Col>
                )}
            </Row>
            <footer style={{
                marginTop: 'auto',
                width: '100%',
                backgroundColor: '#A7C7E7',
                padding: '30px',
                textAlign: 'center',
            }}>
                <p>© 2025 Emily Jane Photography</p>
            </footer>
        </div>
    );
};

export default ShippingDetails;