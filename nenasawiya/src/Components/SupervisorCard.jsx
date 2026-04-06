import React from "react";
import "../css/AboutUs.css";

const SupervisorCard = ({
  name,
  role,
  image,
  institute,
  department,
  scholar,
  linkedin,
  email,
}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card about-us-card text-center">
        <img src={image} className="about-us-image" alt={name} />

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <span className="badge badge-secondary mb-2">{role}</span>

          <p className="mb-1">{institute}</p>
          
          <p className="mb-1">
            <strong>{department}</strong> 
          </p>
        </div>

        <div className="card-links">
          {scholar && (
            <a
              href={scholar}
              target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              <i className="fab fa-google"></i> G-Scholar
            </a>
          )}

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

export default SupervisorCard;
