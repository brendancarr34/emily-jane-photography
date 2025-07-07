import React, { useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { CartContext } from '../components/CartContext';
import Menu from '../components/Menu';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
    const { cart, updateCartDetails } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
    });

    React.useEffect(() => {
        if (cart && cart.length > 0) {
            const firstItem = cart[0];
            setFormData({
                name: firstItem.name || '',
                address: firstItem.address || '',
                email: firstItem.email || '',
                addressLine2: firstItem.addressLine2 || '',
                city: firstItem.city || '',
                state: firstItem.state || '',
                zipCode: firstItem.zipCode || '',
            });
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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Checkout details updated!');
    };

    return (
        <div>
            <Menu />
            <br />
            <br />
            <br />
            <Container>
                <h2 style={{ marginBottom: '15px' }}>Checkout</h2>
                <CheckoutForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            </Container>
        </div>
    );
};

export default Checkout;