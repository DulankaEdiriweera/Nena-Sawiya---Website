import React from "react";
import "../css/ProjectScope.css";
import Supervisors from "./Supervisors";
import Team from "./Team";

const AboutUs = () => {
  return (
    <section className="research-container">
      {/* Literature Survey */}
      <div id="supervisors">
        <Supervisors />
      </div>

      <div id="team">
        <Team />
      </div>
    </section>
  );
};

export default AboutUs;
