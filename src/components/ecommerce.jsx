import React from "react";

export const Ecommerce = () => {
  return (
    <div id="ecommerce" className="text-center">
      <div className="container">
        {/* Section Title */}
        <div className="section-title">
          <h2>E-Commerce</h2>
        </div>
        {/* Description */}
        <div className="about-text text-left">
          <p>
            Chronowork is trusted by global e-commerce brands to expand their reach across all media channels and deliver engaged users through brand-safe and cost-efficient advertising.
          </p>
          <p>
            We are able to achieve that by providing our curated base of affiliates and publishers with a comprehensive package of tools for tracking and optimization, as well as competitive commission rates, smooth cash flow, and countless performance-based incentives. Local retailers with niche merchandise and international franchises alike multiply their customer bases with Chronowork's e-commerce solutions
          </p>
        </div>
        {/* Features List */}
        <div className="row features-list">
          {/* First Column */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <ul>
              <li>In-house traffic quality control and brand safety tools</li>
              <li>Quick and simple platform integration (S2S postback, API, apps via AppsFlyer)</li>
              <li>Comprehensive omnichannel advertising across 180+ GEOs</li>
              <li>500+ premium publishers</li>
              <li>Granular performance reports</li>
              <li>Network-exclusive placements</li>
              <li>No fee for merchants</li>
            </ul>
          </div>
          {/* Second Column */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <ul>
              <li>Competitive commission rates</li>
              <li>Quick account review process</li>
              <li>1500+ partnered brands with exclusive offers</li>
              <li>Exclusive deals on 3rd party marketing tools</li>
              <li>Performance-based bonuses and loyalty programs</li>
              <li>Exclusive in-house tools for ad creation and campaign optimization</li>
              <li>Flexible payment terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
