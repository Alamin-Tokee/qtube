import React from "react";
import Vplayerright from "../../components/VplayerRight/Vplayerright";
import Vplayerleft from "../../components/VplayerLeft/Vplayerleft";
import Nav from "../../components/Nav/Nav";

const Vplayer = () => {
  return (
    <div>
      <Nav />
      <div className="container-fluid tm-container-content tm-mt-60">
        <div class="row tm-mb-90">
          <Vplayerleft />
          <Vplayerright />
        </div>
      </div>
    </div>
  );
};

export default Vplayer;
