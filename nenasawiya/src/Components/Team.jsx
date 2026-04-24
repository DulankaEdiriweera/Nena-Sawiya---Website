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
          role="Group Leader"
          university="Sri Lanka Institute of Information Technology"
          department="Information Technology"
          linkedin="https://www.linkedin.com/in/himashi-amaya-6644422b0/"
          email="himashiamaya17@gmail.com "
        />

        {/* Add more members here */}
        <TeamMemberCard
          name="Kaluperuma C. D. S"
          image={Member2}
          role="Group Member"
          university="Sri Lanka Institute of Information Technology"
          department="Information Technology"
          linkedin="https://www.linkedin.com/in/chamishka-dewmini-043910338/"
          email="chamishkakaluperuma@gmail.com "
        />

        <TeamMemberCard
          name="Ediriweera D. K"
          image={Member3}
          role="Group Member"
          university="Sri Lanka Institute of Information Technology"
          department="Information Technology"
          linkedin="https://www.linkedin.com/in/dulanka-ediriweera-8207512a4/"
          email="kawminiediriweera21@gmail.com "
        />

        <TeamMemberCard
          name="Umayangani R. D"
          image={Member4}
          role="Group Member"
          university="Sri Lanka Institute of Information Technology"
          department="Information Technology"
          linkedin="https://www.linkedin.com/in/dinusha-ranasinghe-54a633235/"
          email="dinushaumayangani02@gmail.com"
        />
      </div>
    </div>
  );
};

export default Team;
