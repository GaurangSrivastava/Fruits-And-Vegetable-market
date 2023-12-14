import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
const Product = (curElem) => {
  const { _id, name, image, price, type, stock } = curElem;
  //const [qty, setQty] = useState(1);
  const userId = localStorage.getItem("userId");
  const [isHovered, setIsHovered] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { cartCount, setCartCount } = useCartContext();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddtocart = async () => {
    if (userId !== "") {
      try {
        setAddedToCart(true);
        setCartCount(cartCount + 1);
        const data = await axios.post(
          "http://localhost:5000/api/customer/cart/add",
          {
            userId,
            item: _id,
            qty: 1,
          }
        );

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleRemoveFromCart = async () => {
    if (userId !== "") {
      try {
        setAddedToCart(false);
        setCartCount(cartCount - 1);
        const data = await axios.post(
          "http://localhost:5000/api/customer/cart/delete",
          {
            userId,
            item: _id,
          }
        );

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.post(
          "http://localhost:5000/api/product/isitincart",
          {
            userId,
            itemId: _id,
          }
        );
        setAddedToCart(data.data.exists);
      } catch (error) {
        console.log(error);
      }
    };
    if (userId !== "") fetchData();
  }, []);

  return (
    <Wrapper>
    <div className="card">
      <figure>
        <img src={image} alt={name} />
        <figcaption className="caption">
          {type}
        </figcaption>
      </figure>

      <div className="card-data">
        <div className="card-data-flex">
          <h3>{name}</h3>
          <p className="card-data--price">
            {<FormatPrice price={price} />}/kg
          </p>
        </div>
      </div>

      {/* Pass the product details to AddToCart */}
      {/*<AddToCart product={curElem} /> */}
      {/* <Plusminus qty={qty} setQty={setQty} /> */}
      <div className="card-icons">
          {!addedToCart ? (
            <div
              className={`card-icon cart-plus ${isHovered ? "hovered" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleAddtocart()}
            >
              <span className="add-label">Add</span>
            <span className="plus-sign">+</span>
            </div>
          ) : (
            <div
              className={`card-icon cart-remove ${isHovered ? "hovered" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleRemoveFromCart()}
            >
              Remove
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  figure {
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius:10px;
    transition: all 0.5s linear;
    
    img {
      max-width: 100%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    

    .caption {
      font-family: 'Oswald', sans-serif;
      position: absolute;
      top: 3%;
      right:3%;
      text-transform: uppercase;
      background-color: #90ee90c2;
      color: #174909;
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
      cursor:default;
    }
  }

  .card {
    display: flex;
    width: 250px;
    height: 300px;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    margin: 10px;
    position: relative;
    border-radius: 15px;
    background-color: white;
    box-shadow: -7px 8px 10px rgb(74 110 112 / 25%);
    padding:10px 0;
    .card-data {
         font-size: 18px;
         font-weight: 700;
         margin: 0px;
         width: 90%;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      font-family: 'Barlow', sans-serif;
      color: rgb(9 83 23 / 90%);
      font-weight:bold;
      text-transform: capitalize;
    }

    .card-data--price {
      font-family: 'Oswald', sans-serif;
      font-weight:500;
      color: rgb(17 96 18);
    }
    .card-icons {
    width: 230px; /* Adjust the width as needed */
    display: flex;
    justify-content: space-between; /* Align items to both ends */
    align-items: center; /* Center vertically */
    }
  }
    .card-icon.cart-plus{
    display: flex;
    border:2px solid;
    align-items: center; /* Align items vertically */
    width: 100%;
    height: 4rem;
    background-color: white;
    border-radius: 1rem;
    border-color:#196a3e80;
    opacity: 0.7;
    cursor: pointer;
    background-color: white;
    font-size:1.7rem;
    font-weight: bold;
    color: #159220;
    .add-label {
      padding-left: 5px;
      margin-right: 17rem;
    }
    .plus-sign{
      font-size:2rem;
    }
    &:hover {
      opacity: 1;
    }
    }

    .card-icon.cart-remove {
    display: flex;
    border:2px solid;
    align-items: center; /* Align items vertically */
    justify-content: center;
    width: 100%;
    height: 4rem;
    background-color: white;
    border-radius: 1rem;
    border-color:#196a3e80;
    opacity: 0.7;
    cursor: pointer;
    background-color: white;
    font-size:1.6rem;
    font-weight:650;
    color: #159220;
    &:hover {
      opacity: 1;
    }
    }

`;
export default Product;
