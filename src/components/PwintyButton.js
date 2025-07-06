import React, { useState } from 'react';

const PwintyButton = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const result = await fetch('https://api.sandbox.prodigi.com/v4.0/Orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        //   'X-Pwinty-MerchantId': 'YOUR_MERCHANT_ID', // Replace with your Merchant ID
          'X-Pwinty-REST-API-Key': '4c5abfeb-c442-4e68-8d7b-daf4a9f03b00',   // Replace with your API Key
        },
        body: JSON.stringify({
            "merchantReference": "MyMerchantReference1",
            "shippingMethod": "Overnight",
            "recipient": {
                "name": "Mr Testy McTestface",
                "address": {
                    "line1": "14 test place",
                    "line2": "test",
                    "postalOrZipCode": "12345",
                    "countryCode": "US",
                    "townOrCity": "somewhere",
                    "stateOrCounty": null
                }
            },
            "items": [
                {
                    "merchantReference": "item #1",
                    "sku": "GLOBAL-CFPM-16X20",
                    "copies": 1,
                    "sizing": "fillPrintArea",
                    "attributes": {
                        "color": "black"
                    },
                    "recipientCost": {
                        "amount": "15.00",
                        "currency": "USD"
                    },
                    "assets": [
                        {
                            "printArea": "default",
                            "url": "https://pwintyimages.blob.core.windows.net/samples/stars/test-sample-grey.png",
                            "md5Hash": "daa1c811c6038e718a23f0d816914b7b"
                        }
                    ]
                }
            ],
            "metadata": {
                "mycustomkey":"some-guid",
                "someCustomerPreference": {
                    "preference1": "something",
                    "preference2": "red"
                },
                "sourceId": 12345
            }
        }),
      });

      if (!result.ok) {
        throw new Error(`Error: ${result.status} ${result.statusText}`);
      }

      const data = await result.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Submit to Pwinty'}
      </button>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div style={{ color: 'red' }}>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default PwintyButton;
