// src/Components/ProjectScope.jsx
import React from "react";
import "../css/ProjectScope.css";
import LiteratureReview from "./LiteratureReview";
import ResearchGap from "./ResearchGap";
import ResearchProblem from "./ResearchProblem";
import ResearchObjectives from "./ResearchObjectives";
import Methodology from "./Methodology";
import Technologies from "./Technologies";

function ProjectScope() {
  return (
    <section className="research-container">
      {/* Literature Survey */}
      <div id="literature-review">
        <LiteratureReview />
      </div>

      {/* Research Gap */}
      <div id="research-gap">
        <ResearchGap />
      </div>

      {/* Research Problem */}
      <div id="research-problem">
        <ResearchProblem />
      </div>

      {/* Research Objectives */}
      <div id="research-objectives">
        <ResearchObjectives />
      </div>

      {/* Methodology */}
      <div id="methodology">
        <Methodology />
      </div>

      {/* Technologies */}
      <div id="technologies">
        <Technologies />
      </div>
    </section>
  );
}

export default ProjectScope;
