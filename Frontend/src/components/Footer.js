import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <footer /*style={{ marginTop: "45px" }}*/>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Novues Vegies</h3>
              <p>Veggie Delights: Fresh Picks for Your Healthy Bites! </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input
                  type="submit"
                  value="subscribe"
                  class="subscribe-button"
                />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <a href="#" target="">
                    <FaTwitter className="icons" />
                  </a>
                </div>
                <div>
                  <a href="#" target="">
                    <FaInstagram className="icons" />
                  </a>
                </div>
                <div>
                  <a href="#" target="">
                    <FaFacebook className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>
                <NavLink to="/contact" className="footer-link">
                  CONTACT US
                </NavLink>
              </h3>
              <h3>
                <NavLink to="/privacy-policy" className="footer-link">
                  PRIVACY POLICY
                </NavLink>
              </h3>
              <h3>
                <NavLink to="/terms&condition" className="footer-link">
                  TERMS & CONDITIONS
                </NavLink>
              </h3>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    font-family:'Poppins', sans-serif;
    padding: 14rem 0 9rem 0;
    background-color: #61a261;
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .subscribe-button {
      background-color:#436234;
      border: none;
      border-radius: 10px;
      transition: background-color 0.3s;
      opacity:1;
    }

    .subscribe-button:hover {
      background-color: #436234;
      opacity:0.8;
    }
    
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2rem;
          position: relative;
          cursor: pointer;
         
        }
        
      }
    }
    .footer-link{
      font-family:'Poppins', sans-serif;
      color:${({ theme }) => theme.colors.white};
      font-size:1.6rem;
      font-weight:500;
      &:hover,
      &:active{
        color: #0c5005
      }
      
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
