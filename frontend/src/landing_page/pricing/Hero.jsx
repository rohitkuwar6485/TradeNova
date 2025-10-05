import React from "react";
import { assets } from "../../assets/assests";
import RupeesBox from "./RupeesBox";

const Hero = () => {
  return (
    <div className="container text-center">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-3">
          Free equity investment and flat &#8377;20 intraday and F&O trades
        </h3>
      </div>

      {/* Pricing cards */}
      <div className="row py-5 mt-5">
        <div className="col-md-4">
          <RupeesBox
            imageURL={assets.pricingEquity}
            heading="Free equity delivery"
            paragraph="All equity delivery investments (NSE, BSE) are absolutely free — ₹ 0 brokerage."
          />
        </div>
        <div className="col-md-4">
          <RupeesBox
            imageURL={assets.intradayTrades}
            heading="Intraday and F&O trades"
            paragraph="Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
          />
        </div>
        <div className="col-md-4">
          <RupeesBox
            imageURL={assets.pricingEquity}
            heading="Free direct MF"
            paragraph="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
