import React from "react";
import steps from "../Images/insurancesteps.jpg";
import insurance from "../Images/LifeInsurance.jpg";
import "../Styles/Heading.css";
import { useNavigate } from "react-router-dom";
import { Header } from "../InitialPages/Header";
import { Button } from "react-bootstrap";

export const LifeInsurance = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header isLoggedIn={true} />
      <div className="head-container">
        <div className="image-container">
          <h1 className="top-heading">What is Life Insurance?</h1>
          <img src={insurance} alt="Life Insurance" width={1260} height={200} />
          <div className="button-container">
            <button
              className="section-button"
              onClick={navigate("/PolicyPlans")}
            >
              View Plans
            </button>
            <div className="line"></div>
            <button
              className="section-button"
              onClick={navigate("/PremiumPayment")}
            >
              Check
              <br />
              Premium
            </button>
          </div>
        </div>
        <div className="contains">
          <h5 style={{ color: "#0f487e" }}>Life Insurance - Meaning</h5>
          Life Insurance can be defined as a contract between an insurance
          policy holder and an insurance company, where the insurer promises to
          pay a sum of money in exchange for a premium, upon the death of an
          insured person or after a set period. Here, at ICICI Prudential Life
          Insurance, you pay premiums for a specific term and in return, we
          provide you with a Life Cover. This Life Cover secures your loved
          ones’ future by paying a lump sum amount in case of an unfortunate
          event. In some policies, you are paid an amount called Maturity
          Benefit at the end of the policy term.
          <br />
          There are two basic types of Life Insurance plans -<br /> 1. Pure
          Protection
          <br /> 2. Protection and Savings <br />
          <br />
          <h5>What is Pure Protection Plan? </h5>A Pure Protection plan is
          designed to secure your family’s future by providing a lump sum
          amount, in your absence.
          <br />
          <h5>What is Protection and Savings Plan?</h5> A Protection and Savings
          plan is a financial tool that helps you plan for your long-term goals
          like purchasing a home, funding your children’s education, and more,
          while offering the benefits of a Life Cover. Click here to know more
          about different types of Life Insurance Plans.
          <br />
          <h5>Factors that affect life insurance premium</h5> Now that you know
          what is life insurance and why you need it, find out the factors that
          can affect the life insurance premium:
          <br />
          <ul>
            <li>
              <h5>Age:</h5> One of the prime factors that affect the premium for
              a life insurance plan is your age. The life insurance premium is
              lower for younger people and gradually increases with age{" "}
            </li>
            <li>
              <h5>Gender:</h5> Studies have shown women live longer than men1.
              Therefore, the life insurance premium is lower for women as
              compared to men
            </li>
            <li>
              <h5>Health conditions:</h5> Your present and past health
              conditions can determine the premium for your life insurance plan.
              If you have any pre-existing illnesses or have suffered from an
              illness in the past that may resurface or affect your present
              health, you would be charged a higher premium
            </li>
            <li>
              <h5>Family health history:</h5> The chances of suffering from a
              disease that runs in your family are considerably high. So, if any
              hereditary illnesses run in your family, you may have to pay a
              higher premium
            </li>
            <li>
              <h5>Smoking and drinking alcohol:</h5> Lifestyle habits like
              smoking and drinking alcohol can impact your health and lead to
              multiple health issues. Therefore, insurance companies charge a
              high premium for individuals who smoke or drink alcohol{" "}
            </li>
            <li>
              <h5> Type of coverage:</h5> The type of coverage you opt for can
              increase or decrease the life insurance plan’s premium. If you add
              any riders to your plan, the premium would increase. A longer
              policy term can also result in a higher premium compared to a
              shorter term. In addition to this, the type of life insurance plan
              you select also impacts the premium. For instance, term life
              insurance is the most affordable form of life insurance
            </li>
            <li>
              <h5>Amount of coverage:</h5> A higher sum assured would result in
              a higher premium and vice versa
            </li>

            <li>
              <h5>Occupation:</h5> If you work in a high-risk job, the premium
              for your life insurance plan would be higher than others. For
              example, if you work in construction or if your job puts you at
              any kind of risk, such as regular exposure to chemicals, the
              insurance company will charge a higher premium
            </li>
          </ul>
          <h5>What are the benefits of having Life Insurance?</h5> Life
          insurance can offer several benefits to you and your loved ones,
          including the following:
          <br />
          <ul>
            <li>
              <h5>Financial Security</h5> When you buy a life insurance policy,
              the insurance company charges a premium in exchange for providing
              financial security to your beneficiaries in case of an unfortunate
              event of death. The proceeds from life insurance can be used by
              the beneficiaries as an income replacement to cover day-to-day
              expenses.
            </li>
            <li>
              <h5>Wealth Creation</h5>
              Some life insurance plans offer you the option to invest and grow
              your money. This enables you to stay financially prepared for your
              future needs. Life insurance can offer good returns and income.
            </li>
            <li>
              <h5>Tax benefits</h5> Life insurance plans offer multiple tax$
              benefits. The premiums paid towards a life insurance plan are
              deductible up to ₹ 1.5 lakh per annum under Section 80C$ and the
              maturity benefits are also tax-free subject to conditions
              prescribed under Section 10(10D)$ of The Income Tax Act, 1961.
            </li>
            <li style={{ listStyleType: "none" }}>
              {" "}
              <Button
                variant="danger"
                onClick={navigate("/PremiumPaymentOptions")}
              >
                Check for Life Plans
              </Button>
            </li>
          </ul>
          <img src={steps} width={800} height={500} />
        </div>
      </div>
    </div>
  );
};
