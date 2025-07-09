import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../resources/landingPageBackground.jpg';
import Menu from '../components/Menu';

const LandingPage = () => {
    const landingPageContainerStyle = {
        color: 'white',
        // fontFamily: '"Young Serif", serif',
        // fontFamily: '"Inter", sans-serif',
        fontFamily: '"Playfair Display", serif',
        fontWeight: '800',
        // fontWeight: '400',
        fontStyle: 'normal',
        fontSize: '5rem',
        letterSpacing: '-2px', // Adjusts the space between letters
        wordSpacing: '25px', // Adjusts the space between words
        // position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        display: 'flex',
    };

    return (
        <div>
            <Menu />

            <div style={landingPageContainerStyle}>
                <Container>
                    <Row>
                        <Col style={{ padding: '40px' }}>
                            <h1 style={{
                                transform: 'scaleY(1.8)', paddingTop: '60px',
                                fontSize: 'clamp(1.8rem, 6vw, 6rem)',
                                fontWeight: '800', wordSpacing: 'clamp(10px, 2vw, 100px)'
                            }}>PHOTOGRAPHY PRINTS</h1>
                            <h1 style={{
                                fontFamily: '"Inter", sans-serif',
                                paddingTop: '100px', 
                                fontSize: 'clamp(1rem, 2.5vw, 2.5rem)', 
                                wordSpacing: '6px', 
                                transform: 'scaleX(1.4)', 
                                transformOrigin: 'left',
                                fontWeight: '600',
                                letterSpacing: '-1px'
                            }}>BY EMILY JANE TEVES</h1>
                            <div>
                                <button onClick={() => window.location.href = '/collection'} style={{ padding: '10px 10px', 
                                    // paddingRight: '85px', 
                                    backgroundColor: '#A7C7E7', color: 'black', border: 'none', borderRadius: '5px', marginTop: '40px' }}>
                                    <p style={{
                                        margin: 0,
                                        padding: '8px 10px',
                                        fontFamily: '"Inter", sans-serif',
                                        // transform: 'scaleX(1.4)', 
                                        // transformOrigin: 'left', 
                                        // letterSpacing: '-1px',
                                        fontSize: 'clamp(0.8rem, 1.5vw, 1.5rem)', maxFontSize: '1rem',
                                    }}>SHOP THE FULL COLLECTION</p>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container style={{ padding: '20px', fontFamily: '"Young Serif", serif', height: '60vh' }}>
                    <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                        <Col style={{ textAlign: 'center' }}>
                            <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(1rem, 2vw, 2rem)', fontWeight: '700', transform: 'scaleX(1.4)' }}>SHOP BY COLLECTION</h2>
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <Col xs={6} sm={6} lg={3} >
                            <Row style={{ padding: '8px', justifyContent: 'center', alignItems: 'center' }}>
                                <Col style={{
                                    textAlign: 'center',
                                    padding: '15px', // Reduced padding to shift the border inward
                                    border: '1px solid #ccc',
                                    borderRadius: '10px',
                                    boxSizing: 'border-box', // Ensures the border is included within the element's dimensions
                                }}>
                                    <a href="/collection?title=Collection1">
                                        <img src={require('../resources/collectionPhoto1.jpg')} alt="Collection 1" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
                                    </a>
                                    <h4 style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 0.8vw, 0.8rem)', fontWeight: '700', transform: 'scaleX(1.4)' }}>CALIFORNIA</h4>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={6} sm={6} lg={3}>
                            <Row style={{ padding: '8px', justifyContent: 'center', alignItems: 'center' }}>
                                <Col style={{
                                    textAlign: 'center',
                                    padding: '15px', // Reduced padding to shift the border inward
                                    border: '1px solid #ccc',
                                    borderRadius: '10px',
                                    boxSizing: 'border-box', // Ensures the border is included within the element's dimensions 
                                }}>
                                    <a href="/collection?title=Collection2">
                                        <img src={require('../resources/collectionPhoto2.jpg')} alt="Collection 2" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
                                    </a>
                                    <h4 style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 0.8vw, 0.8rem)', fontWeight: '700', transform: 'scaleX(1.4)' }}>HAWAII</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} sm={6} lg={3} >
                            <Row style={{ padding: '8px', justifyContent: 'center', alignItems: 'center' }}>
                                <Col style={{
                                    textAlign: 'center',
                                    padding: '15px', // Reduced padding to shift the border inward
                                    border: '1px solid #ccc',
                                    borderRadius: '10px',
                                    boxSizing: 'border-box', // Ensures the border is included within the element's dimensions
                                }}>
                                    <a href="/collection?title=Collection3">
                                        <img src={require('../resources/collectionPhoto3.jpg')} alt="Collection 3" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
                                    </a>
                                    <h4 style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 0.5vw, 0.5px)', fontWeight: '700', transform: 'scaleX(1.4)' }}>NORTH CAROLINA</h4>

                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} sm={6} lg={3} >
                            <Row style={{ padding: '8px', justifyContent: 'center', alignItems: 'center' }}>
                                <Col style={{
                                    textAlign: 'center',
                                    padding: '15px', // Reduced padding to shift the border inward
                                    border: '1px solid #ccc',
                                    borderRadius: '10px',
                                    boxSizing: 'border-box', // Ensures the border is included within the element's dimensions
                                    // margin: '10px',
                                }}>
                                    <a href="/collection?title=Collection4">
                                        <img src={require('../resources/collectionPhoto4.jpg')} alt="Collection 4" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
                                    </a>
                                    <h4 style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 0.8vw, 0.8rem)', fontWeight: '700', transform: 'scaleX(1.4)' }}>FILM</h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default LandingPage;