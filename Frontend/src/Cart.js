import styled from "styled-components";
import { useCartContext } from "./context/cart_context";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import FormatPrice from "./Helpers/FormatPrice";
import { useEffect, useState } from "react";
import axios from "axios";
import img from "./assets/empty-cart.png"
import { useNavigate } from 'react-router-dom';
const backendURL = process.env.REACT_APP_BACKEND_URL;
const Cart = () => {
  const userId = localStorage.getItem("userId");
  const { setCartCount } = useCartContext();
  const [itemDeleted, setItemDeleted] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate=useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.post(
          "${backendURL}/api/customer/cart/all",
          {
            userId,
          }
        );
        const cartItem = data.data.cartItems;
        //console.log(cartItem);
        const itemDetailsPromises = cartItem.map(async (item) => {
          const itemResponse = await axios.post(
            `${backendURL}/api/product/detail`,
            {
              itemId: item.item,
            }
          );
          //console.log(item);
          return {
            id: itemResponse.data.item._id,
            name: itemResponse.data.item.name,
            price: itemResponse.data.item.price,
            image: itemResponse.data.item.image,
            qty: item.qty,
          };
        });

        const cartItemsDetails = await Promise.all(itemDetailsPromises);
        const initialTotalPrice = cartItemsDetails.reduce(
          (total, item) => total + item.qty * item.price,
          0
        );

        setTotalPrice(initialTotalPrice);
        setCart(cartItemsDetails);
        setCartCount(cartItemsDetails.length);
      } catch (err) {
        console.log(err);
      }
    };
    if (userId !== "") getData();
  }, [itemDeleted]);

  const clearCart = async () => {
    setCart([]);
    try {
      const data = await axios.post(
        "${backendURL}/api/customer/cart/clear",
        {
          userId,
        }
      );
      setCartCount(0);
    } catch (error) {
      console.log(error);
    }
  };

  if (cart?.length === 0) {
    return (
      <EmptyDiv>
        <img src={img} alt="cart"/>
        <h3>No Items in Cart </h3>
      </EmptyDiv>
    );
  }
  const navigateToCheckOutPage = () => {
    // Pass additional props to CheckOutPage
    const subtotal = totalPrice + 30;
    navigate("/CheckOutPage", { state: { subtotal } });
  };
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div>
        <div className="all-item-container">
        <div className="cart_heading grid grid-five-column">
          <h3>Item</h3>
          <h3 className="cart-hide">Price</h3>
          <h3>Quantity</h3>
          <h3 className="cart-hide">Subtotal</h3>
          <h3>Remove</h3>
        </div>
        <hr />
        <div className="cart-item">
          {cart?.map((curElem) => {
            return (
              <CartItem
                key={curElem._id}
                itemDeleted={itemDeleted}
                setItemDeleted={setItemDeleted}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                {...curElem}
              />
            );
          })}
        </div>
        <div className="cart-two-button">
          <NavLink to="/products">
            <Button style={{ 
              backgroundColor: "#64ba62f5",
              borderRadius: "10px"
             }}>
              Continue Shopping
            </Button>
          </NavLink>
          <Button className="btn btn-clear" style={{ backgroundColor: "#e74c3c",borderRadius: "10px" }}onClick={() => clearCart()}>
            Clear Cart
          </Button>
        </div>
        </div>       

        </div>
        {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <h2>Price Details:</h2>
            <hr />
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={totalPrice} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price="30" />
              </p>
            </div>
            <hr />
            <div>
              <p>Order total:</p>
              <p>
                <FormatPrice price={30 + totalPrice} />
              </p>
            </div>
            <Button
               onClick={navigateToCheckOutPage}
               style={{ backgroundColor: "#64ba62f5", color: "white",borderRadius: "10px"}}
             >
                Place Order
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const EmptyDiv = styled.div`
  display: flex;
  flex-direction:column;
  place-items: center;
  align-items:center;
  justify-content:center;
  height: 50vh;
  img{
    width:250px;
    padding-right:30px;
  }
  h3 {
    font-family: 'Oswald';
    font-style: normal;
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

const Wrapper = styled.section`
  padding: 9rem 0;

.container{
  display: grid;
  gap: 5rem;
  .all-item-container{
    border:1px solid #e2dcdccf;
    border-radius:10px;
    padding:20px;
    box-shadow: 0px 0px 6px 4px rgb(0 0 0 / 10%);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 80px) 1fr;
    text-align: center;
    align-items: center;
  }
  .cart_heading {
    text-align: center;
    h3{
      font-size:1.8rem;
      font-weight:600;
      color:#808580cc;

    }
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    font-family: 'Oswald', sans-serif;
    padding: 2.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      border-radius:15px;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: inherit;
    align-items: center;

    .order-total--subdata {
      width:100%; 
      border: 0.1rem solid #f0f0f0;
      box-shadow: 0px 0px 6px 4px rgb(0 0 0 / 10%);
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;

      h2{
        font-family: 'Courgette', cursive;
        font-size:3rem;
        font-weight:600;
        color:#383d3899;
      }
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #edededad;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
}
`;

export default Cart;
