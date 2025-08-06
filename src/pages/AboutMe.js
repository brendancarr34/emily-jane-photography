import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';
import backgroundImage from '../resources/aboutMeBackground.jpeg';

const AboutMe = () => {
    return (
        <div className="about-me-wrapper d-flex flex-column" style={{ minHeight: '100vh' }}>
            <Menu />
            <Container
                style={{
                    padding: '20px',
                    fontFamily: 'Arial, sans-serif',
                    flexGrow: 1, // Ensures the content takes up available space
                }}
            >
                <Row>
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
                </Row>
                <Row>
                    <br/>
                    <br/>
                </Row>
            </Container>
            <footer
                style={{
                    marginTop: 'auto',
                    width: '100%',
                    backgroundColor: '#A7C7E7',
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