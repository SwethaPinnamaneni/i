import React from "react";
import { Row, Col } from "react-bootstrap";
import Asset from "../Images/Asset.jpg";
import { useNavigate } from "react-router-dom";
import { Header } from "../InitialPages/Header";

export const AssetAllocation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header isLoggedIn={true} />
      <div className="life-insurance-container">
        <div className="image-container">
          <h1 className="life-insurance-heading" style={{ color: "#fff" }}>
            Asset Allocation
          </h1>
          <img src={Asset} alt="Asset Allocation" width={1260} height={200} />
          <div className="button-container">
            <button
              className="section-button"
              onClick={navigate("/PolicyPlans")}
            >
              Check Plans
            </button>
          </div>
        </div>

        <div className="contains">
          <Row>
            <Col>
              <h5>What is Asset Allocation?</h5>
              Asset allocation refers to distributing or allocating your money
              across multiple asset classes, such as equity, fixed income, debt,
              cash, and others. The primary purpose of asset allocation is to
              reduce the risk associated with your investment. It is possible
              that all your assets may not provide you with similar returns.
              Some assets that provide market-linked returns may get affected by
              market volatility. Hence, by investing in multiple asset classes,
              you can reduce risk, lower the probability of losses and improve
              the possibility of earning better returns.
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Asset Allocation in investment</h5>
              The most important determinant of an investor’s long-term
              investment results is the composition of assets or asset mix in
              the investor’s portfolio. While factors such as security and
              manager selection do matter, statistically speaking, their impact
              keeps falling as the investment horizon gets longer, leaving asset
              allocation as the dominant factor driving investment results.
              Thus, in any financial planning process, arriving at an
              appropriate asset allocation is the most critical decision
              variable. In the asset mix, there are likely to be assets which
              have higher rewards and higher risks such as equities and assets,
              which have lower rewards and lower risks such as government bonds.
              In other words, over the long term, policyholders cannot expect
              equity type of returns by participating in pure debt funds (low
              risk-low reward) and vice versa. An investor should balance risk
              tolerance* to maximise future value over the investment horizon.
              Risk tolerance* is the ability to tolerate either a more likely
              temporary or a less likely permanent fall in the value of the
              investment. Investors who cannot tolerate a fall in the value of
              investment from time to time (i.e. volatility in returns) should
              restrict their exposure to the riskier asset class of equities.
              Likewise, investors who have substantial working life ahead and
              who have limited financial liabilities in the medium term should
              take exposure to a high level of equities in their overall asset
              allocation. ICICI Prudential Life Insurance Company offers a wide
              suite of funds which range from equity funds to pure debt funds
              and also balanced funds (a blend of both debt and equity)
              available for policyholders with varied risk appetites and
              investment horizons. Please refer to the individual policy-related
              document for the availability of the funds as per your choice. We
              offer protection as well as savings-related life insurance/pension
              plans as per the needs of policyholders to help save for their
              goals/retirement planning and for the financial security of their
              families.
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Importance of Asset Allocation</h5>
              It is difficult to predict how the market will perform in the
              future and how it will affect your investments. When you invest in
              multiple asset classes, such as fixed income, debt, and more, your
              risk is spread across these various assets and hence, factors such
              as market volatility will have a lesser impact. This ensures that
              if one asset underperforms, you get returns from another asset
              which performs better. This way, the overall risk and returns are
              balanced.
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Age-Based Asset Allocation</h5>
              Asset allocation can be decided on the basis of your age. You may
              use the rule of 100 to determine the asset allocation for your
              investment portfolio. The rule requires you to subtract your age
              from 100 to arrive at the percentage of your portfolio investment
              in equity. For example, if you are 40 years old, you can invest
              (100 – 40) = 60% of your money in equity. The remaining 40% can be
              invested in fixed income (debt) and cash. With age, your risk
              appetite drops, which is why your investment in equity may also
              need to be reduced. For instance, continuing with the same example
              above, ten years from now, when you turn 50, your allocation can
              be (100 – 50) = 50% in equity. The remaining 50% can be invested
              in fixed income and cash.
            </Col>
          </Row>
          <h5>Factors that can affect asset allocation</h5>
          Below are some key factors that can affect your asset allocation:
          <h6>Time horizon:</h6>
          Some plans such as ULIPs provide high returns over the long term.
          However, they may have a lock-in period and hence they are suitable
          for investments with a long time horizon. If you have a shorter time
          horizon for investment, for goals such as buying a car, travelling,
          and more, you may consider investing in an asset class that allows you
          to withdraw money at your convenience.
          <h6>Risk appetite:</h6> All investments carry risk. Some asset classes
          offer lower risk than others. The lower the risk the higher is the
          probability that your investment is safe, and vice versa. Risk
          appetite refers to your capacity towards taking a risk. If you have a
          higher risk appetite, you may consider investing in asset classes such
          as equity or market-linked funds. If you have a lower risk appetite,
          you may consider investing in fixed-income instruments or debt funds.
          <h5>Conclusion</h5>
          The right allocation of funds in the right combination of assets can
          help you maximise your returns and limit risk. It is also essential to
          understand that asset allocation may differ for each investor.
          Further, your asset allocation may require changes as you age or as
          your financial goals change.
        </div>
      </div>
    </div>
  );
};
