import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51JjdxoSJDuh8xp0UCjQADlHBo1A6QKcWwUlK4wolGN99n4JEvxM4KrXrYiozLxFaAopxO1jIehxO1tzZyoepEOAs00H233YWoS'

  const onToken = (token) => {
    console.log(token)
    alert('Payement Successfull')
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown-Shop "
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is Rs${price}`}
      currency="INR"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
