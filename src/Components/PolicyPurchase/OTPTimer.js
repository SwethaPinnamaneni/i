import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import aadhaar from "../Images/aadhaar.jpg";

export const OTPTimer = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [show, setShow] = useState(true);
  const mail = localStorage.getItem("email");

  const handleClose = () => {
    setShow(false);
    navigate("/AadhaarDetails");
  };

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
    setOtp("");
    let url = `http://localhost:8080/logindetails/send/${mail}`;
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          Swal.fire({
            title: "Success",
            text: "OTP sent successfully",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: "No match found",
          icon: "error",
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("mail", mail);
    console.log("otp", otp);
    let url = `http://localhost:8080/logindetails/verify?mail=${mail}&otp=${otp}`;
    axios
      .post(
        url,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          if (response.data === true) {
            Swal.fire({
              title: "Congratulations",
              text: "Your OTP verification is done",
              icon: "success",
            });
            navigate("/Payment");
          } else {
            Swal.fire({
              title: "Error",
              text: "No match found",
              icon: "error",
            });
          }
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Wrong OTP",
          text: "Error in entering OTP",
          icon: "error",
        });
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (/[^0-9]/.test(inputValue)) {
      return "Give correct OTP";
    }

    setOtp(inputValue);
  };

  return (
    <div className="container">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Verify OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder="Enter OTP"
            value={otp}
            type="text"
            maxLength={6}
            onChange={handleInputChange}
          />

          <div className="countdown-text">
            {seconds > 0 || minutes > 0 ? (
              <p>
                Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
            ) : (
              <p>Didn't receive code?</p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={seconds > 0 || minutes > 0}
            style={{
              color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
            }}
            onClick={resendOTP}
          >
            Resend OTP
          </Button>

          <Button className="submit-btn" onClick={handleSubmit}>
            SUBMIT
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
