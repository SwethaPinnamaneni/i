import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Header } from "../InitialPages/Header";
import iprotect from "../Images/iprotect.jpg";

export const PolicyPlans = () => {
  const navigate = useNavigate();
  const [policies, setPolicies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      let url = `http://localhost:8080/getall`;
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
            setPolicies(response.data);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          setIsLoading(false);
          Swal.fire({
            title: "Error!",
            text: "Check out policies",
            icon: "error",
          });
        });
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header isLoggedIn={true} />
      <div className="Personal">
        {isLoading ? ( // Conditional rendering based on loading state
          <div className="loading-screen">
            <Spinner animation="border" />
            <br />
            Fetching Policy Details
            {/* <img
              src={iprotect}
              alt="iprotect smart"
              height={200}
              width={2}
              className="card-img-top"
            /> */}
          </div>
        ) : (
          <Row>
            {policies.map((policy) => (
              <Col key={policy.policyId}>
                <div
                  className="card"
                  // style={{
                  //   backgroundImage: `url(${iprotect})`,
                  //   backgroundSize: "cover",
                  //   borderRadius: "8px",
                  //   overflow: "hidden",

                  // }}
                >
                  <div className="card-body">
                    <p className="card-text">
                      <strong>Main Category:</strong> {policy.mainCategory}
                    </p>
                    <p className="card-text">
                      <strong>Description:</strong> {policy.description}
                    </p>
                    <p className="card-text">
                      <strong>Coverage Amount:</strong> {policy.coverageAmount}
                    </p>
                    <p className="card-text">
                      <strong>Base Premium:</strong> {policy.basePremium}
                    </p>
                    <p className="card-text">
                      <strong>Policy Number:</strong> {policy.policyNumber}
                    </p>
                    <p className="card-text">
                      <strong>Frequency:</strong> {policy.frequency}
                    </p>
                    <Button
                      type="button"
                      variant="danger"
                      onClick={() =>
                        navigate(`/PolicyDetails/${policy.policyId}`)
                      }
                    >
                      Select
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};
