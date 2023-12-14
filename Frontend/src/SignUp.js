import { useState, useEffect } from "react";
import styled from "styled-components";
import Background from "./assets/Login-background.jpg";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "./context/user_context";
const backendURL = process.env.REACT_APP_BACKEND_URL;
function SignUp() {
  const initialValues = {
    username: "",
    email: "",
    name: "",
    password: "",
    address: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { userId, setUserId } = useUserContext();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    try {
      const data = await axios.post(
        `${backendURL}/api/customer/signup`,
        {
          username: formValues.username,
          email: formValues.email,
          name: formValues.name,
          password: formValues.password,
          address: formValues.address,
        }
      );

      console.log(data);
      if (data.data.message === "username already in use") {
        alert("username already in use");
      } else if (data.data.message === "email already in use") {
        alert("email already in use");
      } else {
        localStorage.setItem("userId", data.data.customer._id);
        localStorage.setItem("username", data.data.customer.username);
        setUserId(data.data.customer._id);
        alert("user signed up successfully!");
        navigate("/products");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
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
      <div className="container-signup">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
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
                type="text"
                name="name"
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
              />
              <span></span>
              <label>Name</label>
            </div>
            <p>{formErrors.name}</p>
            <div className="field">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
              <span></span>
              <label>Email</label>
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formValues.address}
                onChange={handleChange}
              />
              <span></span>
              <label>Address</label>
            </div>
            <p>{formErrors.address}</p>
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
            <button className="button-blue">Submit</button>
            <div class="login_link">
              <NavLink className="login_link" to="/login">
                Already a member ? Login
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
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .container-signup {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-width: 500px;
    width: 100%;
    margin: auto;
  }
  .container-signup h1{
    font-family: 'Courgette', cursive;
  color:#2f804e;
  font-weight:700;
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid silver;
  }
  .container-signup> form {
    font-family: 'Great Vibes', cursive;
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
    background: #87ca41;
    transition: .5s;
  }
  .field input:focus ~ label,
  .field input:valid ~ label{
    top: -5px;
    color: #4c7e18;
  }
  .field input:focus ~ span::before,
  .field input:valid ~ span::before{
    width: 100%;
  }
  
  
  .button-blue {
    font-family: 'Great Vibes', cursive;
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: #5eb85ad4;
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
  .login_link{
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}
.login_link a{
  color: #0e6613;
  text-decoration: none;
}
.login_link a:hover{
  text-decoration: underline;
}
`;
export default SignUp;
