import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';
import backgroundImage from '../resources/aboutMeBackground.jpeg';


const AboutMeContent = () => {
    return (
        <Row>
            <Col>
            
                <div
                    style={{
                        backgroundColor: 'white',
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                ></div>
            </Col>
            <Col style={{ height: '80vh', padding: '20px', color: 'black', backgroundColor: 'white', }}>
                <h1 style={{ padding: '40px 0' }}>About Me</h1>
                <p>
                    Hi! I'm Emily Jane, a passionate photographer dedicated to capturing life's most beautiful moments.
                    With years of experience and a love for creativity, I strive to bring your vision to life through my lens.
                </p>
                <p>
                    When I'm not behind the camera..., I enjoy exploring nature, traveling, and spending time with my family.
                    Thank you for visiting my page, and I look forward to working with you!
                </p>
            </Col>
        </Row>
    );
};

export default AboutMeContent;