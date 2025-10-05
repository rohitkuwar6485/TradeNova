import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assests";
import "./universe.css";

const Universe = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <h2 className="mt-5 fs-4 mb-4">The TradeNova Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row mt-5">
          <div className="col-4 p-3">
            <img src={assets.smallcaseLogo} className=" mb-2 universe-logo" />
            <br />
            <p className="text-small text-muted">
              Thematic investing platform
              <br />
              that helps you invest in diversified
              <br />
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src={assets.tijori} className="mb-4 universe-logo" />
            <p className="text-small text-muted">
              Investment research platform <br />
              that offers detailed insights on stocks,
              <br /> sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src={assets.zerodhaFundhouse} className="mb-4 universe-logo" />
            <p className="text-small text-muted">
              Our asset management venture
              <br />
              that is creating simple and transparent index
              <br />
              funds to help you save for your goals.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-4 p-3">
            <img src={assets.goldenpiLogo} className="mb-4 universe-logo" />
            <p className="text-small text-muted">Bonds trading platform</p>
          </div>
          <div className="col-4 p-3">
            <img src={assets.streakLogo} className="mb-4 universe-logo" />
            <p className="text-small text-muted">
              Systematic trading platform
              <br />
              that allows you to create and backtest
              <br />
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src={assets.dittoLogo} className="mb-4 universe-logo" />
            <p className="text-small text-muted">
              Personalized advice on life
              <br />
              and health insurance. No spam
              <br />
              and no mis-selling.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <Link
            to="/signup"
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Universe;
