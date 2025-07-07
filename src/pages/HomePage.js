import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState(null); // State for modal image
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    // Fetch photo info from the API
    fetch('https://superbowl-squares-api-2-637010006131.us-central1.run.app/api/ejt-photography/photo-info')
      .then(response => response.json())
      .then(data => {
        const constructedImages = data.map((item) => ({
          id: item.id,
          url: `/images/photo${item.id}.jpg`,
          title: `${item.title}`
        }));
        setImages(constructedImages);
      })
      .catch(error => {
        console.error('Error fetching photo info:', error);
      });
    setLoading(false);
  }, []);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div>
      <Menu />
      <div>
        <br />
        <br />
      </div>
      <div>
        {loading && <p>Loading...</p>}
        {!loading && (
          <main style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem", padding: "1rem" }}>
            {images.map((photo, index) => (
              <div key={index} style={{ border: "1px solid #ddd", padding: "1rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <img
                  src={photo.url}
                  alt={`Photo ${index + 1}`}
                  style={{ maxWidth: "100%", height: "auto", display: "block", margin: "5px", border: "10px solid white", backgroundColor: "white", boxShadow: "0 0 0 5px black" }}
                  onClick={() => openModal(photo)} // Open modal on click
                />
                <div style={{ alignSelf: "flex-start", textAlign: "left", marginTop: "1rem" }}>
                  <p>{photo.title}</p>
                </div>
              </div>
            ))}
          </main>
        )}
      </div>

      <Modal show={isModalOpen} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalImage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center">
            <Col className="text-center">
              <img
                src={modalImage?.url}
                alt={modalImage?.title}
                style={{ maxWidth: "100%", height: "auto", marginBottom: "1rem", minWidth: "90%", maxHeight: "300px", objectFit: "scale-down" }}
              />
            </Col>
            <Col style={{ minWidth: "100%" }}>
              <form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="size">
                      <Form.Label>Size:</Form.Label>
                      <Form.Select>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="quantity">
                      <Form.Label>Quantity:</Form.Label>
                      <Form.Control type="number" min="1" defaultValue="1" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="borderSize">
                  <Form.Label>Border Size:</Form.Label>
                  <Form.Select>
                    <option value="none">None</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </Form.Select>
                </Form.Group>
              </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Link to={`/product/${modalImage?.id}`}>
            <Button style={{ backgroundColor: "lightgray", color: "black" }} variant="secondary">Go to Product Page</Button>
          </Link>
          <Button variant="primary" onClick={() => {
            // Add to cart logic here
            alert(`Added ${modalImage?.title} to cart`);
            closeModal();
          }}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HomePage;