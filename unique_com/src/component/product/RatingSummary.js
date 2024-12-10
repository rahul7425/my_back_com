import React from "react";

const RatingSummary = ({ ratings }) => {
  return (
    <div className="mb-4">
      {ratings.map((item, index) => (
        <div className="d-flex align-items-center mb-2" key={index}>
          <span className="me-2">{item.stars}</span>
          <div className="flex-grow-1 bg-light rounded position-relative" style={{ height: "8px" }}>
            <div
              className="bg-warning rounded position-absolute"
              style={{ width: `${(item.count / 100) * 100}%`, height: "8px" }}
            ></div>
          </div>
          <span className="ms-2">{item.count}</span>
        </div>
      ))}
    </div>
  );
};

export default RatingSummary;
