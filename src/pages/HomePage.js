import React from "react";

const HomePage = () => {
  const images = [
    { url: '/images/goldenGoldenGate.jpg', title: 'Golden Gate Bridge' },
    { url: '/images/photo2.jpg', title: 'Sunset Over the Ocean' },
    { url: '/images/photo3.jpg', title: 'Mountain View' },
    { url: '/images/photo4.jpg', title: 'City Skyline' },
    { url: '/images/photo5.jpg', title: 'Forest Path' },
    { url: '/images/photo6.jpg', title: 'Desert Dunes' },
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
      padding: "1rem", 
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
      border: "20px solid white", 
      backgroundColor: "white",
      boxShadow: "0 0 0 5px black", 
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
              src={photo.url}
              alt={`Photo ${index + 1} - ${photo.title}`}
              style={styles.photoImage}
            />
            <div style={styles.photoInfo}>
              <p>{photo.title}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default HomePage;
