import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";
import { useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../context/user_context";
import img1 from "../assets/user-icon.png"
const backendURL = process.env.REACT_APP_BACKEND_URL;
const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const [totalItem, setTotalItem] = useState(0);
  //const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const { cartCount, setCartCount } = useCartContext();
  //const [profile, setProfile] = useState("");
  const { userId, setUserId, profile, setProfile } = useUserContext();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.post(
          "${backendURL}/api/customer/cart/all",
          {
            userId,
          }
        );
        const data2 = await axios.post(
          "${backendURL}/api/customer/detail",
          {
            userId,
          }
        );

        setCartCount(data.data.cartItems.length);
        setProfile(data2.data.profilepic);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userId]);

  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          font-family: 'Courgette', cursive;
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #0e580c;
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: #3c8f3a;
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
        font-weight:500;
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/predicter"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Predictor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span
                className="cart-total--item"
                style={{ backgroundColor: "#3c8f3a", color: "white" }}
              >
                {" "}
                {cartCount}{" "}
              </span>
            </NavLink>
          </li>
          {userId !== "" ? (
            <>
              <li>
                <NavLink to="/profile" onClick={() => setMenuIcon(false)}>
                  <div
                    style={{
                      padding: "15px",
                    }}
                  >
                    {profile != "none" ? (
                      <img
                        src={profile}
                        alt="profile pic"
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "100%",
                          //border: "5px solid #609860",
                        }}
                      />
                    ) : (
                      <img 
                          src={img1} 
                          alt="user"
                          />
                      
                    )}
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    localStorage.setItem("userId", "");
                    setUserId("");
                    setMenuIcon(false);
                    setCartCount(0);
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Courgette', cursive",
                  backgroundColor: "rgb(66 149 47)",
                  color: "white",
                  fontSize: "1.8rem",
                  padding: "15px",
                  fontWeight: "500",
                  borderRadius: "10px"
                    }}
                  >
                    Log Out
                  </div>
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="/signup" onClick={() => setMenuIcon(false)}>
                <div
                  style={{
                  fontFamily: "'Courgette', cursive",
                  backgroundColor: "#42952f",
                  color: "white",
                  fontSize: "1.8rem",
                  padding: "15px",
                  fontWeight: "500",
                  borderRadius: "10px",
                  transition: "background-color 0.3s"
                  }}
                  onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#42952fc7";
                   }}
                  onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#42952f";
                   }}
                >
                  Sign Up
                </div>
              </NavLink>
            </li>
          )}
        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;
