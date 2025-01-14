import React from "react";

export const Advertiser = (props) => {
  return (
    <div id="advertiser" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Advertiser</h2>
          <p>
            CHRONO is your company's access point to every modern digital media channel. Our partner base of affiliates and publishers includes specialists who work exclusively with particular traffic types and are able to engage audience segments unreachable for generalist in-house teams.
            Whether our client's scope is international or local, we can deliver high-value prospects that fit the strictest industry-specific criteria. Those capabilities come from over a decade of building up and carefully vetting our supply-side partner base, implementing new brand safety and fraud prevention measures to keep up with evolving exploits, and developing in-house tools with functionality previously unavailable on the market.
          </p>
        </div>
        <div className="">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                <img className={d.icon} alt="" src={d.img}></img>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
