import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';
import backgroundImage from '../resources/aboutMeBackground.jpeg';
import AboutMeContent from '../components/AboutMeContent';
import logoOverrideImg from '../resources/5.png';

const AboutMe = () => {
    return (
        <div className="about-me-wrapper d-flex flex-column" style={{ minHeight: '100vh' }}>
            <Menu logoOverride={require('../resources/5.png')} />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '180px',
                backgroundImage: `url(${require('../resources/landingPageBackground.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                margin: 0,
                borderRadius: 0,
                zIndex: 0
            }} />
            <div style={{ height: '180px' }} />
            <Container
                style={{
                    padding: '20px',
                    fontFamily: 'Arial, sans-serif',
                    flexGrow: 1, // Ensures the content takes up available space
                }}
            >
                <Row>
                    <Col>
                        <br />
                        <br />
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        <div
                            style={{
                                backgroundImage: `url(${backgroundImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100%',
                                width: '100%',
                            }}
                        ></div>
                    </Col>
                    <Col style={{ height: '80vh', padding: '20px', color: 'black' }}>
                        <h1 style={{ padding: '40px 0' }}>About Me</h1>
                        <p>
                            Hi! I'm Emily Jane, a passionate photographer dedicated to capturing life's most beautiful moments.
                            With years of experience and a love for creativity, I strive to bring your vision to life through my lens.
                        </p>
                        <p>
                            When I'm not behind the camera, I enjoy exploring nature, traveling, and spending time with my family.
                            Thank you for visiting my page, and I look forward to working with you!
                        </p>
                    </Col>
                </Row> */}
                <Row>
                    <AboutMeContent />
                </Row>
                <Row>
                    <br/>
                    <br/>
                </Row>
                {/* Photo Grid Section */}
                <Row style={{ marginTop: '40px' }}>
                    <Col>
                        <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>My Work</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                            {/* Example images, replace src with your own images */}
                            <img src={require('../resources/collectionPhoto1.jpg')} alt="Work 1" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
                            <img src={require('../resources/collectionPhoto2.jpg')} alt="Work 2" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
                            <img src={require('../resources/collectionPhoto3.jpg')} alt="Work 3" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
                            <img src={require('../resources/collectionPhoto4.jpg')} alt="Work 4" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <footer
                style={{
                    marginTop: 'auto',
                    width: '100%',
                    backgroundColor: '#55020e',
                    padding: '30px',
                    textAlign: 'center',
                }}
            >
                <p>© 2025 Emily Jane Photography</p>
            </footer>
        </div>
    );
};

export default AboutMe;