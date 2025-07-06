import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { imageName } = useParams();

  return (
    <div>
      <h1>Product Page</h1>
      <p>Image Name: {decodeURIComponent(imageName)}</p>
    </div>
  );
};

export default Product;