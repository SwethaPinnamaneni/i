import React, { useState } from "react";
import { Row, Col, Card, Overlay, Button, Offcanvas } from "react-bootstrap";
import term from "../Images/term-policy.png";
import reinstate from "../Images/reinstate-policy.png";
import premium from "../Images/pay-premium.png";
import "../Styles/OffCanvas.css";
import { Header } from "../InitialPages/Header";

const CustomerServices = () => {
  const [showOverlay, setShowOverLay] = useState(false);

  const handleMouseEnter = () => {
    setShowOverLay(true);
  };

  const handleMouseLeave = () => {
    setShowOverLay(false);
  };

  return (
    <div>
      <Header isLoggedIn={true} />{" "}
      <div className="contains">
        <div
          class="service-box clearfix service-box-click"
          data-url="https://www.iciciprulife.com/services/standing-instructions.html"
        >
          <div class="icon-handle">
            <img alt="Auto-Debit" src={term} />
          </div>
          <div class="link-text">
            <span>Auto-Debit</span>
          </div>
          <div class="slide-contentv2">
            <div class="txt-handle">
              <div class="txt-abs">
                <span>Auto-Debit</span>
              </div>
            </div>
            <div class="text-center btn-holder">
              <a
                href="https://www.iciciprulife.com/services/standing-instructions.html"
                title=""
                class="btn"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
        <div>
          <p>
            You can <b>transact and avail yourself of services</b> like viewing
            or editing your contact details, downloading your statements, paying
            your premiums and much more. You can also get to{" "}
            <b>know about our service processes</b> by clicking on the links
            available below.
          </p>
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <h3>Services</h3>
        </div>
        <div>
          <Row>
            <Col>
              <Card
                className="card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    Main Card Content
                    <img src={term} width={80} height={80} alt="Term Policy" />
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Overlay
                  target={document.body}
                  show={showOverlay}
                  placement="right"
                >
                  <Overlay.Body className="offcanvas">Content</Overlay.Body>
                </Overlay>
              </Card>
            </Col>
            <Col>
              <Card
                className="position-relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={reinstate}
                  width={80}
                  height={80}
                  alt="Reinstate Policy"
                />
                <Offcanvas
                  // show={showOffcanvas}
                  // onHide={() => setShowOffcanvas(false)}
                  placement="bottom"
                  className="half-offcanvas"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Reinstate Policy Details</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body></Offcanvas.Body>
                </Offcanvas>
              </Card>
            </Col>
            <Col>
              <Card
                className="position-relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={premium} width={80} height={80} alt="Pay Premium" />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default CustomerServices;
