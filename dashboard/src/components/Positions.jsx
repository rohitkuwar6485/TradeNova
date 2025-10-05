import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
// import { positions } from "../data/data";

const Positions = () => {

  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/allPositions`).then((res) => {
      //console.log(res.data);
      setAllPositions(res.data);
    });
  }, []);

  return (
    <div className="container my-4">
      {/* Title */}
      <h3 className="mb-3 fw-semibold">Positions ({allPositions.length})</h3>

      {/* Table */}
      <div className="table-responsive mb-4">
        <table className="table table-striped table-hover align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>Cur. Val</th>
              <th>P&L</th>
              <th>Net Chg.</th>
              <th>Day Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const profitValue = curValue - stock.avg * stock.qty;

              // Bootstrap classes for profit/loss
              const profClass =
                profitValue >= 0
                  ? "text-success fw-bold"
                  : "text-danger fw-bold";
              const netClass = stock.net.startsWith("+")
                ? "text-success fw-bold"
                : "text-danger fw-bold";
              const dayClass = stock.day.startsWith("+")
                ? "text-success fw-bold"
                : "text-danger fw-bold";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{profitValue.toFixed(2)}</td>
                  <td className={netClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
