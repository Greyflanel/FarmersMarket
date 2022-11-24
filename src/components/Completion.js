import {useEffect, useState, useContext} from 'react';
import { CartContext } from "../Contexts/CartContext";


function Completion(props) {
  const [ messageBody, setMessageBody ] = useState('');
  const { stripePromise } = props;
  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
   
    if (!stripePromise) return;
    
    stripePromise.then(async (stripe) => {
      const url = new URL(window.location);
      const clientSecret = url.searchParams.get('payment_intent_client_secret');
      
      const { error, paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
      
      setMessageBody(error ? `> ${error.message}` : (
        <>&gt; Payment {paymentIntent.status}: <a href={`https://dashboard.stripe.com/test/payments/${paymentIntent.id}`} target="_blank" rel="noreferrer">{paymentIntent.id}</a></>
      ));
      
    });
    
  }, [stripePromise, messageBody]);
 
  return (
    <div className="completion-container">
      <div className="payment-completion">
        <h1>Payment was Successful</h1>
        <h2>Thank you!</h2>
      <a className="payment-completion-home-button" href="/">Home</a>
      <div id="messages" role="alert" style={messageBody ? {display: 'block'} : {}}>{messageBody}</div>
      </div>
    </div>
  );
}

export default Completion;
