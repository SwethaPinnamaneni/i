import React, { useState } from "react";
import { Breadcrumb, CardGroup, Card, Row, Col } from "react-bootstrap";
import Employee from "../Images/Employee.png";
import Advisor from "../Images/Advisor.png";
import "../Styles/Careers.css";
import { useNavigate } from "react-router-dom";
import { Header } from "../InitialPages/Header";

export const Careers = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    //sets different functionalities for each card selection
    setSelectedCard(card);
    if (selectedCard === "employee") {
      navigate("/Employee");
    } else {
      navigate("/Advisor");
    }
  };

  return (
    <div>
      <Header isLoggedIn={true} />
      <div style={{ backgroundColor: "lightgrey" }}>
        <h2>Careers in Life Insurance</h2>
        <p>
          <h6>Boost your careers with ICICI Life Insurance</h6>
        </p>
      </div>
      <div>
        <Breadcrumb style={{ color: "maroon" }}>
          <Breadcrumb.Item href="/Home">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Careers</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <CardGroup className="card-group">
          <Row>
            <Col>
              <Card
                onClick={() => handleCardClick("employee")}
                className={`career-card ${
                  selectedCard === "employee" ? "selected" : ""
                }`}
              >
                <Card.Img variant="top" src={Employee} />
                <Card.Body>
                  <Card.Text>
                    <h3>
                      Join as an
                      <br />
                      Employee
                    </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                onClick={() => handleCardClick("advisor")}
                className={`career-card ${
                  selectedCard === "advisor" ? "selected" : ""
                }`}
              >
                <Card.Img variant="top" src={Advisor} />
                <Card.Body>
                  <Card.Text>
                    <h3>
                      Join as an
                      <br />
                      Advisor
                    </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardGroup>
      </div>
      <div>
        <div className=" col-xs-12 col-sm-12 col-lg-12">
          <h2 className="blue-title">
            Be a part of ICICI Prudential Life Insurance Company Limited
          </h2>
          <p>
            <span className="txt-unique">
              As one of the leading life insurance companies in India, we, at
              ICICI Prudential Life Insurance, offer you various opportunities
              across different roles and domains. We also help you pursue a
              career that brings growth and satisfaction.
            </span>
          </p>
          <p>
            <span className="txt-unique">
              You can be a part of ICICI Prudential Life Insurance family in one
              of the two ways – join us as an employee or as an advisor. As our
              employee, you will have the chance to learn from the best in the
              industry and propel your career forward. As our advisor, you will
              have the potential to earn unlimited income and work on flexible
              terms according to your convenience.
            </span>
          </p>
          <p>
            <span className="txt-unique">
              <a name="_GoBack"></a>Either way, at ICICI Prudential Life
              Insurance, we assure you a supportive work environment that will
              help you excel. Through training, seminars, guidance and a
              compensation that your efforts deserve, we drive you to your
              professional and financial goals.
            </span>
          </p>
          <p>
            <span className="txt-unique">
              If you wish to take a step forward in your career, click on the
              links above and discover a host of opportunities once you join us
              as an employee or as an advisor.
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span className="txt-unique">Comp/doc/Jan/2018/0754.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
