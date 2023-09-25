import React from 'react';
import { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import Background from "./assets/Login-background.jpg"
function Login() {
  const initialValues = { username: "",  password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <Wrapper>
    <div className="container-login">
      <form onSubmit={handleSubmit}>
        <h1>Login </h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
             <span></span>
           <label>Username</label>
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
              <span></span>
              <label>Password</label>
            
          </div>
          <p>{formErrors.password}</p>
          <button className="button-blue">Login</button>
          <div class="signup_link">
          <NavLink className="signup_link" to="/signup">
              Not a member? Signup
            </NavLink>
        </div>
        </div>
      </form>
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width:100%;
height:100%;
background-image:url(${Background});
background-size: 100%;
background-repeat: no-repeat;
.container-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: auto;
}
.container-login h1{
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
}
.container-login > form {
  width: 70%;
  border: 1px solid #dfdfdf;
  padding: 20px;
  border-radius: 10px;
  background: #ffffffc3;
}
form .field{
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}
.field input{
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
.field label{
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: .5s;
}
.field span::before{
  content: '';
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #2691d9;
  transition: .5s;
}
.field input:focus ~ label,
.field input:valid ~ label{
  top: -5px;
  color: #2691d9;
}
.field input:focus ~ span::before,
.field input:valid ~ span::before{
  width: 100%;
}
pre {
  width: 70%;
  color: #fff;
  font-size: larger;
}

.button-blue {
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: #2691d9;
  border-radius: 25px;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
}
.button-blue:hover{
  border-color: #2691d9;
  transition: .5s;
}
.signup_link{
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}
.signup_link a{
  color: #2691d9;
  text-decoration: none;
}
.signup_link a:hover{
  text-decoration: underline;
}
`;
export default Login;