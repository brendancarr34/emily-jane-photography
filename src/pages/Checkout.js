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
                <h2 style={{ margin: '15px 0', width: '100%', textAlign: 'center' }}>Checkout</h2>
                <CheckoutForm 
                    formData={formData} 
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit} 
                />
            </Container>
        </div>
    );
};

export default Checkout;