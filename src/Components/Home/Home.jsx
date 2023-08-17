import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import HowWeCanMakeApp from "../HowWeCanMakeApp/HowWeCanMakeApp";
import Comparison from "../Comparison/Comparison/Comparison";
import Service from "../Service/Service";
import Portfolio from "../Our Portfolio/Portfolio";
import BusinessSection from "../BusinessSection/BusinessSection";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";
import Quotes from "../Quotes/Quotes";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <HowWeCanMakeApp />
      <Comparison />
      <Service />
      <Portfolio />
      <BusinessSection />
      <Team />
      <Testimonial />
      <Quotes />
      <Footer />
    </div>
  );
};

export default Home;
