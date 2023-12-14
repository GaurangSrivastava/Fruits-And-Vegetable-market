import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cart_context";
import CartAmountToggle from "./CartAmountToggle";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, stock } = product;

  const [amount, setAmount] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [cartState, setCartState] = useState("toggle"); // "toggle" or "decrease"

  const setDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      setCartState("decrease");
    } else {
      setCartState("toggle");
      setShowButton(false);
    }
  };

  const setIncrease = () => {
    if (amount < stock) {
      setAmount(amount + 1);
      setCartState("decrease");
    }
  };

  const toggleButton = () => {
    if (cartState === "toggle") {
      setShowButton(!showButton);
      setCartState("decrease");
    } else {
      addToCart(id, amount, product);
      setCartState("toggle");
    }
  };

  return (
    <Wrapper>
      <div className="toggle-button">
        {showButton && cartState === "decrease" ? (
          <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          />
        ) : (
          <button className="btnStyle" onClick={toggleButton}>
            <span className="add-label">Add</span>
            <span className="plus-sign">+</span>
          </button>
        )}
        {showButton && cartState === "decrease" && (
          <Button className="btn" onClick={toggleButton}>
            Add To Cart
          </Button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .toggle-button {
    border: 1px; 
    width: 220px; 
    bottom: 3%;
    display: flex;
    justify-content: space-between; 
    align-items: center; 
  }
  
  .btnStyle {
    display: flex;
    align-items: center; 
    width: 100%;
    height: 3rem;
    background-color: white;
    border-radius: 1rem;
    border-color:##196a3e80;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    .add-label {
      padding-left: 5px;
      margin-right: 16rem;
      font-weight: bold;
      color: #159220;
    }

    .plus-sign {
      font-size: 1.5rem;
      font-weight: bold;
      color: #159220;
    }
    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  /* we can use it as a global one too  */
  .cart-button{
    width:60px;
    display:flex;
  .amount-toggle {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      color: rgb(64 104 28 / 80%);
      padding: 0.25rem 0.5rem; 
      font-size: 1.3rem;
      display:flex;
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 1.9rem;
      color: rgb(58 183 96);
      cursor:default;
    }
  }
}
.btn{
  text-decoration: none;
  max-width: auto;
  background-color: white;
  color: rgb(14 106 35);
  padding: 1.1rem;
  font-size: 1.2rem;
  border: 2px solid #84a785;
  border-radius:10px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    background-color:lightgreen;
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }
}
`;
export default AddToCart;
