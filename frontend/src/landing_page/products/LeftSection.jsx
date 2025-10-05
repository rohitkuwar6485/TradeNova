import React from "react";
import { assets } from "../../assets/assests";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  tryDemoLink,
  learnMore,
  learnMoreLink,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row p-4">
        <div className="col-6 mt-4">
          <img src={imageURL} />
        </div>
        <div className="col-2"> </div>
        <div className="col-4 p-4 mt-4">
          <h2>{productName}</h2>
          <p className="text-muted mt-3">{productDescription}</p>

          {/* CTA Links */}
          <div className="cta-links mt-3">
            {tryDemoLink ? (
              <a href={tryDemoLink}>
                {tryDemo}{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            ) : (
              <a href="">
                {tryDemo}{" "}
                {tryDemo ? (
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                ) : (
                  " "
                )}
              </a>
            )}

            {learnMoreLink ? (
              <a href={learnMoreLink} className="ms-4">
                {learnMore}{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            ) : (
              <a href="" className="ms-4">
                {learnMore}{" "}
                {learnMore ? (
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                ) : (
                  " "
                )}
              </a>
            )}
          </div>

          {/* App Badges */}
          <div className="app-badges mt-4">
            <a href={googlePlay} className="me-3">
              <img src={assets.googlePlayBadge} alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src={assets.appstoreBadge} alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
