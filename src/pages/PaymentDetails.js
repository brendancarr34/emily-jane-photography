import React, { useState, useContext } from 'react';
import { CartContext } from '../components/CartContext';
import CheckoutForm from '../components/CheckoutForm';

const PaymentDetails = () => {
    const { shippingInfo } = useContext(CartContext);
    const [useDifferentBilling, setUseDifferentBilling] = useState(false);
    const [billingInfo, setBillingInfo] = useState({ /* fields */ });

    const handleBillingChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo((prev) => ({ ...prev, [name]: value }));
    };

    const billingData = useDifferentBilling ? billingInfo : shippingInfo;

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={useDifferentBilling}
                    onChange={() => setUseDifferentBilling((v) => !v)}
                />
                Use different billing info
            </label>
            {useDifferentBilling && (
                <p>
                    {/* Billing fields */}
                </p>
            )}
            <CheckoutForm
                formData={billingData}
                shippingInfo={shippingInfo}
                useDifferentBilling={useDifferentBilling}
                // pass other props as needed
            />
        </div>
    );
};

export default PaymentDetails;