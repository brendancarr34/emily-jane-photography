import React, { useState } from 'react';
import axios from 'axios';

const OrderButton2 = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleOrder = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3001/create-order', {
      });

      setResponse(res.data);
    } catch (error) {
      console.error('Error making the request:', error);
      setResponse('Error making the request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleOrder} disabled={loading}>
        {loading ? 'Processing...' : 'Place Order'}
      </button>
      {response && <div>Success! ID:{response.order.id}</div>}
    </div>
  );
};

export default OrderButton2;
