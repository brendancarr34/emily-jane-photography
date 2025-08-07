import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../components/Menu';

const Cart = () => {
    const { cart, removeFromCart, total } = useContext(CartContext);

    if (cart && cart.length === 0) {
        return (
            <div className="cart-wrapper d-flex flex-column" style={{ minHeight: '100vh' }}>
                <Menu />
                <br />
                <br />
                <Container className="cart-page mt-4 d-flex flex-column align-items-center justify-content-center" style={{ flexGrow: 1 }}>
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
    }

    return (
        <div className="cart-wrapper d-flex flex-column" style={{ minHeight: '100vh' }}>
            <Menu />
            <Container className="cart-page mt-4 flex-grow-1">
                <Row>
                    <Col>
                        <br />
                        <br />
                        <div className="d-flex justify-content-between align-items-center">
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
                        <div className="mt-2 text-end d-flex align-items-center justify-content-end" style={{ padding: '0px', backgroundColor: 'white', color: 'black', border: 'none', borderRadius: '5px', marginTop: '5px', display: 'inline-block', transform: 'scaleX(1.4)', transformOrigin: 'right', width: '100%' }}>
                            <p style={{
                                margin: 0,
                                padding: '8px 0px',
                                fontFamily: '"Inter", sans-serif',
                                fontSize: 'clamp(0.8rem, 1.5vw, 1.5rem)',
                                fontWeight: '600',
                                whiteSpace: 'nowrap',
                                letterSpacing: '-1px',
                                maxFontSize: '1rem',
                                width: '100%',
                                textAlign: 'right',
                                marginRight: '10px',
                            }}>
                                {total ? `Total: $${total.toFixed(2)}` : 'Total: $0.00'}
                            </p>
                        </div>
                        <div className="text-end d-flex align-items-center justify-content-end" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '0px' }}>
                            <Button
                                variant="primary"
                                onClick={() => window.location.href = '/checkout/shipping'}
                                style={{
                                    padding: '10px 10px',
                                    backgroundColor: '#A7C7E7',
                                    color: 'black',
                                    border: 'none',
                                    borderRadius: '5px',
                                    marginTop: '5px',
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
                                }}>CHECKOUT</p>
                            </Button>
                        </div>
                        <br />
                    </Col>
                </Row>
            </Container>
            <footer style={{
                marginTop: 'auto',
                width: '100%',
                backgroundColor: '#A7C7E7',
                padding: '30px',
                textAlign: 'center',
            }}>
                <p style={{ margin: 0 }}>© 2025 Emily Jane Photography</p>
            </footer>
        </div>
    );
};

export default Cart;