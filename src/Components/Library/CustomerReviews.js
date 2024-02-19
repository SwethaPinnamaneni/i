import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      let url = `http://localhost:8080/getAllReviews`;
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
            setReviews(response.data);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          setIsLoading(false);
          Swal.fire({
            title: "Error!",
            text: "Check out policies",
            icon: "error",
          });
        });
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);
  const generateStars = (ratings) => {
    const starCount = Math.round(ratings); // Assuming ratings are out of 5
    const stars = Array.from({ length: starCount }, (_, index) => (
      <FaStar key={index} style={{ color: "rgb(160,5,2)" }} />
    ));
    return stars;
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="fw-bold mb-4" style={{ color: "#0f487e" }}>
              Customer Testimonials & Reviews
            </h3>
            <h5
              className="mb-4 pb-2 mb-md-5 pb-md-0"
              style={{ color: "rgb(160, 5, 2)" }}
            >
              Here is what our delighted customers have to say about their
              online buying experience from{" "}
              <a href="https://www.iciciprulife.com">www.iciciprulife.com</a>
            </h5>
          </div>
        </div>
        <div className="row">
          {isLoading ? (
            <p>Loading reviews...</p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="col-md-4 mb-4 mb-md-0">
                <div className="card">
                  <div className="card-body py-4 mt-2">
                  
                    <h5
                      className="font-weight-bold"
                      style={{ color: "rgb(160,5,2)" }}
                    >
                      {review.customerName}
                    </h5>
                    <p>{review.description}</p>
                    <p className="mb-2">
                      {review.ratings} &nbsp;
                      {generateStars(review.ratings)}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
