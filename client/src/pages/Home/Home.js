import React from "react";

import Videos from "../../components/Videos/Videos";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Videos />
      {/*<Categories />
      <Courses />
      <Faqs />
      <Testimonials /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
