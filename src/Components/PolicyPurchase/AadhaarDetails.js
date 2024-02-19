import React, { useState } from "react";
import "../Styles/Payment.css";
import { Button, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../Styles/Payment.css";
import axios from "axios";
import AadhaarIcon from "../Images/aadhaar.jpg";
import { Header } from "../InitialPages/Header";

export const AadhaarDetails = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [inputValue, setinputValue] = useState("");
  const [input, setInput] = useState("");

  const handleCardSelection = (id) => {
    setSelectedCard(id);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (selectedCard === "aadhaar") {
      // Validate that the entered value is a 12-digit number
      const isValidAadhaar = /^\d{0,12}$/.test(value);

      if (isValidAadhaar || value === "") {
        setInput({
          ...input,
          [name]: value,
        });
        setinputValue(value); // Update inputValue state for display purposes
      }
    }
  };
  const handleButtonClick = (e) => {
    let url = `http://localhost:8080/logindetails/send/${input.aadhaar}`; //url to send otp for the fetched email
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
          text: "Unable to Send",
          icon: "error",
        });
      });
    navigate("/OTPTimer");
  };

  const handleSubmit = () => {
    navigate("/");
    Swal.fire({
      title: "Payment Successful!",
      icon: "success",
    });
  };

  const CardComponent = ({
    data,
    id,
    label,
    selectedCard,
    handleCardSelection,
  }) => {
    return (
      <div key={id} className="mb-3">
        <Card className="card">
          <Card.Body>
            {id === "aadhaar" && (
              <div className="aadhaar-icon-container">
                <img
                  src={AadhaarIcon}
                  alt="Aadhaar Icon"
                  className="aadhaar-icon"
                />
              </div>
            )}
            <Form.Check
              type="radio"
              className="form-check"
              name="cardSelection"
              label={label}
              checked={selectedCard === id}
              onChange={() => {
                handleCardSelection(id);
              }}
            />

            {id === "aadhaar" && selectedCard === "aadhaar" ? (
              <div>
                <div style={{ display: "inline-block" }}>
                  <div class="input-group">
                    <Form.Control
                      type="text"
                      placeholder="Enter 12-digit number"
                      value={inputValue}
                      onChange={handleChange}
                      name="aadhaar"
                      required
                    />

                    <Button
                      variant="outline-danger"
                      type="button"
                      onClick={() => {
                        handleButtonClick();
                      }}
                    >
                      Get OTP
                    </Button>
                  </div>
                  <Form.Text style={{ color: "purple" }}>
                    Locate Aadhaar no./Virtual ID Number
                  </Form.Text>
                </div>
                {data}
              </div>
            ) : (
              <div>
                <Card.Text>{data}</Card.Text>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <div>
      <Header isLoggedIn={true} />

      <div className="Personal">
        <CardComponent
          data={
            <ul style={{ listStyleType: "none" }}>
              <li>
                Shorter application form as personal details are prefilled.
              </li>
              <li>Your KYC documents waived off.</li>
            </ul>
          }
          label={<b>Easy fill my details from Aadhaar</b>}
          id="aadhaar"
          selectedCard={selectedCard}
          handleCardSelection={handleCardSelection}
        />
        <br />
        <CardComponent
          data={
            <ul style={{ listStyleType: "none" }}>
              <li>Complete application form to be filled</li>
              <li>All the documents to be uploaded</li>
            </ul>
          }
          label={<b>Proceed without Aadhaar</b>}
          id="without-aadhaar"
          selectedCard={selectedCard}
          handleCardSelection={handleCardSelection}
        />
        {selectedCard === "without-aadhaar" && navigate("/Documents")}
      </div>
    </div>
  );
};
