import React, { useState } from "react";
import { Row, Col, FloatingLabel, Form, Card, Button } from "react-bootstrap";
import { message } from "antd";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Header } from "../InitialPages/Header";

export const PremiumPayment = (props) => {
  const [select, setSelection] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [frequencyselect, setFrequencySelection] = useState("");
  const [premium, setPremium] = useState("");
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    policyTerm: "",
    frequency: "",
  });
  const handleDropDown = (e) => {
    setSelection(e.target.value);
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  const handleDropDown1 = (e) => {
    setFrequencySelection(e.target.value);
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `http://localhost:8080/getBase?frequency=${formData.frequency}&policyTerm=${formData.policyTerm}`;
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
          let calculatedPremium = response.data;
          if (formData.policyTerm == 5) {
            if (formData.frequency == "Monthly") {
              setPremium(calculatedPremium);
            } else if (formData.frequency == "Yearly") {
              setPremium(calculatedPremium * 12);
            } else {
              setPremium(calculatedPremium * 6);
            }
          } else if (formData.policyTerm == 10) {
            if (formData.frequency == "Monthly") {
              setPremium(calculatedPremium);
            } else if (formData.frequency == "Yearly") {
              setPremium(calculatedPremium * 12);
            } else {
              setPremium(calculatedPremium * 6);
            }
          } else if (formData.policyTerm == 12) {
            if (formData.frequency == "Monthly") {
              setPremium(calculatedPremium);
            } else if (formData.frequency == "Yearly") {
              setPremium(calculatedPremium * 12);
            } else {
              setPremium(calculatedPremium * 6);
            }
          } else {
            if (formData.frequency == "Monthly") {
              setPremium(calculatedPremium);
            } else if (formData.frequency == "Yearly") {
              setPremium(calculatedPremium * 12);
            } else {
              setPremium(calculatedPremium * 6);
            }
          }
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: "Please select valid combo",
          icon: "error",
        });
      });
  };
  const handleCards = () => {
    switch (select) {
      case "5":
        const cardsDatafor5Terms = [
          { data: premium, title: "Regular Pay", id: "regularPay" },
          { data: "46,985", title: "Single Pay", id: "singlePay" },
        ];
        return cardsDatafor5Terms.map((card) => (
          <CardComponent
            key={card.id}
            data={card.data}
            title={card.title}
            id={card.id}
            selectedCard={selectedCard}
            handleCardSelection={(id) => handleCardSelection(id, card.data)}
          />
        ));
      case "10":
        const cardsDatafor10Terms = [
          { data: premium, title: "Regular Pay", id: "regularPay" },
          { data: premium * 2, title: "Limited Pay(5)", id: "limitedPay5" },
          { data: "77,616", title: "Single Pay", id: "singlePay" },
        ];
        return cardsDatafor10Terms.map((card) => (
          <CardComponent
            key={card.id}
            data={card.data}
            title={card.title}
            id={card.id}
            selectedCard={selectedCard}
            handleCardSelection={(id) => handleCardSelection(id, card.data)}
          />
        ));
      case "12":
        const cardsDatafor12Terms = [
          { data: premium, title: "Regular Pay", id: "regularPay" },
          { data: premium * 2, title: "Limited Pay(5)", id: "limitedPay5" },
          {
            data: premium * 2 - 300,
            title: "Limited Pay(7)",
            id: "limitedPay7",
          },
          { data: "90,015", title: "Single Pay", id: "singlePay" },
        ];
        return cardsDatafor12Terms.map((card) => (
          <CardComponent
            key={card.id}
            data={card.data}
            title={card.title}
            id={card.id}
            selectedCard={selectedCard}
            handleCardSelection={(id) => handleCardSelection(id, card.data)}
          />
        ));
      case "15":
        const cardsDatafor15Terms = [
          { data: premium, title: "Regular Pay", id: "regularPay" },
          { data: premium * 2, title: "Limited Pay(5)", id: "limitedPay5" },
          {
            data: premium * 2 - 300,
            title: "Limited Pay(7)",
            id: "limitedPay7",
          },
          {
            data: premium * 2 - 600,
            title: "Limited Pay(10)",
            id: "limitedPay10",
          },
          { data: "1,08,611", title: "Single Pay", id: "singlePay" },
        ];
        return cardsDatafor15Terms.map((card) => (
          <CardComponent
            key={card.id}
            data={card.data}
            title={card.title}
            id={card.id}
            selectedCard={selectedCard}
            handleCardSelection={(id) => {
              handleCardSelection(id, card.data);
            }}
          />
        ));
      default:
        return null;
    }
  };
  const CardComponent = ({
    data,
    title,
    id,
    selectedCard,
    handleCardSelection,
  }) => {
    return (
      <div key={id} className="mb-3">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Form.Check
              type="radio"
              name="cardSelection"
              label=""
              checked={selectedCard === id}
              onChange={() => {
                handleCardSelection(id);
                Swal.fire({
                  title: "Congratulations!",
                  text: "You selected the premium amount: " + data,
                  icon: "success",
                });
                navigate("/AadhaarDetails");
              }}
            />
            <Card.Title>{title}</Card.Title>
            <Card.Text>{data}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };
  const handleCardSelection = (id) => {
    setSelectedCard(id);
  };
  return (
    <div>
      <Header isLoggedIn={true} />
      <div className="Personal">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Policy Term"
                className="mb-3"
                onChange={handleDropDown}
              >
                <Form.Select
                  aria-label="Floating label select example"
                  value={select}
                  name="policyTerm"
                >
                  <option value="">Select policyTerm</option>
                  <option value="5">5years</option>
                  <option value="10">10years</option>
                  <option value="12">12years</option>
                  <option value="15">15years</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Frequency"
                className="mb-3"
                onChange={handleDropDown1}
              >
                <Form.Select
                  aria-label="Floating label select example"
                  name="frequency"
                  value={frequencyselect}
                >
                  <option value="">Select Frequency</option>
                  <option value="Yearly">Yearly</option>
                  <option value="Half-Yearly">Half-Yearly</option>
                  <option value="Monthly">Monthly</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Button type="submit">Calculate Premium</Button>
        </Form>
        {handleCards()}
      </div>
    </div>
  );
};
