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
      <div className="card about-us-card" style={{ textAlign: "center" }}>
        <img src={image} className="about-us-image" alt={name} />

        <div className="card-body" style={{ textAlign: "center" }}>
          <h5 className="card-title">{name}</h5>
          <br/>
          <span className="badge mb-2">{role}</span>

          <p className="mb-1" style={{ textAlign: "center" }}>{institute}</p>

          <p className="mb-1" style={{ textAlign: "center" }}>
            <strong>{department}</strong>
          </p>
        </div>

        <div className="card-links" style={{ justifyContent: "center" }}>
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
