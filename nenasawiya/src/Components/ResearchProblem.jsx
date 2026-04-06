import React from "react";
import "../css/ProjectScope.css";

const ResearchProblem = () => {
  return (
    <div>
      {/* Research Problem */}
      <div className="section">
        <h2 className="section-title">Research Problem & Solution</h2>

        <div className="grid-2">
          <div>
            <h4 className="highlight">Research Problem</h4>
            <p>
              Primary school children in Sri Lanka face significant challenges
              in the early detection of learning disabilities, including visual
              discrimination and memory difficulties, visual closure
              difficulties, expressive language difficulties (ELD), and
              receptive language difficulties (RLD). Existing assessment methods
              are largely manual, time-consuming, and not scalable, while also
              lacking cultural relevance to Sinhala-medium students and
              depending heavily on trained professionals. As a result, many
              children experience delayed identification and do not receive
              timely interventions, which negatively affects their academic
              performance and cognitive development.
            </p>
          </div>

          <div>
            <h4 className="highlight">Solution</h4>
            <p>
              To address these challenges, the proposed system, Nena Sawiya,
              introduces a web-based intelligent platform designed for early
              detection and intervention of learning difficulties. The system
              utilizes interactive, game-based tasks to engage children during
              assessment and applies machine learning models for automated
              detection of different difficulty levels. Based on the identified
              level, it provides personalized, level-based intervention
              activities tailored to each child’s needs. The platform is
              developed with support for the Sinhala language and aligned with
              the local curriculum, ensuring cultural relevance. Additionally,
              it enables continuous monitoring and progress tracking, offering a
              scalable, accessible, and data-driven solution for improving early
              identification and intervention in learning disabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchProblem;
