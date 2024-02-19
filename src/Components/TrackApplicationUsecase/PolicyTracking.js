import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Styles/TrackApplication.css";
import axios from "axios";
import Swal from "sweetalert2";

export const PolicyTracking = () => {
  const [formData, setformData] = useState({
    policyNumber: "",
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
  const validateErrors = () => {
    let Errors = {};
    if (!formData.policyNumber.trim()) {
      Errors.policyNumber = "Policy Number is required";
    } else if (!/^\d{0,5}$/.test(formData.policyNumber)) {
      Errors.policyNumber = "Policy Number is not valid";
    }
    if (!formData.dob.trim()) {
      Errors.dob = "Invalid date of birth";
    } else if (!/^(?:\d{4})-(?:\d{2})-(?:\d{2})$/.test(formData.dob)) {
      Errors.dob = "Invalid date of birth";
    }
    seterrors(Errors);
    return Object.keys(Errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateErrors()) {
      let url = `http://localhost:8080/getstatusbyPolicyNumber?policyNumber=${formData.policyNumber}`;
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
            if (response.data.status === "Pending") {
              Swal.fire({
                title: "Pending!",
                text: "Your application status is: " + response.data.status,
                icon: "warning",
              });
            } else if (response.data.status === "Completed") {
              Swal.fire({
                title: "Congratulations!Completed",
                text: "Your application status is: " + response.data.status,
                icon: "success",
              });
            }
          }
        })
        .catch((error) => {
          Swal.fire({
            title: "Error",
            text: "Invalid Details",
            icon: "error",
          });
        });
    }
  };
  return (
    <div className="Personal">
      <Form onSubmit={handleSubmit} className="needs-validation">
        <Form.Group className="mb-3" controlId="formGroupPolicy">
          <Form.Label>
            <h6>Policy Number</h6>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Policy Number"
            onChange={handleChange}
            name="policyNumber"
            isInvalid={!!errors.policyNumber}
          />
          <Form.Control.Feedback type="invalid">
            {errors.policyNumber}
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
