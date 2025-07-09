import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';
import backgroundImage from '../resources/aboutMeBackground.jpeg';

const AboutMe = () => {
    return (
        <>
            <Menu />
            <Container style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
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
                    <Col>
                        <h1>About Me</h1>
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
            </Container>
        </>
    );
};

export default AboutMe;
