import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Navigation Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Emily Jane Photography</h1>
      </header>

      {/* Padding Section */}
      <div style={styles.paddingSection}>
        {/* Scrollable Section */}
        <section style={styles.scrollSection}>
          <div style={styles.scrollContainer}>
            {[...Array(10).keys()].map((item) => (
              <div key={item} style={styles.scrollItem}>
                Item {item + 1}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>Footer Content</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    margin: 0, // Remove all padding from the container
  },
  header: {
    backgroundColor: '#FFDAB9', // Pale orange
    color: '#333', // Dark gray text color
    padding: '1rem',
    textAlign: 'center',
    margin: 0, // No padding for header
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
  },
  paddingSection: {
    backgroundColor: 'white',
    flex: 1,
    display: 'flex',
    flexDirection: 'column', // Ensures vertical stacking
  },
  scrollSection: {
    flex: 1, // Take up all available space
    display: 'flex',
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    backgroundColor: '#f1f1f1',
    borderRadius: '8px', // Added rounded edges for aesthetics
    padding: '0 2rem', // Added padding to the left and right of scroll section
  },
  scrollContainer: {
    display: 'flex',
    overflowX: 'auto',
    gap: '1rem',
    padding: '0 1rem', // Padding around the scrollable content
    scrollSnapType: 'x mandatory',
  },
  scrollItem: {
    minWidth: '200px',
    height: '300px', // Changed height to 300px
    backgroundColor: '#ADD8E6', // Pale blue
    color: '#333', // Dark gray text color for items
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    flexShrink: 0,
    scrollSnapAlign: 'start',
  },
  footer: {
    backgroundColor: '#FFDAB9', // Pale orange
    color: '#333', // Dark gray text color
    padding: '1rem',
    textAlign: 'center',
    margin: 0, // No padding for footer
  },
  footerText: {
    margin: 0,
  },
};

export default Home;
