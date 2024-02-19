import React, { Fragment } from "react";
import "../Styles/footer.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineFacebook } from "react-icons/ai";
import { LiaTwitterSquare } from "react-icons/lia";
import { AiOutlineInstagram } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { PiLinkedinLogo } from "react-icons/pi";
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

export const Footer = () => {
  return (
    <Fragment>
      <footer>
        <Container>
          <Row md={4}>
            <Col>
              Product Links
              <ul
                style={{
                  listStyleType: "none",
                  justifyContent: "left",
                  fontWeight: "lighter",
                  textAlign: "left",
                }}
              >
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Buying Online
                  </a>
                </li>
                <li>
                  <a href="/LifeInsurance" style={{ color: "white" }}>
                    Life Insurance
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    1 Crore Term Insurance
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Guaranteed, Tax-Free Return Plan
                  </a>
                </li>
                <li>
                  <a href="/PolicyPlans" style={{ color: "white" }}>
                    Term Insurance
                  </a>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <a href="#" style={{ color: "white" }}>
                        ICICI Pru iProtect Smart
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "white" }}>
                        ICICI Pru POS iProtect Smart
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "white" }}>
                        ICICI Pru Protect Return of Premium
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Unit Linked Insurance Plans(ULIPs)
                  </a>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <a href="#" style={{ color: "white" }}>
                        ICICI Pru Signature
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "white" }}>
                        ICICI Pru Save 'N' Grow(Captial Guarantee Solution)
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "white" }}>
                        ICICI Pru LifeTime Classic
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "white" }}>
                        ICICI Pru1 Wealth
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Guaranteed Return Plans
                  </a>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <a href="#" style={{ color: "white" }}>
                        ICICI Pru GIFT Pro
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "white" }}>
                        ICICI Pru Assured Savings Insurance Plan
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <br />
            </Col>
            <Col xs={6}>
              Customer Services
              <br />
              <ul
                style={{
                  listStyleType: "none",
                  justifyContent: "left",
                  fontWeight: "lighter",
                  textAlign: "left",
                }}
              >
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Premium Payment
                  </a>

                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <a
                        href="/PremiumPaymentOptions"
                        style={{ color: "white" }}
                      >
                        Pay your First Premium
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: "white" }}>
                        Pay Renewal Premium
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              Tools and Calculators
              <ul
                style={{
                  listStyleType: "none",
                  justifyContent: "left",
                  fontWeight: "lighter",
                  textAlign: "left",
                }}
              >
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Term Insurance Premium Calculator
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Income Tax Calculator
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Power of Compounding Calculator
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Retirement Planning Calculator
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Home Loan Insurance Calculator
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Child Education Plan Calculator
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Human Life Value Calculator
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    EMI Calculator
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    HRA Calculator
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Cancer Insurance Calculator
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              Quick Links
              <ul
                style={{
                  listStyleType: "none",
                  justifyContent: "left",
                  fontWeight: "lighter",
                  textAlign: "left",
                }}
              >
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Claims
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Disclamier Policy
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              Download The ICICI Prudential Life Insurance Mobile App
              <br />
              <Button
                style={{ backgroundColor: "white", color: "rgb(160,2,5)" }}
              >
                <FaGooglePlay />
                Google <small>Play</small>
              </Button>
              <Button
                style={{ backgroundColor: "white", color: "rgb(160,2,5)" }}
              >
                <GrAppleAppStore />
                AppleStore
              </Button>
              <br />
              <br />
              Social Media Links
              <ul style={{ listStyleType: "none", textAlign: "left" }}>
                <li>
                  <a
                    href="https://m.facebook.com/profile.php/?id=100064518713578"
                    style={{ color: "white" }}
                  >
                    <AiOutlineFacebook size={54} />
                    Like Us on Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/iciciprulife?lang=en" style={{ color: "white" }}>
                    <LiaTwitterSquare size={60} />
                    Follow us on Twitter
                  </a>
                </li>
                <li>
                  <a href="www.iciciprulife.com" style={{ color: "white" }}>
                    <AiOutlineInstagram size={60} />
                    Follow us on Instagram
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    <TfiYoutube size={60} />
                    Watch our Videos
                  </a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/company/icici-prudential-life-insurance-company-limited&ved=2ahUKEwjptpeFsYmEAxVFXmwGHQJ_BHwQFnoECBkQAQ&usg=AOvVaw1gsqmWeJwfvp1rhGLRbbiE" style={{ color: "white" }}>
                    <PiLinkedinLogo size={50} />
                    Connect on LinkedIn
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
         
        </Container>
      </footer>
    </Fragment>
  );
};
