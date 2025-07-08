import React, { useState, useEffect, useContext } from "react";
import Menu from "../components/Menu";
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { CartContext } from "../components/CartContext";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState(null); // State for modal image
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedSize, setSelectedSize] = useState('5" x 8"'); // State for selected size
  const [selectedQuantity, setSelectedQuantity] = useState(1); // State for selected quantity
  const [selectedBorderSize, setSelectedBorderSize] = useState('none'); // State for selected border size
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // State for success modal visibility

  const { addToCart } = React.useContext(CartContext); // Access cart context

  useEffect(() => {
    // Fetch photo info from the API
    fetch('https://superbowl-squares-api-2-637010006131.us-central1.run.app/api/ejt-photography/photo-info')
      .then(response => response.json())
      .then(data => {
        const constructedImages = data.map((item) => ({
          id: item.id,
          url: `/images/photo${item.id}.jpg`,
          title: `${item.title}`,
          price: item.price,
          // description: item.description,
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
                      <Form.Select onChange={(e) => {
                        const size = e.target.value || '5" x 8"'; // Set default size if no value is selected
                        console.log(`Selected size: ${size}`);
                        setSelectedSize(size);
                      }}>
                        <option value={`5" x 8"`}>5" x 8"</option>
                        <option value={`8" x 10"`}>8" x 10"</option>
                        <option value={`12" x 16"`}>12" x 16"</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="quantity">
                      <Form.Label>Quantity:</Form.Label>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Button
                          variant="outline-secondary"
                          style={{ width: "40px", height: "40px" }}
                          onClick={() => {
                            const quantityInput = document.getElementById("quantity");
                            const currentValue = parseInt(quantityInput.value, 10) || 1;
                            quantityInput.value = Math.max(1, currentValue - 1);
                            console.log(`Updated quantity: ${quantityInput.value}`);
                            setSelectedQuantity(quantityInput.value);
                          }}
                        >
                          -
                        </Button>
                        <Form.Control
                          type="number"
                          min="1"
                          defaultValue="1"
                          style={{ textAlign: "center", margin: "0 10px", pointerEvents: "none" }}
                          readOnly={true}
                          onChange={(e) => {
                            const quantity = Math.max(1, parseInt(e.target.value, 10) || 1);
                            console.log(`Selected quantity: ${quantity}`);

                          }}
                        />
                        <Button
                          variant="outline-secondary"
                          style={{ width: "40px", height: "40px" }}
                          onClick={() => {
                            const quantityInput = document.getElementById("quantity");
                            const currentValue = parseInt(quantityInput.value, 10) || 1;
                            quantityInput.value = currentValue + 1;
                            console.log(`Updated quantity: ${quantityInput.value}`);
                            setSelectedQuantity(quantityInput.value);
                          }}
                        >
                          +
                        </Button>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="borderSize">
                      <Form.Label>Border Size:</Form.Label>
                      <Form.Select onChange={(e) => {
                        const selectedBorderSize = e.target.value || 'none';
                        console.log(`Selected border size: ${selectedBorderSize}`);
                        setSelectedBorderSize(selectedBorderSize);
                      }}>
                        <option value="none">None</option>
                        <option value='3"'>3"</option>
                        <option value='5"'>5"</option>
                        <option value='8"'>8"</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-center">
                    <h5>Price: ${modalImage?.price}</h5>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Link to={`/product/${modalImage?.id}`}>
            <Button style={{ backgroundColor: "lightgray", color: "black" }} variant="secondary">Go to Product Page</Button>
          </Link>
          <Button variant="primary" onClick={() => {
            modalImage.size = selectedSize;
            modalImage.quantity = selectedQuantity;
            modalImage.borderSize = selectedBorderSize;
            console.log(`Added ${JSON.stringify(modalImage)} to cart`);
            addToCart(modalImage); // Call the addToCart function from context
            closeModal();
            // Open success modal
            setIsSuccessModalOpen(true);
          }}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={isSuccessModalOpen} onHide={() => setIsSuccessModalOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your item has been added to the cart.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsSuccessModalOpen(false)}>
            Back to Gallery 
          </Button>
          <Link to="/cart">
            <Button variant="primary">
              Go to Cart
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};


export default HomePage;