import React, { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from '../context/cart_context';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCalendar, faLock } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#7ac495a6",
      color: "#0d5523a1",
      fontWeight: 500,
      fontFamily: "'Oswald', sans-serif",
      fontSize: "19px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#67b5568c" },
      "::placeholder": { color: "#67b5568c" },
      border: "1px solid #ccc", // Add border around the card elements
      borderRadius: "5px", // Add border-radius
      padding: "10px", // Add padding
      position: "relative", // Position relative for icons
    },
    invalid: {
      iconColor: "#d06060",
      color: "#d06060",
    },
  },
};

const CheckOutPage = () => {
  const userId = localStorage.getItem("userId");
  const stripe = useStripe();
  const elements = useElements();
  const [cart, setCart] = useState([]);
  const { setCartCount } = useCartContext();
  const navigate = useNavigate();
  const location = useLocation();
  const totalPrice = location.state.subtotal;
  console.log(totalPrice);
  const clearCart = async () => {
    setCart([]);
    try {
      const data = await axios.post(
        "http://localhost:5000/api/customer/cart/clear",
        {
          userId,
        }
      );
      setCartCount(0);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const { token, error } = await stripe.createToken(cardNumberElement);

    if (error) {
      navigate("/payment-failed");
    } else {
      try {
        const response = await axios.post("http://localhost:5000/api/payment", {
          amount: totalPrice * 100, // Stripe requires amount in cents
          token: token.id,
        });

        if (response.data.success) {
          clearCart(); // Call clearCart function on successful payment
          console.log("payment success");
          navigate("/payment-successfull");
        } else {
          console.log("payment failed");
          navigate("/payment-failed");
        }
      } catch (error) {
        console.error(error);
        navigate("/payment-failed");
      }
    }
  };

  return (
    <Wrapper>
    <div className="payment-container">
      <div className="payment-form">
     <h2><span className="main-icon"><FontAwesomeIcon icon={faCreditCard} />&nbsp; </span>Secure Payment</h2>
    <form onSubmit={handlePayment}>
    <div className="card-element">
      <label className="card-label"><FontAwesomeIcon icon={faCreditCard}/>Card Number</label>
      <CardNumberElement className="card-input" />
    </div>
    <div className="card-row">
      <div className="card-element">
        <label className="card-label"><FontAwesomeIcon icon={faCalendar} /> Expiration Date</label>
        <CardExpiryElement className="card-input" />
      </div>
      <div className="card-element">
        <label className="card-label"><FontAwesomeIcon icon={faLock} /> CVC</label>
        <CardCvcElement className="card-input" />
      </div>
    </div>
    <button type="submit">Confirm Payment</button>
  </form>
</div>
</div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .payment-container {
    width: 360px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .payment-form {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .main-icon{
    color:#11871be3;
    font-size:2.1rem;
  }
  h2 {
    font-family: 'Courgette', cursive;
    font-weight:700;
    margin-bottom: 20px;
    color:#31950a;
    font-size: 24px;
    display: flex;
    align-items: center;
  }
  
  .card-element {
    margin-bottom: 20px;
  }
  
  .card-row {
    
    justify-content: space-between;
  }
  
  .card-label {
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    color: #3d905c;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }
  
  .card-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    color: #15760a;
    box-shadow:inset 0 0 5px 1px rgb(0 255 52 / 33%);
    transition: border-color 0.3s ease-in-out;
  }
  .card-input:invalid{
    color:#d06060;
  }
    button {
      width: 100%;
      height: 5rem;
      margin-top: 20px;
      background-color: #3fab43e0;
      border: none;
      border-radius: 10px;
      color: white;
      font-family: Courgette, cursive;
      font-weight: 600;
      font-size: 2rem;
    }
    button:hover {
      background-color: #2a8f2e9c;
    }
`;

export default CheckOutPage;
