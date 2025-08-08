import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../resources/landingPageBackground.jpg';
import Menu from '../components/Menu';
import Spinner from 'react-bootstrap/Spinner';

const LandingPage = () => {
    const [loaded, setLoaded] = useState(false);
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
    const [loadPage, setLoadPage] = useState(false);
    useEffect(() => {
        // const timeout = setTimeout(() => {
        //     setLoadPage(true);
        // }, 2000); // Adjust the delay as needed
        // return () => clearTimeout(timeout);
        setLoadPage(true);
    }, [loaded]);

    return (
        <div >
            <Menu />
            <img
                src={backgroundImage}
                alt="background"
                style={{ display: 'none' }}
                onLoad={() => setLoaded(true)}
            />
            <div style={{
                opacity: loadPage ? 1 : 0,
                transition: "opacity 2s ease",
            }}>

                {!loadPage ? (
                    <div style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Spinner animation="border" role="status" style={{ width: '4rem', height: '4rem', color: '#A7C7E7' }}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <div style={{ opacity: loadPage ? 1 : 0, transition: "opacity 2s ease" }}>
                        <div style={landingPageContainerStyle}>
                            <Container>
                                <Row>
                                    <Col style={{ padding: '20px' }}>
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
                                            <button onClick={() => window.location.href = '/#/collection'} style={{
                                                padding: '10px 10px',
                                                backgroundColor: '#A7C7E7',
                                                color: 'black',
                                                border: 'none',
                                                borderRadius: '5px',
                                                marginTop: '40px',
                                                display: 'inline-block', // Ensures the button wraps around the content
                                                transform: 'scaleX(1.4)',
                                                transformOrigin: 'left',
                                            }}>
                                                <p style={{
                                                    margin: 0,
                                                    padding: '8px 10px',
                                                    fontFamily: '"Inter", sans-serif',
                                                    fontSize: 'clamp(0.8rem, 1.5vw, 1.5rem)',
                                                    fontWeight: '600',
                                                    whiteSpace: 'nowrap', // Prevents text wrapping
                                                    letterSpacing: '-1px',
                                                    maxFontSize: '1rem',
                                                    width: '100%', // Makes the button extend with the content
                                                    textAlign: 'center', // Centers the text within the button
                                                }}>SHOP THE FULL COLLECTION</p>
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div>
                            <Container style={{ padding: '20px', fontFamily: '"Young Serif", serif', height: '100%' }}>
                                <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                                    <Col style={{ textAlign: 'center' }}>
                                        <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(1rem, 2vw, 2rem)', fontWeight: '700', transform: 'scaleX(1.4)', letterSpacing: '-1px', }}>SHOP BY COLLECTION</h2>
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
                                                <a href="/collection?collection=California">
                                                    <img src={require('../resources/collectionPhoto1.jpg')} alt="Collection 1" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
                                                </a>
                                                <h4 style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 0.8vw, 0.8rem)', fontWeight: '700', letterSpacing: '-1px', transform: 'scaleX(1.4)' }}>CALIFORNIA</h4>
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
                                                <a href="/collection?collection=Hawaii">
                                                    <img src={require('../resources/collectionPhoto2.jpg')} alt="Collection 2" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
                                                </a>
                                                <h4 style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 0.8vw, 0.8rem)', fontWeight: '700', letterSpacing: '-1px', transform: 'scaleX(1.4)' }}>HAWAII</h4>
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
                                                <a href="/collection?collection=NorthCarolina">
                                                    <img src={require('../resources/collectionPhoto3.jpg')} alt="Collection 3" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
                                                </a>
                                                <h4 style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 0.5vw, 0.5px)', fontWeight: '700', letterSpacing: '-1px', transform: 'scaleX(1.4)' }}>NORTH CAROLINA</h4>
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
                                                <a href="/collection?collection=Film">
                                                    <img src={require('../resources/collectionPhoto4.jpg')} alt="Collection 4" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
                                                </a>
                                                <h4 style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 0.8vw, 0.8rem)', fontWeight: '700', letterSpacing: '-1px', transform: 'scaleX(1.4)' }}>FILM</h4>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div>
                            <Container style={{ padding: '20px', fontFamily: '"Young Serif", serif', height: '100%' }}>
                                <Row style={{ paddingBottom: '20px' }}>
                                    <Col style={{ textAlign: 'center' }}>
                                        <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(1rem, 2vw, 2rem)', fontWeight: '700', transform: 'scaleX(1.4)' }}>ABOUT ME</h2>
                                    </Col>
                                </Row>
                                <Row style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                    <Col xs={12} sm={12} lg={6}>
                                        <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 1vw, 1.5rem)', lineHeight: '1.6' }}>
                                            Hi! I'm Emily Jane Teves, a photographer based in the beautiful state of North Carolina. I specialize in capturing the essence of nature and the beauty of the world around us through my lens.
                                        </p>
                                        <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 1vw, 1.5rem)', lineHeight: '1.6' }}>
                                            My journey into photography began as a way to document my travels and the stunning landscapes I encountered. Over time, it has evolved into a passion for sharing these moments with others.
                                        </p>
                                        <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 1vw, 1.5rem)', lineHeight: '1.6' }}>
                                            I hope my work inspires you to appreciate the beauty of our world and perhaps even embark on your own photographic journey.
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button style={{ backgroundColor: '#A7C7E7', border: 'none', padding: '10px 20px', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <a href="/#/about" style={{ textDecoration: 'none', backgroundColor: '#A7C7E7', color: 'black', fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 1vw, 1.5rem)', fontWeight: '600' }}>
                                            Learn More About Me
                                        </a>
                                    </Button>
                                </Row>
                            </Container>
                        </div>
                        <div>
                            {/* Container for getting in contact with me */}
                            <Container style={{
                                padding: '20px', fontFamily: '"Young Serif", serif', height: '100%',
                                // marginBottom: '140px' 
                            }}>
                                <Row style={{ paddingBottom: '20px' }}>
                                    <Col style={{ textAlign: 'center' }}>
                                        <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(1rem, 2vw, 2rem)', fontWeight: '700', transform: 'scaleX(1.4)' }}>GET IN TOUCH</h2>
                                    </Col>
                                </Row>
                                <Row style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                    <Col xs={12} sm={12} lg={6}>
                                        <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 1vw, 1.5rem)', lineHeight: '1.6' }}>
                                            I would love to hear from you! Whether you have questions about my work, want to collaborate, or just want to say hello, feel free to reach out.
                                        </p>
                                        <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 1vw, 1.5rem)', lineHeight: '1.6' }}>
                                            You can contact me via email at <a href="mailto:emilyjaneteves@gmail.com">emilyjaneteves@gmail.com</a>
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div>
                            <Container style={{ fontFamily: '"Young Serif", serif', height: '100%', margin: '0', width: '100vw' }}>
                                <Row style={{ padding: '20px', fontFamily: '"Young Serif", serif', height: '100%', width: '100vw', backgroundColor: '#A7C7E7' }}>
                                    <Col style={{ textAlign: 'center', padding: '20px' }}>
                                        <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(1rem, 2vw, 2rem)', fontWeight: '700', transform: 'scaleX(1.4)' }}>FOLLOW ME</h2>
                                        <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.8rem, 1vw, 1.5rem)', lineHeight: '1.6', margin: '0' }}>
                                            Stay updated with my latest work and adventures by following me on social media.
                                        </p>
                                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                                            {/* <a href="https://www.instagram.com/emilyjaneteves/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src={require('../resources/instagramIcon.png')} alt="Instagram" style={{ width: '40px', height: '40px' }} />
                                </a> */}
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LandingPage;