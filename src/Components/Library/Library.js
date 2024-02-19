import React from "react";
import { Accordion, Col, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Header } from "../InitialPages/Header";

export const Library = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header isLoggedIn={true} />{" "}
      <div className="Personal">
        <Accordion flush>
          <Accordion.Item eventKey="0" className="mb-2">
            <Accordion.Header>UNDERSTANDING LIFE INSURANCE</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Row className="mb-2">
                  <Col md={4}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Insurance Guide</Accordion.Header>
                      <Accordion.Body>
                        <a href="/LifeInsurance">What is Life Insurance?</a>
                        <br />
                        <a href="/PolicyPlans">Life Insurance Plans</a>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Col>

                  <Col md={4}>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>More Information</Accordion.Header>
                      <Accordion.Body>
                        <a href="/ProtectPolicy">Protect your policy</a>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Col>
                  <Col md={4}></Col>
                </Row>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mb-2">
            <Accordion.Header>UNDERSTANDING FUNDS</Accordion.Header>
            <Accordion.Body>
              <Row className="mb-2">
                <Col md={4}>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Asset Allocation</Accordion.Header>
                      <Accordion.Body>
                        <b>Plan Asset Allocation</b>
                        <br />
                        <br />
                        This section helps you understand the amount of money
                        that you could invest in either equity or debt as per
                        your risk preference.
                        <br />
                        <br />
                        <Button onClick={() => navigate("/AssetAllocation")}>
                          Read More
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
                <Col md={4}></Col>
                <Col md={4}></Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mb-2">
            <Accordion.Header>FAQs</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Row className="mb-2">
                  <Col md={4}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Claim FAQs</Accordion.Header>
                      <Accordion.Body>
                        <Button
                          onClick={() => {
                            navigate("/ClaimFAQs");
                          }}
                        >
                          Get Claim FAQs
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Col>
                  <Col md={4}>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Customer Service FAQs</Accordion.Header>
                      <Accordion.Body></Accordion.Body>
                    </Accordion.Item>
                  </Col>
                  <Col md={4}></Col>
                </Row>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mb-2">
            <Accordion.Header>TOOLS AND CALCULATORS</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Row className="mb-2">
                  <Col md={4}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Calculators</Accordion.Header>
                      <Accordion.Body>
                        <a href="/TermInsuranceCalculator">
                          Term Insurance Premium Calculator
                        </a>
                        <br />
                        <a href="/BmiCalculator">BmiCalculator</a>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Col>
                </Row>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mb-2">
            <Accordion.Header>TESTIMONIALS</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Row className="mb-2">
                  <Col md={4}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Customer Reviews</Accordion.Header>
                      <Accordion.Body>
                        <a href="/CustomerReviews">View Reviews</a>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Col>
                </Row>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="mb-2">
            <Accordion.Header>GUIDES AND HANDBOOKS</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Row className="mb-2">
                  <Col md={4}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Retirement Planning Handbook
                      </Accordion.Header>
                      <Accordion.Body>
                        <Button
                          onClick={() => {
                            Swal.fire({
                              title: "Congratulations",
                              text: "Downloaded successfully",
                              icon: "success",
                            });
                          }}
                        >
                          Download Now
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Col>
                  <Col md={4}></Col>
                  <Col md={4}></Col>
                </Row>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
