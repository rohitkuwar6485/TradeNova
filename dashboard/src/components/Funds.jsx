import React from "react";

const Funds = () => {
  return (
    <div className="container my-4">

      {/* Top actions */}
      <div className="card p-3 mb-4 d-flex flex-md-row flex-column justify-content-between align-items-center">
        <p className="mb-2 mb-md-0 fw-medium">
          Instant, zero-cost fund transfers with UPI
        </p>
        <div className="d-flex gap-2">
          <button className="btn btn-warning">Add Funds</button>
          <button className="btn btn-primary">Withdraw</button>
        </div>
      </div>

      {/* Funds Row */}
      <div className="row g-3">
        {/* Equity Card */}
        <div className="col-md-8">
          <div className="card p-3 h-100">
            <h5 className="mb-3">Equity</h5>
            
            <div className="row text-center text-md-start">
              <div className="col-6 col-md-4 mb-2">
                <p className="mb-1 text-muted">Available Margin</p>
                <p className="fw-bold text-warning">₹4,043.10</p>
              </div>
              <div className="col-6 col-md-4 mb-2">
                <p className="mb-1 text-muted">Used Margin</p>
                <p className="fw-bold">₹3,757.30</p>
              </div>
              <div className="col-6 col-md-4 mb-2">
                <p className="mb-1 text-muted">Available Cash</p>
                <p className="fw-bold text-warning">₹4,043.10</p>
              </div>
            </div>

            <hr />

            <div className="row text-center text-md-start">
              <div className="col-6 col-md-3 mb-2">
                <p className="mb-1 text-muted">Opening Balance</p>
                <p>₹4,043.10</p>
              </div>
              <div className="col-6 col-md-3 mb-2">
                <p className="mb-1 text-muted">Payin</p>
                <p>₹4,064.00</p>
              </div>
              <div className="col-6 col-md-3 mb-2">
                <p className="mb-1 text-muted">SPAN</p>
                <p>₹0.00</p>
              </div>
              <div className="col-6 col-md-3 mb-2">
                <p className="mb-1 text-muted">Delivery Margin</p>
                <p>₹0.00</p>
              </div>
            </div>

          </div>
        </div>

        {/* Commodity Card */}
        <div className="col-md-4">
          <div className="card p-3 h-100 d-flex flex-column justify-content-center align-items-center text-center">
            <p className="mb-3">You don't have a commodity account</p>
            <button className="btn btn-primary">Open Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
