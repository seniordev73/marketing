import React, { useState, useEffect } from "react";

export const Header = (props) => {
  const [isMobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768); // Mobile view for screens < 768px
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <div className="">
              <div className="col-md-8 col-md-offset-2 intro-text">
                {/* Web View */}
                {!isMobileView && (
                  <>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        color: "white",
                        fontSize: "22px",
                      }}
                    >
                      The only way to succeed in online marketing is to partner
                      with the best
                    </p>
                    <h1
                      style={{
                        color: "white",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 900,
                      }}
                    >
                      {props.data ? props.data.title : "Loading"}
                      <span></span>
                    </h1>
                    <div className="card-container">
                      <div className="card">
                        <h3>Affiliates</h3>
                        <p>
                          Exclusive deals, expert managers, and the
                          best-equipped platform on the market
                        </p>
                        <button onClick={handleaffiliate}>Join Now</button>
                      </div>
                      <div className="card">
                        <h3>Advertisers</h3>
                        <p>
                          Brand-safe advertising, meticulous quality control,
                          and worldwide scaling with sharp targeting.
                        </p>
                        <button onClick={handleadvertiser}>Join Now</button>
                      </div>
                    </div>
                  </>
                )}

                {/* Mobile View */}
                {isMobileView && (
                  <>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        color: "white",
                        fontSize: "15px",
                        textAlign: "center",
                        marginTop: "-60px",
                        maxWidth: "300px"
                      }}
                    >
                      The only way to succeed in online marketing is to partner
                      with the best
                    </p>
                    <h1
                      style={{
                        color: "white",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 900,
                        fontSize: "36px"
                      }}
                    >
                      {props.data ? props.data.title : "Loading"}
                      <span></span>
                    </h1>
                    <div className="card-container" style={{ flexDirection: "column" }}>
                      <div className="card">
                        <h3>Affiliates</h3>
                        <p>
                          Exclusive deals, expert managers, and the
                          best-equipped platform on the market
                        </p>
                        <button onClick={handleaffiliate}>Join Now</button>
                      </div>
                      <div className="card" style={{ marginTop: "20px" }}>
                        <h3>Advertisers</h3>
                        <p>
                          Brand-safe advertising, meticulous quality control,
                          and worldwide scaling with sharp targeting.
                        </p>
                        <button onClick={handleadvertiser}>Join Now</button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
