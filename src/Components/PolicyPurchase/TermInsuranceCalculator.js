import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FloatingLabel } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Header } from "../InitialPages/Header";

function TermInsuranceCalculator() {
  const navigate = useNavigate();
  const [Errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    occupation: "",
    mobileNumber: "",
    gender: "",
    educationalQualification: "",
    pinCode: "",
    city: "",
    consumeTobacco: "",
    dob: "",
    email: " ",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateData = () => {
    let error = {};
    if (!formData.email.trim()) {
      error.email = "Email is required";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}/.test(formData.email)
    ) {
      error.email = "Email is not valid";
    }
    if (!formData.mobileNumber.trim()) {
      error.mobileNumber = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      error.mobileNumber = "Mobile Number is not valid";
    }
    if (!formData.occupation) {
      error.occupation = "occupation is required";
    }
    if (!formData.annualIncome.trim()) {
      error.annualIncome = "AnnualIncome is required";
    }
    if (!formData.consumeTobacco.trim()) {
      error.consumeTobacco = "Consume Tobacco selection is required";
    }
    if (!formData.city.trim()) {
      error.city = "City is required";
    }
    if (!formData.dob.trim()) {
      error.dob = "Invalid date of birth";
    } else if (!/^(?:\d{4})-(?:\d{2})-(?:\d{2})$/.test(formData.dob)) {
      error.dob = "Invalid date of birth";
    }
    setErrors(error);
    return Object.keys(error).length === 0;
  };
  const handleSubmit = (event) => {
    if (validateData()) {
      navigate("/PremiumPayment");
    }
  };

  return (
    <div>
      <Header isLoggedIn={true} />
      <Form onSubmit={handleSubmit} className="Personal needs-validation">
        <Container fluid>
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingdb"
                label="Date of Birth"
                className="mb-3"
              >
                <Form.Control type="date" onChange={handleChange} />
                <Form.Control.Feedback type="invalid">
                  {Errors.dob}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel
                controlId="floatingMobile"
                label="Mobile"
                className="mb-3"
              >
                <Form.Control
                  type="phone"
                  placeholder="10-digit-number"
                  maxLength={10}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {Errors.mobileNumber}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Gender"
                className="mb-3"
              >
                <Form.Select
                  aria-label="Floating label select example"
                  onChange={handleChange}
                >
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">TransGender</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="I consume Tobacco"
                className="mb-3"
              >
                <Form.Select
                  aria-label="Floating label select example"
                  onChange={handleChange}
                >
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* <FloatingLabel
              controlId="floatingSelectGrid"
              label="Annual Income"
              className="mb-3"
            >
              <Form.Select
                aria-label="Floating label select example"
                onChange={handleChange}
              >
                <option value="1">Upto 2.9L</option>
                <option value="2">3L-4.9L</option>
                <option value="3">5L-7.9L</option>
                <option value="3">8L-9.9L</option>
                <option value="3">10L-19.9L</option>
                <option value="3">20L&above</option>
              </Form.Select>
            </FloatingLabel> */}
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide valid email
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Occupation"
                className="mb-3"
              >
                <Form.Select
                  aria-label="Floating label select example"
                  onChange={handleChange}
                >
                  <option value="1">Salaried</option>
                  <option value="2">Professional</option>
                  <option value="3">Self-employed</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Educational qualification"
                className="mb-3"
              >
                <Form.Select
                  aria-label="Floating label select example"
                  onChange={handleChange}
                >
                  <option value="1">Graduate & above</option>
                  <option value="2">12th Pass/Diploma</option>
                  <option value="3">Below 12th Pass</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Pin Code"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="Pincode"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Invalid PinCode
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>

          <FloatingLabel
            controlId="floatingInput"
            label="City"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="City"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide valid city
            </Form.Control.Feedback>
          </FloatingLabel>
          {["checkbox"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label="By submitting my details, I override my NDNC registration and authorize ICICI Prudential Life and its representatives to contact me through call,RCS,WhatsApp or E-mail.I further consent to share my information on confidential basis with third parties for evaluating and processing this proposal."
              />
            </div>
          ))}
        </Container>
        <Button type="submit">Check Premium</Button>
      </Form>
    </div>
  );
}

export default TermInsuranceCalculator;
