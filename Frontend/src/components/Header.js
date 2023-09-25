import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import logo from "../assets//Logo/logo(full).png";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={logo} alt="my logo img" style={{ heigh: 200, width: 200 }} />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index:1000;
  box-shadow:0 .5rem 1rem rgba(0,0,0,.1);
  padding:10px;
  justify-content: space-between  ;

  .logo {
    height: 5rem;
  }
`;
export default Header;
