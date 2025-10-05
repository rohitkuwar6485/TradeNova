import React from "react";

const Summary = () => {
  return (
    <div className="container my-4">
      {/* Greeting */}
      <div className="mb-3">
        <h5 className="fw-medium text-dark">Hi, User!</h5>
      </div>

      {/* Cards Row */}
      <div className="row g-3">
        {/* Equity Card */}
        <div className="col-md-6">
          <div
            className="card h-100 shadow-sm border-start border-4 border-success p-3"
          >
            <p className="text-muted mb-2 fw-semibold">Equity</p>
            <h2 className="fw-bold mb-1">₹3.74k</h2>
            <p className="text-secondary mb-3 small">Margin Available</p>
            <div className="d-flex justify-content-between border-top pt-2 mt-2">
              <div>
                <p className="text-muted small mb-1">Margins Used</p>
                <span className="fw-bold text-dark">₹0</span>
              </div>
              <div>
                <p className="text-muted small mb-1">Opening Balance</p>
                <span className="fw-bold text-dark">₹3.74k</span>
              </div>
            </div>
          </div>
        </div>

        {/* Holdings Card */}
        <div className="col-md-6">
          <div
            className="card h-100 shadow-sm border-start border-4 border-success p-3"
          >
            <p className="text-muted mb-2 fw-semibold">Holdings (13)</p>
            <h2 className="fw-bold text-success mb-1">
              ₹1.55k <span className="small">+5.20%</span>
            </h2>
            <p className="text-secondary mb-3 small">P&L</p>
            <div className="d-flex justify-content-between border-top pt-2 mt-2">
              <div>
                <p className="text-muted small mb-1">Current Value</p>
                <span className="fw-bold text-dark">₹31.43k</span>
              </div>
              <div>
                <p className="text-muted small mb-1">Investment</p>
                <span className="fw-bold text-dark">₹29.88k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
