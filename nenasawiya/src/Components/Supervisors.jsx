import React from "react";
import "../css/AboutUs.css";
import SupervisorCard from "./SupervisorCard";

// images
import SupervisorImg from "../assets/SupervisorImg.jpeg";
import CoSupervisor from "../assets/Co-supervisor.jpeg";
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
          scholar="https://scholar.google.com/citations?user=j6UINzQAAAAJ&hl=en"
          linkedin="https://www.linkedin.com/in/jenny-krishara-1a09a0111/"
          email="jenny.k@sliit.lk "
        />

        <SupervisorCard
          name="Ms. Osuri Dunuwila"
          role="Co-Supervisor"
          image={CoSupervisor}
          institute="Sri Lanka Institute of Information Technology"
          department="Department of Information Technology"
          scholar="#"
          linkedin="https://www.linkedin.com/in/osuri-dunuwila-877843107/"
          email="osuri.d@sliit.lk"
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
