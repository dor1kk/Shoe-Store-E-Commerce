import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './paymentForm'; // Assuming PaymentForm.jsx contains your form logic

const stripePromise = loadStripe('your_stripe_public_key');

const PaymentModal = ({ product, quantity, color, size, closeModal }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm
        product={product}
        quantity={quantity}
        color={color}
        size={size}
        closeModal={closeModal}
      />
    </Elements>
  );
};

export default PaymentModal;
