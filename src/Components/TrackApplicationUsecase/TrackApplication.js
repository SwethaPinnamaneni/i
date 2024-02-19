import React, { useState } from "react";
import "../Styles/TrackApplication.css";
import { PiDeviceMobile } from "react-icons/pi";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { MdOutlinePolicy } from "react-icons/md";
import { Form, Col, Row } from "react-bootstrap";
import { MobileTracking } from "./MobileTracking";
import { PolicyTracking } from "./PolicyTracking";
import { ApplicationTracking } from "./ApplicationTracking";
import image from "../Images/Track.png";
import { Header } from "../InitialPages/Header";

export const TrackApplication = () => {
  const [select, setSelection] = useState("mobile");
  const onOptionChange = (e) => {
    setSelection(e.target.value);
  };

  return (
    <div>
      <Header isLoggedIn={true} />
      <div className="container">
        <h3 className="tracking">Welcome to application tracker</h3>
        <p style={{ color: "grey" }}>
          Track policy applications by entering the details. Status of the
          application will get refreshed every 2 hours.
        </p>
        <h4>Select one of these details:</h4>
        <div className="icons">
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Check
                  inline
                  label={<PiDeviceMobile size={40} />}
                  name="select"
                  type="radio"
                  value="mobile"
                  id="inline-radio-1"
                  checked={select === "mobile"}
                  onChange={onOptionChange}
                />
              </Col>
              <Col>
                <Form.Check
                  inline
                  label={<MdOutlineSettingsApplications size={45} />}
                  name="select"
                  type="radio"
                  value="application"
                  id="inline-radio-2"
                  checked={select === "application"}
                  onChange={onOptionChange}
                />
              </Col>
              <Col>
                <Form.Check
                  inline
                  name="select"
                  label={<MdOutlinePolicy size={40} />}
                  type="radio"
                  value="policy"
                  id="inline-radio-3"
                  checked={select === "policy"}
                  onChange={onOptionChange}
                />
              </Col>
            </Row>
          </Form>
          {select === "mobile" && <MobileTracking />}
          {select === "application" && <ApplicationTracking />}
          {select === "policy" && <PolicyTracking />}
        </div>
        <img src={image} alt="banner" className="trackingimage img-fluid" />
      </div>
    </div>
  );
};
