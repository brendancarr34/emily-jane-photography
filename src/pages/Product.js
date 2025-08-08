import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import { CartContext } from '../components/CartContext';
import { Link } from 'react-router-dom';

const Product = () => {
  const { imageId } = useParams();

  const { addToCart } = useContext(CartContext);

  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState('5" x 8"'); // Default size
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Default quantity
  const [selectedBorderSize, setSelectedBorderSize] = useState('none'); // Default border size

  useEffect(() => {
    // Fetch photo info from the API
    fetch('https://superbowl-squares-api-2-637010006131.us-central1.run.app/api/ejt-photography/photo-info')
      .then(response => response.json())
      .then(data => {
        // Construct the images array using the response data
        const constructedImages = data.filter(item => item.id === imageId)
          .map(item => ({
            id: item.id,
            url: `/images/photo${item.id}.jpg`,
            title: item.title,
            price: item.price,
            description: item.description
          }));

        setSelectedImage(constructedImages.find(image => image.id === imageId));
      })
      .catch(error => {
        console.error('Error fetching photo info:', error);
      });
  }, []);

  const styles = {
    photoImage: {
      maxHeight: "70vh",
      maxWidth: "70vw",
      width: "auto",
      height: "auto",
      display: "block",
      margin: "5px",
      border: "20px solid white",
      backgroundColor: "white",
      boxShadow: "0 0 0 5px black"
    },
  }

  // Handlers for modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Menu />
      <div style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '80px' }}>
        <Button
          variant="secondary"
          onClick={() => {
            window.location.href = '/#/collection'; // Replace '/collection' with the actual route to your collection page
          }}
          style={{ marginBottom: '20px', backgroundColor: 'white', color: 'gray', display: 'flex', alignItems: 'center', border: 'none' }}
        >
          <span style={{ marginRight: '10px' }}>←</span> Back to Collection
        </Button>

        <Row>
          <Col>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {selectedImage && selectedImage.title ? (
                <img src={selectedImage.url} style={{ ...styles.photoImage, border: 'none' }} alt={selectedImage.title} />
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </Col>
          <Col style={{ paddingLeft: '20px', paddingTop: '20px' }}>
            <h1>
              {selectedImage && selectedImage.title ? selectedImage.title : ''}
            </h1>

            <p>
              {selectedImage && selectedImage.description ? selectedImage.description : ''}
            </p>

            <Row>
              <Col style={{ minWidth: "100%", paddingLeft: '20px', paddingRight: '20px' }}>
                <form>
                  <Row>
                    <Col style={{ paddingLeft: '0px', width: '50%' }}>
                      <Form.Group className="mb-3" controlId="size">
                        <Form.Label>Size:</Form.Label>
                        <Form.Select onChange={(e) => {
                          const size = e.target.value;
                          console.log(`Selected size: ${size}`);
                          setSelectedSize(size);
                        }}>
                          <option value='5" x 8"'>5" x 8"</option>
                          <option value='8" x 10"'>8" x 10"</option>
                          <option value='12" x 16"'>12" x 16"</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col style={{ paddingRight: '0px', width: '50%' }}>
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
                    <Col style={{ paddingLeft: '0px', width: '50%' }}>
                      <Form.Group className="mb-3" controlId="borderSize">
                        <Form.Label>Border Size:</Form.Label>
                        <Form.Select onChange={(e) => {
                          const selectedBorderSize = e.target.value;
                          console.log(`Selected border size: ${selectedBorderSize}`);
                          setSelectedBorderSize(selectedBorderSize);
                        }}>
                          <option value="none">None</option>
                          <option value="small">3"</option>
                          <option value="medium">5"</option>
                          <option value="large">8"</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center" style={{ paddingRight: '0px', width: '50%' }}>
                      <h5>Price: ${selectedImage?.price}</h5>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
            <br />

            <Button
              variant="primary"
              onClick={() => {
                if (selectedImage) {
                  const cartItem = {
                    ...selectedImage, // Create a new object based on modalImage
                    cartId: Math.floor(Math.random() * 1000000), // Generate a unique cartId
                    size: selectedSize,
                    quantity: selectedQuantity,
                    borderSize: selectedBorderSize,
                  };
                  addToCart(cartItem);
                  handleShowModal();
                }
              }}
              style={{ backgroundColor: 'white', color: 'blue', border: '1px solid blue', display: 'flex', alignItems: 'center' }}
            >
              <strong>Add to Cart...</strong>
            </Button>
          </Col>
        </Row>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your item has been added to the cart.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
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

export default Product;