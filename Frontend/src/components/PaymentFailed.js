import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
const PaymentFailed = () => {
  return (
    <Wrapper>
      <div className="payment-container">
        <div className="icon">
        <FontAwesomeIcon icon={faTimesCircle} size="5x" color="#c50b19c7" />
        </div>
        <h1>Payment Failed</h1>
        <div className="button-container">
        <NavLink to="/">
          <button>Back to Home</button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set a height to center vertically on the page */

  .payment-container {
    text-align: center;
    background-color: #f0f0f0; /* Add a background color */
    padding: 20px; /* Add padding to create a small box */
    border-radius: 8px; /* Add rounded corners */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a shadow for depth */
    h1{
        font-family: 'Courgette', cursive;
        color:#a71d27e3;
    }
  }

  .icon {
    margin-bottom: 20px; /* Add some space between the icon and the message */
  }

  .button-container {
    margin-top: 20px; /* Add some space between the message and the button */
  }

  button {
    font-family: 'Oswald', sans-serif;
    padding: 10px 20px; /* Adjust button padding for better appearance */
    background-color: #1b6a3ae3; /* Button background color */
    color: #fff; /* Button text color */
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  button:hover{
    background-color: #1b6a3aad;
  }
`;

export default PaymentFailed   