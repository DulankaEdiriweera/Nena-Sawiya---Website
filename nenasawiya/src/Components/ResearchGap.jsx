import React from "react";
import "../css/ProjectScope.css";
import {
  FaBrain,
  FaClipboardCheck,
  FaCogs,
  FaLayerGroup,
  FaGlobe,
  FaLanguage,
} from "react-icons/fa";

const ResearchGap = () => {
  return (
    <div>
      {/* Research Gap */}
      <div className="section">
        <h2 className="section-title">Research Gap</h2>
        <br />
        <p>
          Following areas are the research gaps identified in most of the recent
          studies.
        </p>

        <div className="grid-3">
          <div className="card">
            <FaBrain className="card-icon-rg" />
            <h3>Identification & Classification</h3>
            <br />
            <p>
              There is a lack of intelligent and automated systems for
              identifying and classifying learning difficulties such as Visual
              and Language Processibg Difficulties among Sinhala-medium primary
              school students. Existing approaches are mostly manual and do not
              effectively utilize machine learning for accurate and scalable
              detection.
            </p>
          </div>

          <div className="card">
            <FaClipboardCheck className="card-icon-rg" />
            <h3>Assessment Methods</h3>
            <br />
            <p>
              Current assessment methods heavily rely on traditional paper-based
              techniques that require trained professionals and do not provide
              real-time analysis or continuous monitoring. These methods are
              time-consuming and lack scalability, especially in large or
              resource-limited educational settings.
            </p>
          </div>

          <div className="card">
            <FaCogs className="card-icon-rg" />
            <h3>Integrated Solutions</h3>
            <br />
            <p>
              Most existing systems focus on either assessment or intervention,
              but not both. There is an absence of integrated platforms that
              combine assessment, automated classification, and personalized
              intervention within a single system.
            </p>
          </div>
        </div>
        <br />
        <div className="grid-3">
          <div className="card">
            <FaLayerGroup className="card-icon-rg" />
            <h3>Multi-domain Coverage</h3><br />
            <p>
              Existing solutions do not effectively address multiple learning
              domains such as visual processing and language-related
              difficulties together. This limits the ability to provide a
              comprehensive understanding of a child’s learning needs.
            </p>
          </div>

          <div className="card">
            <FaGlobe className="card-icon-rg" />
            <h3>Accessibility & Scalability</h3>
            <br />
            <p>
              There is limited availability of accessible and scalable digital
              solutions tailored for Sinhala-speaking students, particularly in
              rural Sri Lankan contexts where resources and trained
              professionals are limited.
            </p>
          </div>

          <div className="card">
            <FaLanguage className="card-icon-rg" />
            <h3>Cultural Adaptation</h3>
            <br />
            <p>
              Most existing digital platforms are not culturally adapted to the
              Sri Lankan education system and Sinhala language, reducing their
              effectiveness and usability for local students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchGap;
