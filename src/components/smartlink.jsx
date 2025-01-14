import React, { useState, useEffect } from "react";

export const Smartlink = () => {
  const [isMobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768); // Mobile view for screens < 768px
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Embedded data for Smartlink
  const data = [
    {
      img: "img/smartlink/icon-link.png",
      name: "Multiple smartlink builds for various niches",
    },
    {
      img: "img/smartlink/icon-payment.png",
      name: "Weekly payouts with $100 min. payment threshold",
    },
    {
      img: "img/smartlink/icon-ai.png",
      name: "Exclusive offers in 180 geos",
    },
    {
      img: "img/smartlink/icon-money-alt.png",
      name: "100% monetization for all types of traffic",
    },
    {
      img: "img/smartlink/icon-globe.png",
      name: "AI-driven optimization",
    },
    {
      img: "img/smartlink/icon-money.png",
      name: "Convenient and diverse payment options",
    },
  ];

  return (
    <div id="smartlink" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Smartlink</h2>
          {!isMobileView && (
            <>
              <p>
                In pursuit of peak advertising efficiency and profitability,
                automation is non-negotiable. The industry is unimaginable without
                programmatic distribution, and currently, smartlinks are
                revolutionizing campaign optimization much the same way. CHRONO was
                one of the first companies in performance marketing to release a
                smartlink, and our in-house development team and machine learning
                algorithms have been keeping it the leading solution on the market
                ever since. Multiple builds and countless updates later, CHRONO's
                smartlinks remain the best option for marketers who run
                self-optimizing campaigns.
              </p>
            </>
          )}
          {isMobileView && (
            <>
              <p style={{ fontSize:"15px", textAlign: "left"}}>
                In pursuit of peak advertising efficiency and profitability,
                automation is non-negotiable. The industry is unimaginable without
                programmatic distribution, and currently, smartlinks are
                revolutionizing campaign optimization much the same way. CHRONO was
                one of the first companies in performance marketing to release a
                smartlink, and our in-house development team and machine learning
                algorithms have been keeping it the leading solution on the market
                ever since. Multiple builds and countless updates later, CHRONO's
                smartlinks remain the best option for marketers who run
                self-optimizing campaigns.
              </p>
            </>
          )}
        </div>
        <div className="" style={{ display: "flex", flexWrap: "wrap" }}>
          {!isMobileView && (
            <>
              {data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  style={{
                    flex: "1 1 33%", // Adjust this to control column width
                    maxWidth: "33%", // Ensure items fit within three columns
                    textAlign: "center", // Center align content
                    marginBottom: "20px", // Add spacing between rows
                  }}
                >
                  {/* Image */}
                  <img
                    alt={d.name}
                    src={process.env.PUBLIC_URL + "/" + d.img}
                    style={{
                      width: "100px", // Adjust size as needed
                      height: "100px",
                      marginBottom: "10px",
                    }}
                  />
                  {/* Description */}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                  </div>
                </div>
              ))}
            </>
          )}
          {isMobileView && (
            <>
              {data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  style={{
                    flex: "1 1 33%", // Adjust this to control column width
                    maxWidth: "33%", // Ensure items fit within three columns
                    textAlign: "center", // Center align content
                    marginBottom: "20px", // Add spacing between rows
                  }}
                >
                  {/* Image */}
                  <img
                    alt={d.name}
                    src={process.env.PUBLIC_URL + "/" + d.img}
                    style={{
                      width: "100px", // Adjust size as needed
                      height: "100px",
                      marginBottom: "10px",
                    }}
                  />
                  {/* Description */}
                  <div className="service-desc">
                    <h3 style={{ fontSize: "10px", textAlign: "left"}}>{d.name}</h3>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
