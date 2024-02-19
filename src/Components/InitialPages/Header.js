import React, { Fragment, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../Styles/Header.css";
import logo from "../Images/Logo.png";
import { Form } from "react-bootstrap";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Marquee from "react-marquee-slider";
import Swal from "sweetalert2";

export const Header = ({ isLoggedIn = false, userName }) => {
  const navigate = useNavigate();
  const trackApplication = () => {
    navigate("/TrackApplication");
  };
  const loginClick = () => {
    navigate("/Login");
    console.log("Hello");
  };
  const logoutClick = () => {
    sessionStorage.clear();
    navigate("/");
    Swal.fire({
      title: "Congratulations!",
      text: "You have successfully logout",
      icon: "success",
    });
  };
  return (
    <div>
      <Navbar className="header ">
        <Container>
          <Navbar.Brand href="./Home">
            <img
              src={logo}
              className="d-inline-block align-top headerimg"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/home">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              <IoIosSearch
                size={25}
                color="rgb(176,46,48)"
                style={{ marginTop: 9 }}
              />
            </Form>

            <Nav.Link href="/Aboutus">About</Nav.Link>

            <Nav.Link href="/Careers">Careers</Nav.Link>

            <Nav.Link href="#">Contact Us</Nav.Link>

            <Button
              onClick={() => {
                trackApplication();
              }}
              variant="outline-none"
              style={{ paddingBottom: "15px" }}
            >
              TrackApplication
            </Button>

            <IoIosNotificationsOutline
              size={30}
              color="rgb(176,46,48)"
              style={{ marginTop: 8 }}
            />
            {isLoggedIn ? (
              <Button
                style={{
                  fontSize: 20,
                  color: "rgb(176,46,48)",
                }}
                onClick={(e) => {
                  logoutClick();
                }}
              >
                <FaCircleUser size={20} style={{ fontSize: 15 }} /> {userName}
              </Button>
            ) : (
              <Button
                style={{
                  fontSize: 20,
                  color: "rgb(176,46,48)",
                }}
                onClick={(e) => {
                  loginClick();
                }}
              >
                <FaCircleUser size={20} style={{ fontSize: 15 }} /> Login
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Navbar className="header2">
        <Container className="container">
          <Nav className="me-auto">
            <Nav.Link href="/PolicyPlans">Plans</Nav.Link>
            <Nav.Link href="/PremiumPayment">Term Insurance</Nav.Link>
            <Nav.Link href="#Claims">Claims</Nav.Link>
            <Nav.Link href="/Library">Library</Nav.Link>
            <Nav.Link href="/CustomerServices">Customer Services</Nav.Link>
            <Nav.Link href="#Public_Disclosure">Public Disclosure</Nav.Link>
            <Nav.Link href="#Tax_Centre">Tax Centre</Nav.Link>
            <Nav.Link href="/PremiumPaymentOptions">Pay Premium</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
