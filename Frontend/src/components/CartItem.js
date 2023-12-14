import React, { useEffect, useState } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";

import axios from "axios";
const backendURL = process.env.REACT_APP_BACKEND_URL;
const CartItem = ({
  id,
  name,
  image,
  price,
  qty,
  itemDeleted,
  setItemDeleted,
  totalPrice,
  setTotalPrice,
}) => {
  // const { removeItem, setDecrease, setIncrement } = useCartContext();

  // const setDecrease = () => {
  //   amount > 1 ? setAmounts(amount - 1) : setAmounts(1);
  // };

  // const setIncrease = () => {
  //   amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
  // };

  const [amount, setAmount] = useState(qty);
  const userId = localStorage.getItem("userId");
  //const { cartCount, setCartCount } = useCartContext();
  const setDecrease = async (id) => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
    try {
      if (amount > 1) {
        //const newTotalPrice = totalPrice - price;
        setTotalPrice(totalPrice - price);
        const data = await axios.post(
          "${backendURL}/api/customer/cart/updateqty",
          {
            userId,
            item: id,
            qty: amount - 1,
          }
        );
        //console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setIncrement = async (id) => {
    amount <= 19 ? setAmount(amount + 1) : setAmount(20);
    try {
      if (amount < 20) {
        setTotalPrice(totalPrice + price);
        const data = await axios.post(
          "${backendURL}/api/customer/cart/updateqty",
          {
            userId,
            item: id,
            qty: amount + 1,
          }
        );
        //console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id) => {
    try {
      const data = await axios.post(
        "${backendURL}/api/customer/cart/delete",
        {
          userId,
          item: id,
        }
      );

      console.log(data);
      setItemDeleted(!itemDeleted);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrement(id)}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
