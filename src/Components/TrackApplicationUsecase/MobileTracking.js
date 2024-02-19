import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { message } from "antd";
import Swal from "sweetalert2";

export const MobileTracking = () => {
  const [formData, setformData] = useState({
    mobileNumber: "",
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
    if (!formData.mobileNumber.trim()) {
      Errors.mobileNumber = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      Errors.mobileNumber = "Mobile Number is not valid";
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
      let url = `http://localhost:8080/getstatusbyPhoneNumber?phoneNumber=${formData.mobileNumber}`;
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
          message.error("No match found");
        });
    }
  };
  return (
    <div className="Personal">
      <Form onSubmit={handleSubmit} className="needs-validation">
        <Form.Group className="mb-3" controlId="formGroupMobile">
          <Form.Label>
            <h6>Mobile </h6>
          </Form.Label>
          <Form.Control
            type="phoneNumber"
            placeholder="10-digit number"
            maxLength={10}
            onChange={handleChange}
            name="mobileNumber"
            isInvalid={!!errors.mobileNumber}
          />
          <Form.Control.Feedback type="invalid">
            {errors.mobileNumber}
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
