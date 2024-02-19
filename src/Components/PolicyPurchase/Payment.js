import React, { useState } from "react";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { Header } from "../InitialPages/Header";

export const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value.replace(/\D/g, ""));
  };

  const handleExpiryDateChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    // Add a slash after the first two characters (MM/YY format)
    setExpiryDate(
      input.length > 2 ? `${input.slice(0, 2)}/${input.slice(2)}` : input
    );
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value.replace(/\D/g, ""));
  };

  const handleClick = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Payment",
      text: "Payment Successful",
      icon: "success",
    });
  };

  return (
    <div>
      <Header isLoggedIn={true} />
      <Container className="Personal">
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Payment</h2>
                <Form onSubmit={handleClick}>
                  <Form.Group controlId="cardNumber">
                    <Form.Label>
                      Card Number<span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter card number"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      maxLength="16"
                      pattern="^\d{16}$"
                      title="Enter a valid 16-digit card number"
                      required
                    />
                  </Form.Group>

                  <Row>
                    <Col>
                      <Form.Group controlId="expiryDate">
                        <Form.Label>
                          Expiry Date<span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="MM/YY"
                          value={expiryDate}
                          onChange={handleExpiryDateChange}
                          maxLength="5"
                          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                          title="Enter a valid expiry date in MM/YY format"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="cvv">
                        <Form.Label>
                          CVV<span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="CVV"
                          value={cvv}
                          onChange={handleCvvChange}
                          maxLength="3"
                          pattern="^\d{3}$"
                          title="Enter a valid 3-digit CVV number"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button
                    variant="primary"
                    type="submit"
                    block
                    className="mt-2"
                  >
                    Purchase Now
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
