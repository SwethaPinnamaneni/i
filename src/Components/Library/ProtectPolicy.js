import React from "react";
import policyProtect from "../Images/ProtectPolicy.jpg";
import "../Styles/ProtectPolicy.css";
import { Header } from "../InitialPages/Header";

export const ProtectPolicy = () => {
  return (
    <div>
      <Header isLoggedIn={true} />
      <div className="head-container">
        <div className="image-container">
          <h1 className="top-heading" style={{ color: "#fff" }}>
            Protect Your Policy
          </h1>
          <img
            src={policyProtect}
            alt="Policy Protect"
            width={1260}
            height={200}
          />
        </div>
        <div className="contains">
          <h5>
            Report suspected frauds and ensure that your policy information is
            never compromised.
          </h5>
          Keep your policy information confidential and do not disclose it to
          unauthorised people who claim to be associated with ICICI Prudential
          Life Insurance, Insurance Regulatory and Development Authority of
          India (IRDAI) or other government agencies such as Income Tax
          Department of India. These unauthorised individuals may approach you
          via phone calls, SMS and e-mails.
          <br />
          If you do receive a call, SMS or email that seems fraudulent, take the
          following steps:
          <ul>
            <li>
              Do not respond to messages or calls offering opportunities to
              receive benefits in cash from your existing policy
            </li>
            <li>
              Do not surrender your existing policy based on these false
              promises
            </li>
            <li>
              Make sure you do not share the details of your existing policy,
              such as Fund Value, policy number, date of issue, and other
              similar information.
            </li>
            <li>
              Never give away confidential information like passwords, date of
              birth, credit card number, etc.
            </li>
          </ul>
          Never give away confidential information like passwords, date of
          birth, credit card number, etc. To report a fraud and get further
          assistance, you can:
          <div className="card-row">
            <div className="cards">
              <h4 style={{ textAlign: "center", padding: "10px" }}>
                Call on 1860-266-7766*
              </h4>
            </div>

            <div className="cards">
              <h4 style={{ textAlign: "center", padding: "10px" }}>
                Visit Our Branch
              </h4>
            </div>

            <div className="cards">
              <h4 style={{ textAlign: "center", padding: "5px" }}>
                Email to <a href="#">lifeline@iciciprulife.com</a>
              </h4>
            </div>
          </div>
          <h6>Important Information</h6>
          <ul>
            <li>
              *When calling our customer service, please do not prefix "+" or
              "91" or "00" before the number
            </li>
            <li>
              Call Timings – 10:00 A.M. to 7:00 P.M., Monday to Saturday (except
              national holidays)
            </li>
            <li>
              Customers outside India can call us on our International Customer
              Service Helpline: +91 80693 85555 (Charges as applicable)
            </li>
            <li>
              © 2012, ICICI Prudential Life Insurance Co. Ltd. Registered
              Address: ICICI Pru Life Towers, 1089 Appasaheb Marathe Marg,
              Prabhadevi, Mumbai-400025. Reg No: 105
            </li>
            <li>Insurance is the subject matter of the solicitation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
