import { Button, Form, FloatingLabel } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Header } from "./Header";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    userName: "",
    password: "",
    mobileNumber: "",
    policyNumber: "",
    applicationNumber: "",
    dob: "",
    email: " ",
  });
  const [Errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
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
    if (!formData.mobileNumber.trim()) {
      error.mobileNumber = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      error.mobileNumber = "Mobile Number is not valid";
    }

    if (!formData.dob.trim()) {
      error.dob = "Invalid date of birth";
    } else if (!/^(?:\d{4})-(?:\d{2})-(?:\d{2})$/.test(formData.dob)) {
      error.dob = "Invalid date of birth";
    }
    setErrors(error);
    return Object.keys(error).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateData()) {
      let url = `http://localhost:8080/logindetails/register`;
      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "application/json", //required format of data
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            Swal.fire({
              title: "Login successfully!",
              text: "You have logged in",
              icon: "success",
            });
          } else if (response.status === 405) {
            Swal.fire({
              title: "Error!",
              text: "Check your credentials",
              icon: "warning",
            });
          }
        })
        .catch((Error) => {
          Swal.fire({
            title: "Error!",
            text: "Error in saving",
            icon: "error",
          });
        });
    }
  };
  return (
    <div>
      <Header isLoggedIn={false} />
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
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="UserName"
            className="mb-3"
          >
            <Form.Control
              onChange={handleChange}
              name="userName"
              val={formData.userName}
              type="text"
              placeholder="letters only"
              isInvalid={!!Errors.email}
            />
          </FloatingLabel>
          <Form.Control.Feedback type="invalid">
            {Errors.email}
          </Form.Control.Feedback>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              onChange={handleChange}
              name="email"
              val={formData.email}
              type="email"
              placeholder="name@example.com"
              isInvalid={!!Errors.email}
            />
          </FloatingLabel>
          <Form.Control.Feedback type="invalid">
            {Errors.email}
          </Form.Control.Feedback>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              onChange={handleChange}
              name="password"
              val={formData.password}
              type="password"
              placeholder="Password"
              isInvalid={!!Errors.password}
            />
          </FloatingLabel>
          <Form.Control.Feedback type="invalid">
            {Errors.password}
          </Form.Control.Feedback>
          {/* <FloatingLabel
          controlId="floatingInput"
          label="Mobile Number"
          className="mb-3"
        >
          <Form.Control
            onChange={handleChange}
            name="mobileNumber"
            val={formData.mobileNumber}
            type="phone"
            placeholder="Mobile"
            maxLength={10}
            isValid={!!Errors.mobileNumber}
          />
        </FloatingLabel>
        <Form.Control.Feedback type="invalid">
          {Errors.mobileNumber}
        </Form.Control.Feedback> */}
          <FloatingLabel
            controlId="floatingMobile"
            label="Mobile Number"
            className="mb-3"
          >
            <Form.Control
              onChange={handleChange}
              name="mobileNumber"
              val={formData.mobileNumber}
              type="phone"
              placeholder="Enter 10-digit number"
              isInvalid={!!Errors.mobileNumber}
            />
          </FloatingLabel>
          <Form.Control.Feedback type="invalid">
            {Errors.mobileNumber}
          </Form.Control.Feedback>

          <FloatingLabel
            controlId="floatingInput"
            label="Date of Birth"
            className="mb-3"
          >
            <Form.Control
              onChange={handleChange}
              name="dob"
              val={formData.dob}
              type="Date"
              isValid={!!Errors.date}
            />
          </FloatingLabel>
          <Form.Control.Feedback type="invalid">
            {Errors.date}
          </Form.Control.Feedback>
          <Button
            type="submit"
            style={{
              fontSize: 20,
              marginLeft: "2px",
            }}
          >
            Submit
          </Button>
          <Button
            type="button"
            style={{
              fontSize: 20,
              marginLeft: "2px",
            }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        </Form>
      </div>
    </div>
  );
};
