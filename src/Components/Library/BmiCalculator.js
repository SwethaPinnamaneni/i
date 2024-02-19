import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Header } from "../InitialPages/Header";

function BmiCalculator() {
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");

  const calculateBmi = () => {
    if (heightValue && weightValue) {
      const heightInMeters = heightValue / 100;
      const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiValue(bmi);

      let message = "";
      if (bmi < 18.5) {
        message = "You are Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        message = "You are Normal weight";
      } else if (bmi >= 25 && bmi < 30) {
        message = "You are Overweight";
      } else {
        message = "You are Obese";
      }
      setBmiMessage(message);
    } else {
      setBmiValue("");
      setBmiMessage("");
    }
  };

  return (
    <div>
      <Header isLoggedIn={true} />
      <div className="Personal">
        <h1>BMI Calculator</h1>
        <div className="input-container mb-2">
          <label htmlFor="height">Enter Your Height (cm):</label>
          <input
            type="number"
            id="height"
            value={heightValue}
            onChange={(e) => setHeightValue(e.target.value)}
          />
        </div>
        <div className="input-container mb-2">
          <label htmlFor="weight">Enter Your Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weightValue}
            onChange={(e) => setWeightValue(e.target.value)}
          />
        </div>
        <Button
          className="calculate-btn"
          variant="outline-danger"
          onClick={calculateBmi}
        >
          Click to Calculate BMI
        </Button>
        {bmiValue && bmiMessage && (
          <div className="result">
            <p>
              Your BMI: <span className="bmi-value">{bmiValue}</span>
            </p>
            <p>
              Result: <span className="bmi-message">{bmiMessage}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default BmiCalculator;
