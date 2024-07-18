import React from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { Button, message } from 'antd';

const PaymentForm = ({ product, quantity, color, size, closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const result = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (result.error) {
        throw result.error;
      }

      message.success('Payment successful!');
      closeModal(); 
    } catch (error) {
      console.error('Error processing payment:', error);
      message.error('Failed to process payment. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '16px' }}>
        <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
      </div>
      <Button type='primary' htmlType='submit' disabled={!stripe}>
        Pay ${product.price * quantity}
      </Button>
    </form>
  );
};

export default PaymentForm;
