import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="row" id="supportWrapper">
        <div className="col-6">
          <h4 className="mt-5 mx-4">Support Portal</h4>
        </div>
        <div className="col-6 mt-5 text-center">
          <a href="">Track Tickets</a>
        </div>
      </div>
      <div className="row p-5 m-3 mt-1">
        <div className="col-1"></div>
        <div className="col-5 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="mb-4" />

          <div className="text-decoration-underline">
            <ol>
              <li>
                <a href="">Track account opening</a>
              </li>
              <li>
                <a href="">Track segment activation</a>
              </li>
              <li>
                <a href="">Intraday margins</a>
              </li>
              <li>
                <a href="">Kite user manual</a>
              </li>
            </ol>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-3">
          <h1 className="fs-3 mb-3">Featured</h1>
          <ol>
            <li className="mb-2 text-decoration-underline">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="text-decoration-underline">
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
