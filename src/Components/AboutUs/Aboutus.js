import React from "react";
import { Header } from "../InitialPages/Header";
import { Table } from "react-bootstrap";

export const Aboutus = () => {
  return (
    <div>
      <Header isLoggedIn={false} />
      <div className="contains">
        <h5>Company Overview</h5>
        <p>
          ICICI Prudential Life Insurance Company Limited (ICICI Prudential
          Life) is promoted by ICICI Bank Limited and Prudential Corporation
          Holdings Limited.
        </p>
        <p>
          ICICI Prudential Life began its operations in the fiscal year 2001. On
          a retail weighted received premium basis (RWRP), it has consistently
          been amongst the top companies in the Indian life insurance sector.
          Our Assets Under Management (AUM) at December 31, 2023 were `2,866.76
          billion.
        </p>
        <p>
          At ICICI Prudential Life, we operate on the core philosophy of
          customer-centricity. We offer long-term savings and protection
          products to meet the different life stage requirements of our
          customers. We have developed and implemented various initiatives to
          provide cost-effective products, superior quality services, consistent
          fund performance and a hassle-free claim settlement experience to our
          customers.
        </p>
        <p>
          In FY2015 ICICI Prudential Life became the first private life insurer
          to attain assets under management of `1 trillion. ICICI Prudential
          Life is also the first insurance company in India to be listed on
          National Stock Exchange (NSE) and Bombay Stock Exchange (BSE).
        </p>
        <div>
        <Table striped>
      <thead>
        <tr>
          <th>Year</th>
          <th>Particulars</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>FY2001</td>
          <td>Our company started operations</td>
        
        </tr>
        <tr>
          <td>FY2002</td>
          <td>Crossed the mark of 100,000 policies</td>
         
        </tr>
       
      </tbody>
    </Table>
        </div>
      </div>
    </div>
  );
};
