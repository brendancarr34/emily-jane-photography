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
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // Full viewport height
        margin: 0,
      }}
    >
      {/* Header */}
      <header 
        style={{
          backgroundColor: '#ffe0b2', 
          color: '#444', 
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ margin: 0 }}>Emily Jane Photography</h1>
      </header>

      {/* Scroll Section */}
      <div 
        style={{
          flex: 1, // Take up available space between header and footer
          overflowX: 'auto', // Enable horizontal scrolling
          display: 'flex',
          gap: '1rem',
          padding: '1rem',
        }}
      >
        {images.map((image, index) => (
          <Card 
            key={index} 
            style={{
              flex: '0 0 300px', // Fixed width for horizontal scroll
              height: '100%', // Fill the height of the parent container
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between', // Distribute space evenly
              overflow: 'hidden', // Prevent vertical overflow
            }}
          >
            {/* Card Image */}
            <div 
              style={{
                // flex: '0 10 30%', // Image takes up 50% of the card height
                // display: 'flex',
                // flexDirection: 'column',

              }}
            >
              <Card.Img 
                src={image} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Maintain aspect ratio
                }} 
              />
            </div>

            {/* Card Body */}
            <Card.Body 
              style={{
                flex: '1 1 30%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden', // Prevent text overflow,
                padding:0
              }}
            >
              <Card.Title className="text-center" style={{ fontSize: '1.2rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                Card Title {index + 1}
              </Card.Title>
              <Card.Text 
                className="text-center"
                style={{
                  flex: 1, // Allow text to take available space
                  overflow: 'hidden', // Prevent overflowing text
                  textOverflow: 'ellipsis', // Add ellipsis for long text
                  whiteSpace: 'nowrap', // Prevent wrapping text
                }}
              >
                This is a brief description of image {index + 1}.
              </Card.Text>
              <button 
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#6200ea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  alignSelf: 'center',
                }}
              >
                Learn More
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <footer 
        style={{
          backgroundColor: '#ffe0b2', 
          color: '#444', 
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        <p style={{ margin: 0 }}>Footer Content</p>
      </footer>
    </div>
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
    height: 'calc(100vh - 12rem)',
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
