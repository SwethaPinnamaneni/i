import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Styles/Home.css";
import { Container, Form, DropdownButton, Dropdown } from "react-bootstrap";
import image from "../Images/s1.png";
import image2 from "../Images/s2.png";
import image1 from "../Images/s3.png";
import Marquee from "react-marquee-slider";
import { Navbar, Nav, Badge, Card, Row, Col } from "react-bootstrap";
import { Header } from "./Header";
import { RiWallet3Line } from "react-icons/ri";
import { PiFiles } from "react-icons/pi";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

export const Home = () => {
  const [isBlinking, setIsBlinking] = useState(true);

  // Toggle the blinking effect
  const toggleBlinking = () => {
    setIsBlinking(!isBlinking);
  };
  return (
    <div>
      <Header />
      <Container
        style={{ backgroundColor: "light", color: "maroon", width: "2500px" }}
      >
        <Navbar>
          <Nav className="me-auto">
            <Marquee velocity={25}>
              <Badge
                pill
                bg="danger"
                className={isBlinking ? "blinking-badge" : ""}
                onClick={toggleBlinking}
              >
                new
              </Badge>
              <span>
                Up to 15%2 discount (on 1st year premiums) for salaried
                customers with ICICI Pru iProtect Smart.
                <a
                  href="PremiumPayment"
                  style={{ textDecoration: "underline" }}
                >
                  Check eligibility!
                </a>
              </span>
              &nbsp; &nbsp;
              <span>
                Rates for ICICI Pru GIFT Pro plan are revising on 31st Jan 2024.
                <a
                  href="TermInsuranceCalculator"
                  style={{ textDecoration: "underline" }}
                >
                  Click here to check your returns
                </a>
              </span>
              &nbsp; &nbsp;
            </Marquee>
          </Nav>
        </Navbar>
      </Container>
      <div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <Container
              className="gradient_background"
              style={{
                height: 200,
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  height: 200,
                  maxWidth: "80%",
                  border: 20,
                }}
              >
                <img src={image} alt="banner" className="image" />
              </div>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container
              className="gradient_background"
              style={{
                height: 200,
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  height: 200,
                  maxWidth: "80%",
                  border: 20,
                }}
              >
                <img src={image2} alt="banner" className="image" />
              </div>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container
              className="gradient_background"
              style={{
                height: 200,
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  height: 200,
                  maxWidth: "80%",
                  border: 20,
                }}
              >
                <img src={image1} alt="banner" className="image" />
              </div>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
      <Container>
        {" "}
        <div className="Personal contains">
          <div>
            <Row>
              <Col>
                <div>
                  <h2>I want to</h2>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Calculate Term Insurance"
                    className="mb-2"
                  >
                    <Dropdown.Item href="/PremiumPayment">
                      Calculate Term Insurance
                    </Dropdown.Item>
                    <Dropdown.Item href="/PolicyPlans">
                      PolicyPlans
                    </Dropdown.Item>
                    <Dropdown.Item href="/Library">Library</Dropdown.Item>
                  </DropdownButton>
                </div>

                <Card
                  style={{
                    backgroundColor: "aliceblue",
                    height: "200px",
                    width: "500px",
                  }}
                >
                  <Card.Header>
                    <h3>Quick Access</h3>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col>
                        <a href="/PremiumPayment">
                          <RiWallet3Line
                            className="icon"
                            style={{ height: "30px", width: "30px" }}
                          />
                          <br />
                          <h6>Premium Payment</h6>
                        </a>
                      </Col>
                      <Col>
                        <a href="#">
                          <LiaMoneyBillWaveSolid
                            className="icon"
                            style={{ height: "30px", width: "30px" }}
                          />
                          <h6>Auto-Debit</h6>
                        </a>
                      </Col>

                      <Col style={{ alignContent: "center" }}>
                        <a href="#">
                          <PiFiles
                            className="icon"
                            style={{ height: "30px", width: "30px" }}
                          />
                          <br />
                          <h6>Statements download</h6>
                        </a>
                      </Col>
                      <Col>
                        <a href="#">
                          <HiOutlineDocumentSearch
                            className="icon"
                            style={{ height: "30px", width: "30px" }}
                          />
                          <h6>Top-up</h6>
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>Popular Categories</div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};
