import React from "react";
import "./RupeesBox.css";

const RupeesBox = ({ imageURL, heading, paragraph }) => {
  return (
    <div className="rupees-box text-center p-4">
      <img src={imageURL} alt={heading} />
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default RupeesBox;
