import React from "react";
import { Button } from "react-bootstrap";
import "../Styles/AdminLogin.css";
import { FaFacebook } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import logo from "../Images/Logo.png";

export const AdminLogin = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <img src={logo} width="200px" height="140px" />
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <FaFacebook
              style={{ height: "35px", width: "35px", color: "darkblue" }}
            />
          </a>
          <a href="#" className="social">
            <TiSocialGooglePlus
              style={{ height: "35px", width: "35px", color: "maroon" }}
            />
          </a>
          <a href="#" className="social">
            <FaLinkedin
              style={{ height: "30px", width: "30px", color: "navyblue" }}
            />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <Button>Sign In</Button>
      </form>
    </div>
  );
};
