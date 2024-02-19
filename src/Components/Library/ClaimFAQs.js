import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import { Header } from "../InitialPages/Header";

export const ClaimFAQs = () => {
  //   const [faq, setfaq] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [activeHeader, setActiveHeader] = useState(null);
  const [accordionData, setAccordionData] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      let url = `http://localhost:8080/`;
      axios
        .get(url, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            setAccordionData(response.data);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          setIsLoading(false);
          Swal.fire({
            title: "Error!",
            text: "Check out ",
            icon: "error",
          });
        });
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);
  const handleHeaderClick = (headerValue) => {
    setActiveHeader((prevHeader) =>
      prevHeader === headerValue ? null : headerValue
    );
  };

  return (
    <div>
      <Header isLoggedIn={true} />{" "}
      <div>
        {accordionData.map((item) => (
          <div key={item.id}>
            <div
              onClick={() => handleHeaderClick(item.headerValue)}
              style={{
                cursor: "pointer",
                background:
                  activeHeader === item.headerValue ? "lightgrey" : "white",
              }}
            >
              {console.log(item.headerValue)}
            </div>

            {activeHeader === item.headerValue && (
              <div>
                {/* Render data fetched from the database */}
                <div>This is swetha</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
