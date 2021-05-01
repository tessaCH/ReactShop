import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisableKey = 'pk_test_51ImE76Bbo39KJole5y18fAaOyI10gXnmMjBBbXvc4rXgE98sBZDMTKbBgyyvpsNiXz31rh4g9IbGzrTIdYYogD5e0028jLOkaV';
  const onToken = token => {
      console.log(token);
      alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Gichy Tech Co." // the pop-in header title
      shippingAddress
      billingAddress={false}
      image="https://svgshare.com/i/CUz.svg" // the pop-in header image (default none)
      description={`Your total is $${price}`} // the pop-in header subtitle
      amount={priceForStripe} // cents
      panelLabel="PAY NOW" // prepended to the amount in the bottom pay button    
      token={onToken} // submit callback
      stripeKey={publisableKey}
      locale="en"
    />
  )
}

export default StripeCheckoutButton;