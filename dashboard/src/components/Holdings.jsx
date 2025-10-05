import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { VerticalGraph } from "./VerticalGraph";
// import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/allHoldings").then((res) => {
      //console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="container my-4">
      {/* Title */}
      <h3 className="mb-3 fw-semibold">Holdings ({allHoldings.length}) </h3>

      {/* Table */}
      <div className="table-responsive mb-4">
        <table className="table table-striped table-hover align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. Cost</th>
              <th>LTP</th>
              <th>Cur. Val</th>
              <th>P&L</th>
              <th>Net Chg.</th>
              <th>Day Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit
                ? "text-success fw-bold"
                : "text-danger fw-bold";
              const dayClass = stock.isLoss
                ? "text-danger fw-bold"
                : "text-success fw-bold";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Cards */}
      <div className="row g-3">
        <div className="col-md-4">
          <div className="card text-center shadow-sm h-100 p-3">
            <h5 className="fw-bold">
              ₹29,875.<span className="text-muted">55</span>
            </h5>
            <p className="text-muted mb-0">Total Investment</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow-sm h-100 p-3">
            <h5 className="fw-bold">
              ₹31,428.<span className="text-muted">95</span>
            </h5>
            <p className="text-muted mb-0">Current Value</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow-sm h-100 p-3">
            <h5 className="fw-bold text-success">₹1,553.40 (+5.20%)</h5>
            <p className="text-muted mb-0">P&L</p>
          </div>
        </div>
      </div>
      <VerticalGraph data={data} />
    </div>
  );
};

export default Holdings;
