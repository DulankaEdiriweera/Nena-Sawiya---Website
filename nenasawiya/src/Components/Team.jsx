import React from "react";
import "../css/AboutUs.css";
import TeamMemberCard from "./TeamMemberCard";

// images
import Member1 from "../assets/Member1.jpeg";
import Member2 from "../assets/Member2.jpeg";
import Member3 from "../assets/Member3.jpg";
import Member4 from "../assets/Member4.jpeg";

const Team = () => {
  return (
    <div className="section">
      <h2 className="section-title">Our Team</h2>

      <div className="row justify-content-center">

        <TeamMemberCard
          name="Thisera M. H. A"
          image={Member1}
          role="Group Member"
          university="Sri Lanka Institute of Information Technology"
          department="Information Technology"
          linkedin="#"
          email="#"
        />

        {/* Add more members here */}
        <TeamMemberCard
          name="Member 2"
          image={Member2}
          role="Group Member"
          university="Sri Lanka Institute of Information Technology"
          department="Information Technology"
          linkedin="#"
          email="#"
        />

        <TeamMemberCard
          name="Member 3"
          image={Member3}
          role="Group Member"
          university="Sri Lanka Institute of Information Technology"
          department="Information Technology"
          linkedin="#"
          email="#"
        />

        <TeamMemberCard
          name="Member 4"
          image={Member4}
          role="Group Member"
          university="Sri Lanka Institute of Information Technology"
          department="Information Technology"
          linkedin="#"
          email="#"
        />

      </div>
    </div>
  );
};

export default Team;