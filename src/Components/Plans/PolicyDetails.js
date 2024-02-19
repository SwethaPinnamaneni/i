import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { Header } from "../InitialPages/Header";

export const PolicyDetails = () => {
  const navigate = useNavigate();
  const { policyId } = useParams(); // Use useParams to get the policyId from the URL
  const [policyDetails, setPolicyDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    if (policyId) {
      // Fetch policy details based on the policyId

      let url = `http://localhost:8080/getPolicyDetails?policyId=${policyId}`;
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
            setPolicyDetails(response.data);
            console.log(response.data);
          }
        })
        .catch((error) => {
          setIsLoading(false);
          Swal.fire({
            title: "Error!",
            text: "",
            icon: "error",
          });
        });
    }
  }, [policyId]);

  const handleGetQuote = () => {
    navigate("/PremiumPayment");
  };

  return (
    <div>
      <Header isLoggedIn={true} />
      <div className="Personal">
        {isLoading && <div>Loading...</div>}
        <Row md={1}>
          {policyDetails && (
            <Col>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <strong>Main Category:</strong> {policyDetails.mainCategory}
                  </p>
                  <p className="card-text">
                    <strong>Description:</strong> {policyDetails.description}
                  </p>
                  <p className="card-text">
                    <strong>Coverage Amount:</strong>
                    {policyDetails.coverageAmount}
                  </p>
                  <p className="card-text">
                    <strong>Base Premium:</strong> {policyDetails.basePremium}
                  </p>
                  <p className="card-text">
                    <strong>policyDetails Number:</strong>{" "}
                    {policyDetails.policyNumber}
                  </p>
                  <p className="card-text">
                    <strong>Frequency:</strong> {policyDetails.frequency}
                  </p>
                  <Button type="button" onClick={handleGetQuote}>
                    Get quote
                  </Button>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};
