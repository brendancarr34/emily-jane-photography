import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../components/Menu';

const Cart = () => {
    const { cart, removeFromCart, clearCart, total } = useContext(CartContext);
    // Check if cartItems is defined and has items
    console.log("Cart items:", cart);

    if (cart && cart.length === 0) {
        return (
            <div>
                <Menu />
                <Container className="cart-page mt-4">
                    <Row>
                        <Col>
                            <h2>Your Cart</h2>
                            <p>Your cart is empty.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    return (
        <div>
            <Menu />
            <Container className="cart-page mt-4">
                <Row>
                    <Col>
                        <br/>
                        <br/>
                        <h2>Your Cart</h2>
                        <ListGroup>
                            {cart && cart.length > 0 ? (
                                cart.map((item, idx) => (
                                    <ListGroup.Item key={item.id || idx} className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <img 
                                                src={item.url} 
                                                alt={item.name} 
                                                style={{ 
                                                    width: '80px', 
                                                    height: '100px', 
                                                    marginRight: '10px', 
                                                    border: '1px solid #ccc', 
                                                    borderRadius: '4px' 
                                                }} 
                                            />
                                            <div>
                                                <strong>{item.title}</strong>
                                                <div>${item.price}</div>
                                            </div>
                                        </div>
                                        <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                                            Remove
                                        </Button>
                                    </ListGroup.Item>
                                ))
                            ) : (
                                <ListGroup.Item>No items in cart</ListGroup.Item>
                            )}
                        </ListGroup>
                        <div className="mt-3">
                            {total ? <strong>Total: ${total.toFixed(2)}</strong> : 'Total: $0.00'}
                        </div>
                        <Button variant="warning" className="mt-3" onClick={clearCart}>
                            Clear Cart
                        </Button>
                        <Button 
                            variant="primary" 
                            className="mt-3 ms-2" 
                            onClick={() => window.location.href = '/checkout'}
                        >
                            Checkout
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;