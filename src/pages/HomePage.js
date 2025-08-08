import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import { Link } from 'react-router-dom';
import { Modal, Button, Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { CartContext } from "../components/CartContext";
import { Spinner } from 'react-bootstrap';

const HomePage = () => {

  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]); // State for filtered images
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState(null); // State for modal image
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedSize, setSelectedSize] = useState('5" x 8"'); // State for selected size
  const [selectedQuantity, setSelectedQuantity] = useState(1); // State for selected quantity
  const [selectedBorderSize, setSelectedBorderSize] = useState('none'); // State for selected border size
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // State for success modal visibility
  const [selectedFilter, setSelectedFilter] = useState("all"); // State for selected filter
  const [loaded, setLoaded] = useState(false);

  const { addToCart } = React.useContext(CartContext); // Access cart context

  useEffect(() => {

    // Get the selected filter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const filterFromUrl = urlParams.get('collection') || 'all'; // Default to 'all' if no filter is specified

    // Fetch photo info from the API
    fetch('https://superbowl-squares-api-2-637010006131.us-central1.run.app/api/ejt-photography/photo-info')
      .then(response => response.json())
      .then(data => {
        const constructedImages = data.map((item) => ({
          id: item.id,
          url: `/images/photo${item.id}.jpg`,
          title: `${item.title}`,
          price: item.price,
          collection: item.collection,
        }));
        setImages(constructedImages);
        setFilteredImages(filterImages(constructedImages, filterFromUrl)); // Initialize filtered images
        setLoading(false); // Set loading to false after images are fetched
      })
      .catch(error => {
        console.error('Error fetching photo info:', error);
      });

    setSelectedFilter(filterFromUrl); // Update the selected filter state
    handleFilterChange(filterFromUrl); // Apply the filter to the images
  }, []);

  const handleFilterChange = (selectedFilter) => {
    if (selectedFilter === "all" || selectedFilter === "") {

      setFilteredImages(images); // Show all images
    } else {
      const filtered = images.filter(image => image.collection === selectedFilter);
      setFilteredImages(filtered); // Update filtered images
    }
  };

  const filterImages = (images, filter) => {
    if (filter === "all") {
      return images; // Return all images if filter is "all"
    }
    const filtered = images.filter(image => image.collection === filter);
    return filtered; // Return filtered images
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="cart-wrapper d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Menu />
      <div>
        <br />
        <br />
      </div>
      <div>
        <Container style={{ textAlign: "center", paddingTop: "40px", margin: "0", width: "100vw", minWidth: "100vw", paddingRight: "40px" }}>
          <Row style={{ width: "100vw" }}>
            <Col style={{ display: "flex", justifyContent: "flex-end", paddingRight: "20px" }}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Form.Group controlId="filterDropdown" style={{ display: "flex", alignItems: "center" }}>
                  <Form.Label style={{ marginRight: "10px", marginBottom: "0" }}>Collection:</Form.Label>
                  <Form.Select
                    value={selectedFilter} // Bind the value to the state
                    onChange={(e) => {
                      const selectedFilter = e.target.value;
                      const urlParams = new URLSearchParams(window.location.search);
                      urlParams.set('collection', selectedFilter);
                      window.history.replaceState(null, '', `${window.location.pathname}?${urlParams.toString()}`);
                      handleFilterChange(selectedFilter);
                      setSelectedFilter(selectedFilter); // Update the selected filter state
                    }}
                  >
                    <option value="all">All</option>
                    <option value="California">California</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="NorthCarolina">North Carolina</option>
                    <option value="Film">Film</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <>
        {loading ? (
          <div style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spinner animation="border" role="status" style={{ width: '4rem', height: '4rem', color: '#A7C7E7' }}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <div style={{ textAlign: "center", paddingTop: "1.5rem" }}>
            {(filteredImages.length === 0) && (
              <p>No images found for the selected collection.</p>
            )}
            <main style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(120px, 1fr))`, gap: "1rem", padding: "1rem", maxWidth: "1200px", margin: "0 auto" }}>
              {filteredImages.map((photo, index) => (
                <div key={index} style={{ border: "1px solid #ddd", padding: "1rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  opacity: loaded ? 1 : 0,
                      transition: "opacity 1s ease"
                 }}>
                  <img
                    src={photo.url}
                    alt={`Photo ${index + 1}`}
                    style={{ maxWidth: "100%", 
                      height: "auto", 
                      display: "block", 
                      margin: "5px", 
                      border: "10px solid white", 
                      backgroundColor: "white", 
                      boxShadow: "0 0 0 5px black",
                    }}
                    onLoad={() => setLoaded(true)}
                    onClick={() => openModal(photo)}
                  />
                  <div style={{ alignSelf: "flex-start", textAlign: "left", marginTop: "1rem" }}>
                    <p>{photo.title}</p>
                  </div>
                </div>
              ))}
            </main>
          </div>
        )}
      </>

      <footer style={{
        marginTop: 'auto',
        width: '100%',
        backgroundColor: '#A7C7E7',
        padding: '30px',
        textAlign: 'center',
      }}>
        <p style={{ margin: 0 }}>© 2025 Emily Jane Photography</p>
      </footer>

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
                          style={{ width: "40px", height: "40px", borderColor: "lightgray" }}
                          onClick={() => {
                            const quantityInput = document.getElementById("quantity");
                            const currentValue = parseInt(quantityInput.value, 10) || 1;
                            quantityInput.value = Math.max(1, currentValue - 1);
                            setSelectedQuantity(quantityInput.value);
                          }}
                        >
                          -
                        </Button>
                        <Form.Control
                          type="number"
                          min="1"
                          defaultValue="1"
                          style={{ textAlign: "center", margin: "0 10px", pointerEvents: "none", width: "100%", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "20px" }}
                          readOnly={true}
                          onChange={(e) => {
                            const quantity = Math.max(1, parseInt(e.target.value, 10) || 1);
                            setSelectedQuantity(quantity);
                          }}
                        />
                        <Button
                          variant="outline-secondary"
                          style={{ width: "40px", height: "40px", borderColor: "lightgray" }}
                          onClick={() => {
                            const quantityInput = document.getElementById("quantity");
                            const currentValue = parseInt(quantityInput.value, 10) || 1;
                            quantityInput.value = currentValue + 1;
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
                    <h5 style={{ margin: 0 }}>Price: ${modalImage?.price}</h5>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Link to={`/product/${modalImage?.id}`}>
            <Button style={{ backgroundColor: "lightgray", color: "black", border: 'none' }} variant="secondary">Go to Product Page</Button>
          </Link>
          <Button variant="primary"
            style={{ backgroundColor: "#A7C7E7", color: "black", border: 'none' }}
            onClick={() => {
              const cartItem = {
                ...modalImage, // Create a new object based on modalImage
                cartId: Math.floor(Math.random() * 1000000), // Generate a unique cartId
                size: selectedSize,
                quantity: selectedQuantity,
                borderSize: selectedBorderSize,
              };
              addToCart(cartItem); // Call the addToCart function from context
              setSelectedSize('5" x 8"'); // Reset size to default
              setSelectedQuantity(1); // Reset quantity to default
              setSelectedBorderSize('none'); // Reset border size to default
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