import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Header } from "../InitialPages/Header";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [errors, seterrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  const validateData = () => {
    let error = {};
    if (!formData.email.trim()) {
      error.email = "Email is required";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}/.test(formData.email)
    ) {
      error.email = "Email is not valid";
    }
    if (!formData.password) {
      error.password = "password is required";
    } else if (formData.password < 4) {
      error.password = "password must be more than 4 characters";
    } else if (formData.password > 10) {
      error.password = "password should be less than 10 characters";
    }
    seterrors(error);
    return Object.keys(error).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateData()) {
      let url = `http://localhost:8080/logindetails/getUserbyEmail?email=${formData.email}`;
      axios
        .get(url, {
          headers: {
            "Content-Type": "application/json", //required format of data
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            if (response.data.password === formData.password) {
              sessionStorage.setItem("userId", response.data.userId);
              setIsLoggedIn(true);
              setUsername(response.data.userName);
              Swal.fire({
                title: "Login successfully!",
                text: "You have logged in",
                icon: "success",
              });
            } else {
              setIsLoggedIn(false);
              setUsername("");
              Swal.fire({
                title: "Error!",
                text: "Check your credentials",
                icon: "warning",
              });
              navigate("/Home");
            }
          }
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setUsername("");
          Swal.fire({
            title: "Error!",
            text: "Error in fetching",
            icon: "error",
          });
        });
    }
  };
  return (
    <div>
      {isLoggedIn ? (
        <Header isLoggedIn={true} userName={username} />
      ) : (
        <Header isLoggedIn={false} />
      )}

      <div
        className="Personal"
        style={{
          marginTop: "20px",
          marginRight: "350px",
          marginBottom: "100px",
          marginLeft: "350px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <Form className="needs-validation">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                placeholder="Enter Email Id"
                onChange={handleChange}
                name="email"
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group>
            <Button
              variant="outline-danger"
              style={{
                fontSize: 20,
                // backgroundColor: "rgb(160,2,5)",
                marginRight: "2px",
              }}
              onClick={handleSubmit}
              className="mr-2"
            >
              Login
            </Button>
            <Button
              variant="outline-danger"
              style={{
                fontSize: 20,
                marginLeft: "2px",
              }}
              onClick={() => {
                navigate("/RegisterPage");
              }}
            >
              Register
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
