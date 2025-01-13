import React from "react";

export const Header = (props) => {
  const handleaffiliate = () => {
    // Redirect to the affiliate registration URL
    window.location.href = process.env.REACT_APP_REGISTER_AFFILIATE_URL;
  };
  const handleadvertiser = () => {
    // Redirect to the advertiser registration URL
    window.location.href = process.env.REACT_APP_REGISTER_ADVERTISER_URL;
  };
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, color: "white", fontSize: "22px"}}>The only way to succeed in online marketing is to partner with the best</p>
                <h1 style={{ color: "white", fontFamily: "Inter, sans-serif", fontWeight: 900 }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <div class="card-container">
                  <div class="card">
                    <h3>Affiliates</h3>
                    <p>Exclusive deals, expert managers, and the best-equipped platform on the market</p>
                    <button onClick={handleaffiliate}>Join Now</button>
                  </div>
                  <div class="card">
                    <h3>Advertisers</h3>
                    <p>Brand-safe advertising, meticulous quality control, and worldwide scaling with sharp targeting.</p>
                    <button onClick={handleadvertiser}>Join Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
//8 container
/*
<a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  JOIN NOW
                </a>{" "}*/