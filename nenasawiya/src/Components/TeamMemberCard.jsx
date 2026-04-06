import React from "react";
import "../css/AboutUs.css";

const TeamMemberCard = ({
  name,
  image,
  role,
  university,
  department,
  linkedin,
  email,
}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card team-card h-100 text-center">
        <img src={image} alt={name} className="team-image" />

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <br />
          <span className="badge">{role}</span>

          <div className="text-group mt-2">
            <p>
              <strong>
                {role === "Group Member" ? "Undergraduate" : "Role"}
              </strong>
            </p>
            <p>{university}</p>
          </div>
          <br />
          <div className="text-group">
            <p>
              <strong>Department</strong>
            </p>
            <p>{department}</p>
          </div>
        </div>

        {/* Links without UL */}
        <div className="card-links">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          )}

          {email && (
            <a href={`mailto:${email}`} className="card-link">
              <i className="fas fa-envelope-open-text"></i> Email
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
