import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';

const Product = () => {
    const { imageName } = useParams();
    const [customerName, setCustomerName] = useState(""); // State for customer name


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
      const orderData = {
        customerName: customerName || "John Doe 100", // Replace with actual customer name
        item: decodeURIComponent(imageName),
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
          <img src={imageName} style={styles.photoImage} />
          <p>Image Name: {decodeURIComponent(imageName)}</p>
          {/* Input box for customer name */}
          <input
            type="text"
            placeholder="Enter your name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <button onClick={handleOrder}>Place Order</button>
        </div>
      </div>
    );
};

export default Product;