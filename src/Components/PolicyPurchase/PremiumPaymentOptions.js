import React from "react";
import options from "../Images/Premium Payment Options.png";
import {
  Accordion,
  Row,
  Col,
  AccordionItem,
  AccordionHeader,
} from "react-bootstrap";
import { BsBank } from "react-icons/bs";
import "../Styles/Payment.css";
import { FaCreditCard } from "react-icons/fa";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { IoIosInformationCircle } from "react-icons/io";
import { SiPaytm } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { FaAmazonPay } from "react-icons/fa";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import icon from "../Images/sbi-state-bank-of-india.svg";
import favicon from "../Images/favicon.jpg";
import logo from "../Images/Logo.png";
import { Header } from "../InitialPages/Header";

export const PremiumPaymentOptions = () => {
  return (
    <div>
      <Header isLoggedIn={true} />{" "}
      <div>
        <img src={options} height={200} width={1260} />
        <div className="contains">
          <strong>
            Choose from our host of convenient premium payment options
          </strong>
          <br />
          To continue receiving policy benefits, it is important that you pay
          your premium regularly and on time. We, at ICICI Prudential Life, have
          made this simple and hassle-free for you. Use any of these premium
          payment options, to make sure your family is always secured.
          <Accordion className="mb-2" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Online Payment</Accordion.Header>
              <Accordion.Body>
                <Row className="mb-2">
                  <Col>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <BsBank />
                          &nbsp;&nbsp;Net Banking
                        </Accordion.Header>
                        <Accordion.Body>
                          Pay your premium online through net banking.
                          <a
                            href="/src/Files/BankLists.xlsx"
                            download="BankLists"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Click here
                          </a>
                          &nbsp;to know the banks available for your premium
                          payment.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col>
                    <Accordion>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <PiContactlessPaymentFill />
                          &nbsp;&nbsp;Unified Payment Interfaces
                        </Accordion.Header>
                        <Accordion.Body>
                          Premium payment through UPI is now simpler and
                          faster!! Select UPI as payment option &gt;&gt;enter
                          VPA address&gt;&gt; approve payment on your UPI app
                          <br /> Note: For making payment through your Google
                          pay app please enter your valid Gpay VPA address. For
                          e.g: Customer@okicici <a href="#">Pay Now </a>
                          <br />
                          OR. Go to UPI app &gt;&gt; enter ipru.12345678@icici
                          &gt;&gt; enter premium amount&gt;&gt; make payment
                          Dynamic VPA - ipru.@icici
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col>
                    <Accordion>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <FaCreditCard />
                          &nbsp; &nbsp;Credit Card
                        </Accordion.Header>
                        <Accordion.Body>
                          Pay your premium online through your credit card. We
                          accept payments through Visa, MasterCard, Maestro,
                          Diners, Discover and American Express
                          <a href="/Payment">Pay Now</a>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Accordion>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          <IoIosInformationCircle />
                          &nbsp;&nbsp;Infinity
                        </Accordion.Header>
                        <Accordion.Body>
                          ICICI Bank account holders can pay their premiums
                          through Infinity. ICICI Prudential policyholders
                          having an ICICI Bank account can avail the facility of
                          Infinity for premium payment. For more information
                          please visit{" "}
                          <a href="www.icicibank.com">icicibank website</a> or
                          contact the nearest ICICI Bank Branch.<br></br>
                          <b>Single Online Account</b>
                          <br />
                          ICICI Prudential policyholders can now link their
                          policies to their ICICI Bank account. This will allow
                          the customer to manage their policies through their
                          Net Banking account. Customers can make a premium
                          payment, check fund value and can perform
                          e-transactions through their online bank account.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col>
                    <Accordion>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          <FaCreditCard />
                          &nbsp;&nbsp;Debit Card
                        </Accordion.Header>
                        <Accordion.Body>
                          Pay your premium online through your debit card. We
                          accept payments through Visa, MasterCard and Rupay
                          <a href="../Components/PolicyPurchase/Payment.js">
                            Pay Now
                          </a>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col>
                    <Accordion>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          <SiPaytm />
                          &nbsp;&nbsp;Paytm
                        </Accordion.Header>
                        <Accordion.Body>
                          Premium payment has never been so simple. Now we are
                          available on Paytm. Simply log in to the app&gt;&gt;
                          Select Insurance&gt;&gt;Select ICICI Prudential
                          Insurance&gt;&gt;Enter policy details&gt;&gt;Make
                          payment
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Accordion>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                          <FaGooglePay />
                          &nbsp;&nbsp;Google Pay
                        </Accordion.Header>
                        <Accordion.Body>
                          Premium payment has never been so simple. Now we are
                          available on Google Pay. Simply login to the
                          app&gt;&gt;Select Insurance&gt;&gt;Select ICICI
                          Prudential Insurance&gt;&gt;Enter policy
                          details&gt;&gt;Make payment
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col>
                    <Accordion>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                          <HiMiniCurrencyRupee />
                          &nbsp;&nbsp;Phone Pay
                        </Accordion.Header>
                        <Accordion.Body>
                          Premium payment has never been so simple. Now we are
                          available on Phone Pay. Simply login to the
                          app&gt;&gt;Select Insurance&gt;&gt;Select ICICI
                          Prudential Insurance&gt;&gt;Enter policy
                          details&gt;&gt;Make payment
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col>
                    <Accordion>
                      <Accordion.Item eventKey="8">
                        <Accordion.Header>
                          <FaAmazonPay />
                          &nbsp;&nbsp;Amazon Pay
                        </Accordion.Header>
                        <Accordion.Body>
                          Premium payment has never been so simple. Now we are
                          available on Amazon Pay. Simply login to the
                          app&gt;&gt;Select Insurance&gt;&gt;Select ICICI
                          Prudential Insurance&gt;&gt;Enter policy
                          details&gt;&gt;Make payment
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="mb-2" flush>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Cash/Cheque</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <AccordionHeader>
                          <img src={favicon} width={18} height={18} />
                          &nbsp;&nbsp;ICICI Bank
                        </AccordionHeader>
                        <AccordionBody>
                          ICICI Prudential policyholders can walk into any ICICI
                          Bank Branches across India to avail the facility of
                          premium payment via Cheque(Local/Transfer) & Cash
                          (only up to `49,999/-*). For a list of ICICI Bank
                          Branches, please <a href="#">click here</a>. Please
                          make the cheque in favour of 'ICICI Prudential Life
                          Insurance Co. Ltd. Policy No XXXX XXXX.
                          <br />* Premium payments are accepted in cash only up
                          to `49,999/-.
                        </AccordionBody>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col>
                    <Accordion>
                      <Accordion.Item eventKey="1">
                        <AccordionHeader>
                          <img src={logo} width={18} height={18} />
                          &nbsp;&nbsp;ICICI Prudential Life
                        </AccordionHeader>
                        <AccordionBody>
                          Premium payment can be made at ICICI Prudential Life
                          Insurance branches via
                          <br />
                          <br />- Cheque/Demand Draft* <br />- Credit/Debit card
                          at select locations. <br />
                          <a href="#">Click here</a> to know the list of
                          branches.
                          <br />
                          <br /> * Cheque/DD to be drawn in favour of 'ICICI
                          Prudential Life Insurance Co. Ltd. Policy No XXXXXXXX.
                          Kindly mention your name and contact number on the
                          reverse side.
                        </AccordionBody>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col>
                    <Accordion>
                      <Accordion.Item eventKey="2">
                        <AccordionHeader>
                          <img src={icon} width={18} height={18} />
                          &nbsp;&nbsp;State Bank of India
                        </AccordionHeader>
                        <AccordionBody>
                          ICICI Prudential policyholders can walk into any State
                          Bank of India Branches across India to avail of the
                          facility of premium payment via Cheque
                          ((Local/Transfer) & Cash (only up to `49,999/-*).
                          Please make the cheque in favour of 'ICICI Prudential
                          Life Insurance Co. Ltd.’ Policy No XXXXXXXX.
                          <br />
                          <br />
                          *Premium payments are accepted in cash only up to
                          `49,999/-.
                        </AccordionBody>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
