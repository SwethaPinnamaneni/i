import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Header } from "../InitialPages/Header";

export const Documents = () => {
  const navigate = useNavigate();
  const [panCard, setPanCard] = useState(null);
  const [educationCertificates, setEducationCertificates] = useState(null);
  const [aadhaarCard, setAadhaarCard] = useState(null);
  const [rationCard, setRationCard] = useState(null);

  const handleSubmit = () => {
    if (validateForm()) {
      Swal.fire({
        title: "Success",
        text: "All the required documents are successfully uploaded..",
        icon: "success",
      });
      navigate("/Payment");
    } else {
      Swal.fire({
        title: "Error",
        text: "Please provide all required documents..",
        icon: "error",
      });
    }
  };

  const validateForm = () => {
    return panCard && educationCertificates && aadhaarCard && rationCard;
  };

  return (
    <div>
      <Header isLoggedIn={true} />
      <div className="Personal">
        <Form.Group controlId="formFile" className="mb-3" required>
          <Form.Label>
            Pan Card <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="file"
            required
            accept=".pdf,.png"
            onChange={(e) => setPanCard(e.target.files[0])}
          />
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3" required>
          <Form.Label>
            Education Certificates <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="file"
            multiple
            required
            accept=".pdf,.doc,.docx"
            onChange={(e) => setEducationCertificates(e.target.files)}
          />
        </Form.Group>

        <Form.Group controlId="formFileSm" className="mb-3" required>
          <Form.Label>
            Aadhaar Card <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="file"
            size="sm"
            required
            accept=".pdf,.png"
            onChange={(e) => setAadhaarCard(e.target.files[0])}
          />
        </Form.Group>

        <Form.Group controlId="formFileSm" className="mb-3" required>
          <Form.Label>
            Ration Card <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="file"
            size="sm"
            required
            accept=".pdf,.png"
            onChange={(e) => setRationCard(e.target.files[0])}
          />
        </Form.Group>

        <Button type="button" onClick={handleSubmit}>
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
};
