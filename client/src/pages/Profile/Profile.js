import React from "react";
import Yvideos from "../../components/Yvideos/Yvideos";
import Nav from "../../components/Nav/Nav";

import Footer from "../../components/Footer/Footer";
import ProfileContent from "../../components/ProfileContent/ProfileContent";

const Home = () => {
  return (
    <div>
      <Nav />
      <ProfileContent />
      {/* <Videos /> */}
      <Yvideos />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
