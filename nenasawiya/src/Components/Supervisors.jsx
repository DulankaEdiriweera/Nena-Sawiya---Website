import React from "react";
import "../css/AboutUs.css";
import SupervisorCard from "./SupervisorCard";

// images
import SupervisorImg from "../assets/SupervisorImg.jpeg";
import CoSupervisorImg from "../assets/Co-SupervisorImg.jfif";
import ExternalImg from "../assets/ExternalImg.jpeg";

const Supervisors = () => {
  return (
    <div className="section">
      <h2 className="section-title">Supervisors</h2>

      <div className="row justify-content-center">

        <SupervisorCard
          name="Ms. Jenny Krishara"
          role="Supervisor"
          image={SupervisorImg}
          institute="Sri Lanka Institute of Information Technology"
          department="Department of Information Technology"
          scholar="#"
          linkedin="#"
          email="#"
        />

        <SupervisorCard
          name="Ms. Osuri Dunuwila"
          role="Co-Supervisor"
          image={CoSupervisorImg}
          institute="Sri Lanka Institute of Information Technology"
          department="Department of Information Technology"
          scholar="#"
          linkedin="#"
          email="#"
        />

        <SupervisorCard
          name="Dr. Kamalani Wanigasinghe"
          role="External Supervisor"
          image={ExternalImg}
          institute=" Former Doctor at Ministry of Health"
          department="Ministry of Health Sri Lanka"
          scholar="#"
          linkedin="#"
          email="#"
        />

      </div>
    </div>
  );
};

export default Supervisors;