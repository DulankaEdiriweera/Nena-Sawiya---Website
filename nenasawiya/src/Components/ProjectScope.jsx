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
      <LiteratureReview/>

      {/* Research Gap */}
      <ResearchGap/>

      {/* Research Problem */}
      <ResearchProblem/>

      {/* Research Objectives */}
      <ResearchObjectives/>

      {/* Methodology */}
      <Methodology/>

      {/* Technologies */}
      <Technologies/>
    </section>
  );
}

export default ProjectScope;
