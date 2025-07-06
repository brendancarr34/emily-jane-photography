import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';

const Product = () => {
    const { imageId } = useParams();

    const [selectedImage, setSelectedImage] = useState(null);
    const [customerName, setCustomerName] = useState("");

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
              price: item.price
            }));
          
          setSelectedImage(constructedImages.find(image => image.id === imageId));
        })
        .catch(error => {
          console.error('Error fetching photo info:', error);
        });
    }, []);

    const styles = {
        photoImage: {
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "5px",
            border: "20px solid white", 
            backgroundColor: "white",
            boxShadow: "0 0 0 5px black"
          },
    }

    const handleOrder = async () => {

      if (!customerName) {
        alert("Please enter your name before placing an order.");
        return;
      }

      const orderData = {
        customerName: customerName, // Replace with actual customer name
        item: decodeURIComponent(imageId),
        quantity: 1, // Replace with actual quantity
        price: 100 // Replace with actual price
      };

      try {
        const response = await fetch('https://superbowl-squares-api-2-637010006131.us-central1.run.app/api/ejt-photography/orders', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });

        const data = await response.json();
        
        if (response.ok) {
          alert(`Order placed successfully: ${data.message}`);
        } else {
          alert(`Error: ${data.error}`);
        }
      } catch (error) {
        console.error('Error placing order:', error);
        alert('Error placing order. Please try again.');
      }
    };

    return (
      <div>
        <Menu/>
        <div style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '80px' }}>
          {selectedImage && selectedImage.title != null ? <img src={selectedImage.url} style={styles.photoImage} /> : <p>Loading...</p>}
          <h1 style={{paddingTop: '20px' }}>{selectedImage && selectedImage.title != null ? `${selectedImage.title}` : ''}</h1>
          {/* Input box for customer name */}
          <input
            type="text"
            placeholder="Enter your name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <button onClick={handleOrder}>Place Order</button>
          <p>{selectedImage && selectedImage.price != null ? `Price: $${selectedImage.price}` : ''}</p>
        </div>
      </div>
    );
};

export default Product;