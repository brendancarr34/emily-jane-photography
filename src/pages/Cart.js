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

    console.log('Cart items:', cart);

    if (cart && cart.length === 0) {
        return (
            <div>
                <Menu />
                <br />
                <br />
                <Container className="cart-page mt-4 d-flex flex-column align-items-center justify-content-center" style={{ height: '80vh' }}>
                    <Row className="justify-content-center">
                        <Col className="text-center">
                            <h2>Your Cart is empty.</h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-3">
                        <Col className="text-center">
                            <Button variant="primary" style={{ backgroundColor: '#A7C7E7', color: 'black', border: 'none', padding: '20px 50px', marginTop: '20px' }} onClick={() => window.location.href = '/collection'}>
                                <h2 style={{ margin: 0 }}>Go to Gallery</h2>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    return (
        <div className="d-flex flex-column" style={{ minHeight: '20vh', position: 'relative' }}>
            <Menu />
            <Container className="cart-page mt-4 flex-grow-1">
                <Row>
                    <Col>
                        <br />
                        <br />
                        <div className="d-flex justify-content-between align-items-center">
                            {/* <Button variant="warning" className="ms-3" onClick={clearCart}>
                                Clear Cart
                            </Button> */}
                            <h4 style={{ marginTop: '10px', marginBottom: '20px', textAlign: 'center', flexGrow: 1 }}>
                                Your Cart
                            </h4>
                        </div>
                        <ListGroup>
                            {cart && cart.length > 0 ? (
                                cart.map((item, idx) => (
                                    <ListGroup.Item key={item.id || idx} className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center" style={{ width: '60%' }}>
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
                                                <div>{item.size}</div>
                                                <div>Border: {item.borderSize}</div>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="ms-2">{item.quantity} x ${item.price}</span>
                                        </div>
                                        <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                                            <h6 style={{ margin: 0 }}><strong>X</strong></h6>
                                        </Button>
                                    </ListGroup.Item>
                                ))
                            ) : (
                                <ListGroup.Item>No items in cart</ListGroup.Item>
                            )}
                        </ListGroup>
                        <div className="mt-3 text-end d-flex align-items-center justify-content-end" style={{ fontSize: '1.2rem', fontWeight: 'bold', paddingTop: '10px' }}>
                            <strong className="me-3">{total ? `Total: $${total.toFixed(2)}` : 'Total: $0.00'}</strong>
                            <Button
                                variant="primary"
                                onClick={() => window.location.href = '/checkout'}
                            >
                                Checkout
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#A7C7E7', padding: '30px' }}>

            </footer>
        </div>
    );
};

export default Cart;