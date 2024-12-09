import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [...Array(15).keys()]; // Array of items

  // Handle next and previous item navigation with smooth scrolling
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
    scrollToItem(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
    scrollToItem(prevIndex);
  };

  // Smooth scroll to the item with the given index
  const scrollToItem = (index) => {
    const itemElement = document.getElementById(`scroll-item-${index}`);
    if (itemElement) {
      const scrollContainer = document.querySelector(`#scroll-container`);
      const containerWidth = scrollContainer.clientWidth;
      const itemPosition = itemElement.offsetLeft;
      const scrollPosition = itemPosition - (containerWidth / 2);
      scrollContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <Container fluid style={styles.container}>
      {/* Navigation Header */}
      <Navbar bg="orange" variant="dark" style={styles.header}>
        <Navbar.Brand href="#" style={styles.title}>
          Emily Jane Photo
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#store" style={styles.menuLink}>Store</Nav.Link>
          <Nav.Link href="#about-me" style={styles.menuLink}>About Me</Nav.Link>
        </Nav>
      </Navbar>

      {/* Scroll Section */}
      <Row style={styles.scrollSection}>
        <Col style={styles.scrollCol}>
          <div id="scroll-container" style={styles.scrollContainer}>
            {items.map((item, index) => (
              <Card
                key={item}
                id={`scroll-item-${index}`}
                style={styles.scrollItem}
              >
                <Card.Body className="text-center">
                  Item {item + 1}
                </Card.Body>
              </Card>
            ))}
          </div>
          <div style={styles.scrollButtons}>
            <Button variant="secondary" onClick={handlePrev} style={styles.scrollButton}>
              {'<'}
            </Button>
            <Button variant="secondary" onClick={handleNext} style={styles.scrollButton}>
              {'>'}
            </Button>
          </div>
        </Col>
      </Row>

      {/* Footer */}
      <Row style={styles.footer}>
        <Col className="text-center" style={styles.footerText}>
          Footer Content
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
    margin: 0,
    padding: 0, // Zero padding for the container itself
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
    padding: '0.5rem', // Padding for text inside title
    color: '#333', // Darker color for the title text
  },
  menuLink: {
    color: '#333', // Darker color for menu links
  },
  scrollSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
    padding: '2rem 2rem',
    height: 'calc(100vh - 6rem)',
  },
  scrollCol: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  scrollContainer: {
    display: 'flex',
    overflowX: 'auto',
    gap: '1rem',
    scrollSnapType: 'x mandatory',
    flex: 1,
  },
  scrollItem: {
    minWidth: '100%',
    height: '100%',
    backgroundColor: '#ADD8E6',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    flexShrink: 0,
    scrollSnapAlign: 'start',
  },
  scrollButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
  },
  scrollButton: {
    padding: '1rem',
    backgroundColor: '#FFDAB9',
    borderColor: 'transparent', // No border outline
    color: '#333',
  },
  footer: {
    backgroundColor: '#FFDAB9',
    color: '#333',
    padding: '1rem',
    textAlign: 'center',
    margin: 0,
  },
  footerText: {
    margin: 0,
    padding: '0.5rem', // Padding for text inside footer
  },
};

export default Home;
