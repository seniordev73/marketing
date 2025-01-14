import React from "react";

export const Affiliates = () => {
  return (
    <div id="affiliates" className="text-center">
      <div className="container">
        {/* Section Title */}
        <div className="section-title">
          <h2>Affiliates</h2>
        </div>
        {/* Description */}
        <div className="about-text text-left">
          <p>
            The qualities most affiliates look for in an affiliate network are exclusive offers with competitive payouts, experienced and proactive managers, and flexible conditions to secure cash flow for their campaigns.
          </p>
          <p>
            When working with ClickDealer, those are the absolute basics that are to be expected. Providing technologies and insights that enable our affiliates to be among the first to profit from the latest market trends is what truly makes thousands of expert affiliates choose us as their primary network.
          </p>
        </div>
        {/* Features List */}
        <div className="features-list">
          {/* First Column */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <ul>
              <li>Customizable LP rotation, ad creative splitting</li>
              <li>Simultaneous multiple event type reporting</li>
              <li>Campaign/event-level global postback shutdown</li>
              <li>Custom redirect domain parking</li>
            </ul>
          </div>
          {/* Second Column */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <ul>
              <li>Streamlined and intuitive UI</li>
              <li>Multi-user access and interface for affiliate teams</li>
              <li>Offer attribute search via API and affiliate portal</li>
              <li>E-commerce toolkit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
