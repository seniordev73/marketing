import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Affiliates } from "./components/affiliates";
import { Smartlink } from "./components/smartlink"
import { Ecommerce } from "./components/ecommerce"
import { About } from "./components/about";
import { Advertiser } from "./components/advertiser";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Advertiser data={landingPageData.Advertiser} />
      <Affiliates data={landingPageData.Features} />
      <Smartlink date={landingPageData.Smartlink} />
      <Ecommerce date={landingPageData.Ecommerce} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
