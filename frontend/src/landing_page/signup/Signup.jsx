import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assests";

const Signup = () => {
  return (
    <div className="container py-5 mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          {/* Heading */}
          <h1
            className="fw-bold mb-3"
            style={{ fontSize: "28px", whiteSpace: "nowrap" }}
          >
            Open a free demat and trading account online
          </h1>

          {/* Paragraph */}
          <p
            className="text-muted mb-4"
            style={{ fontSize: "20px", whiteSpace: "nowrap" }}
          >
            Start investing brokerage-free and join a community of 1.6+ crore
            investors and traders
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-8 text-center">
          <img src={assets.account_open} />
        </div>
        <div className="col-4 mt-5">
          <h1 className="text-muted fs-3 mt-5 text-center">Signup now</h1>
          <p className="text-muted text-center">
            Or track your existing application.
          </p>

          <Link
            to={"/usersignup"}
            className="btn btn-primary btn-lg fw-bold text-white w-50 rounded-pill shadow-sm mx-auto d-block"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
