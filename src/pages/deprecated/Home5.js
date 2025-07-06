import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import PwintyButton from '../../components/PwintyButton';
// import OrderButton from '../components/OrderButton';
import OrderButton2 from '../../components/OrderButton2';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [...Array(15).keys()]; // Array of items


  const images = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg',
    '/images/photo4.jpg',
    '/images/photo5.jpg',
    '/images/photo6.jpg',
  ];
  

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
          <div id="scroll-container" style={{
        display: 'flex',
        gap: '1rem',
        overflowX: 'auto', // Enable horizontal scrolling
        padding: '1rem',
        height: '100%', // Ensure container uses the available height
        // backgroundColor: '#ADD8E6',
      }}>
            {images.map((image, index) => (
              <Card
                key={index}
                id={`scroll-item-${index}`}
                style={{
                  width: '300px',
                  height: '400px', // Fixed height to prevent vertical overflow
                  display: 'flex',
                  flexDirection: 'column',
                  flexShrink: 0,
                  backgroundColor: '#ADD8E6',
                }}
              >
                <Card.Text style={{padding:5, margin:0}}>
                  Title
                </Card.Text>
                <Card.Img src={image} style={{
                  flex: 1,
    width: '100%', 
    height: 'auto', 
    objectFit: 'contain', // Options: 'cover', 'contain', 'fill', or 'scale-down'
    borderRadius: '8px 8px 0 0', // Optional rounded corners
  }}  />
                <Card.Body className="text-center" style={{padding:10,backgroundColor: '#ADD8E6',}}>
                  {/* Item {index + 1} */}
                  <OrderButton2/>
                </Card.Body>
                {/* <PwintyButton/> */}
                
              </Card>
            ))}
          </div>
          {/* <div style={styles.scrollButtons}>
            <Button variant="secondary" onClick={handlePrev} style={styles.scrollButton}>
              {'<'}
            </Button>
            <Button variant="secondary" onClick={handleNext} style={styles.scrollButton}>
              {'>'}
            </Button>
          </div> */}
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
    padding: 0,
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
    padding: '0.5rem',
    color: '#333',
  },
  menuLink: {
    color: '#333',
  },
  scrollSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    padding: '2rem',
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    flexShrink: 0,
    scrollSnapAlign: 'start',
  },
  cardImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px 8px 0 0', // Rounded corners at the top
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
    borderColor: 'transparent',
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
    padding: '0.5rem',
  },
};

export default Home;
