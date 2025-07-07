import Menu from "../components/Menu";
// import { Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const HomePage = () => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch photo info from the API
    fetch('https://superbowl-squares-api-2-637010006131.us-central1.run.app/api/ejt-photography/photo-info')
      .then(response => response.json())
      .then(data => {
        // Construct the images array using the response data
        const constructedImages = data.map((item) => ({
          id: item.id,
          url: `/images/photo${item.id}.jpg`,
          title: `${item.title}` // Placeholder title, can be customized
        }));
        setImages(constructedImages);
      })
      .catch(error => {
        console.error('Error fetching photo info:', error);
      });
    setLoading(false);
  }, []);

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
      gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", // Adjusts to smaller windows
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
      border: "10px solid white", 
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
    <div>
      <Menu/>
      <div>
        <br/>
        <br/>
      </div>
      <div style={styles.homepage}>
        {loading && <p>Loading...</p>}
        {!loading && (
          <main style={styles.photoGrid}>
            {images.map((photo, index) => (
              <div key={index} style={styles.photoCard}>
                <Link to={`/product/${photo.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                  <img
                    src={photo.url}
                  alt={`Photo ${index + 1}`}
                  style={styles.photoImage}
                />
                <div style={styles.photoInfo}>
                  <p>{photo.title}</p>
                </div>
              </Link>
            </div>
          ))}
        </main>)}
      </div>
      
    </div>
  );  
};

export default HomePage;
