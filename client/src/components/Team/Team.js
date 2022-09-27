import React from "react";
import "./Team.css";
import Member from "../Member";
import { MembersData } from "../../data";

const Team = () => {
  return (
    // <!--START TEAM-->

    <section className="team">
      <h2>Meet Our Team</h2>
      <div className="container team_container">
        {MembersData.map((member) => {
          return <Member mdata={member} />;
        })}
      </div>
    </section>

    //<!-- END TEAM-->
  );
};

export default Team;
