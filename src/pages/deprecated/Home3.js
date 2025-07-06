import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid style={styles.container}>
      {/* Navigation Header */}
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#">Emily Jane Photography</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>

      {/* Scroll Section */}
      <Row style={styles.scrollSection}>
        <Col style={styles.scrollCol}>
          <div style={styles.scrollContainer}>
            {[...Array(15).keys()].map((item) => (
              <Card key={item} style={styles.scrollItem}>
                <Card.Body className="text-center">
                  Item {item + 1}
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>

      {/* Footer */}
      <Row style={styles.footer}>
        <Col className="text-center">
          <p>Footer Content</p>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
    margin: 0, // Remove all padding from the container
    padding: 0, // No padding for container
  },
  header: {
    backgroundColor: '#FFDAB9',
    color: '#333',
    padding: '1rem',
    textAlign: 'center',
    margin: 0,
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
  },
  scrollSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
    padding: '2rem 2rem', // Padding on top and bottom of the scroll section
    height: 'calc(100vh - 6rem)', // Adjusted height for header and footer
  },
  scrollCol: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%', // Full height of the scroll section
  },
  scrollContainer: {
    display: 'flex',
    overflowX: 'auto',
    gap: '1rem',
    padding: '0 1rem',
    scrollSnapType: 'x mandatory',
    flex: 1,
  },
  scrollItem: {
    minWidth: '300px',
    height: '100%', // Fill the height of the scroll section
    backgroundColor: '#ADD8E6',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    flexShrink: 0,
    scrollSnapAlign: 'start',
    '@media (max-width: 600px)': {
      minWidth: '150px',
      height: '200px',
    },
  },
  footer: {
    backgroundColor: '#FFDAB9', // Pale orange
    color: '#333', // Dark gray text color
    padding: '1rem',
    textAlign: 'center',
    margin: 0,
  },
  footerText: {
    margin: 0,
  },
};

export default Home;
