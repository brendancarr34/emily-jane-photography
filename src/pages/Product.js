import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { imageName } = useParams();

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

  return (
    <div style = {{paddingLeft:'100px', paddingRight:'100px', paddingTop:'40px'}}>
        <img src={imageName}
            style={styles.photoImage}/>
      <p>Image Name: {decodeURIComponent(imageName)}</p>
      
    </div>
  );
};

export default Product;