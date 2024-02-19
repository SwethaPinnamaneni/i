import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Styles/TrackApplication.css";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Header } from "../InitialPages/Header";

export const ApplicationTracking = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    applicationNumber: "",
    dob: "",
  });
  const [errors, seterrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateErrors()) {
      let url = `http://localhost:8080/getstatusbyApplicationNumber?applicationNumber=${formData.applicationNumber}`;
      axios
        .get(url, {
          headers: {
            "Content-Type": "application/json", //required format of data
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          if (response.status === 200 || response.status == 201) {
            if (response.data.status == "Pending") {
              Swal.fire({
                title: "Pending!",
                text: "Your application status is:" + response.data.status,
                icon: "warning",
              });
            } else if (response.data.status == "Completed") {
              Swal.fire({
                title: "Congratulations!",
                text: "Your application status is:" + response.data.status,
                icon: "success",
              });
            }
          }
        })
        .catch((error) => {
          Swal.fire({
            title: "Error!",
            text: "Your application number is not found!Please try again",
            icon: "error",
          });
        });
    }
  };
  const validateErrors = () => {
    let Errors = {};
    if (!formData.applicationNumber.trim()) {
      Errors.applicationNumber = "Application Number is required";
    } else if (!/^\d{0,7}$/.test(formData.applicationNumber)) {
      Errors.applicationNumber =
        "Application Number should not be more than 6 ";
    }
    if (!formData.dob.trim()) {
      Errors.dob = "Invalid date of birth";
    } else if (!/^(?:\d{4})-(?:\d{2})-(?:\d{2})$/.test(formData.dob)) {
      Errors.dob = "Invalid date of birth";
    }
    seterrors(Errors);
    return Object.keys(Errors).length === 0;
  };
  return (
    <div className="Personal">
      <Form onSubmit={handleSubmit} className="needs-validation">
        <Form.Group className="mb-3" controlId="formGroupPolicy">
          <Form.Label>
            <h6>Application Number</h6>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Application Number"
            onChange={handleChange}
            name="applicationNumber"
            isInvalid={!!errors.applicationNumber}
          />
          <Form.Control.Feedback type="invalid">
            {errors.applicationNumber}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupdate">
          <Form.Label>
            <h6>Date Of Birth</h6>
          </Form.Label>
          <Form.Control
            type="date"
            onChange={handleChange}
            name="dob"
            isInvalid={!!errors.dob}
          />
          <Form.Control.Feedback type="invalid">
            {errors.dob}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Track Application</Button>
      </Form>
    </div>
  );
};
