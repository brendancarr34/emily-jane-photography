import React from "react";

const HomePage = () => {
  const images = [
    '/images/goldenGoldenGate.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg',
    '/images/photo4.jpg',
    '/images/photo5.jpg',
    '/images/photo6.jpg',
  ];

  const styles = {
    homepage: {
      fontFamily: "Arial, sans-serif",
    },
    header: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "1rem",
      textAlign: "center",
    },
    menu: {
      listStyle: "none",
      padding: 0,
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
    },
    menuLink: {
      color: "#fff",
      textDecoration: "none",
    },
    photoGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "1rem",
      padding: "1rem",
    },
    photoCard: {
      border: "1px solid #ddd",
      padding: "1rem", /* Added padding between black border and edge of card */
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    photoImage: {
      maxWidth: "100%",
      height: "auto",
      display: "block",
      margin: "5px",
      border: "20px solid white", /* White border between photo and black border */
      backgroundColor: "white",
      boxShadow: "0 0 0 5px black", /* Black outer border */
    },
    photoInfo: {
      alignSelf: "flex-start",
      textAlign: "left",
      marginTop: "1rem",
    },
  };

  return (
    <div style={styles.homepage}>
      <header style={styles.header}>
        <h1>Photography Prints</h1>
        <nav>
          <ul style={styles.menu}>
            <li><a href="/about" style={styles.menuLink}>About Me</a></li>
            <li><a href="/store" style={styles.menuLink}>Store</a></li>
          </ul>
        </nav>
      </header>

      <main style={styles.photoGrid}>
        {images.map((photo, index) => (
          <div key={index} style={styles.photoCard}>
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              style={styles.photoImage}
            />
            <div style={styles.photoInfo}>
              <p>{photo.split('/').pop()}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default HomePage;
