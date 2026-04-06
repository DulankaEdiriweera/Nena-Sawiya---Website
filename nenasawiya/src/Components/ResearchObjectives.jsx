import React from "react";
import "../css/ProjectScope.css";

const ResearchObjectives = () => {
  return (
    <div>
      {/* Research Objectives */}
      <div className="section">
        <h2 className="section-title">Research Objectives</h2>

        <div className="timeline-container">
          <div className="timeline-row left">
            <div className="content">
              <h4>
                Visual Discrimination and Memory Detection and Intervention
              </h4>
              <p>
                The first objective is to assess children’s ability to
                recognize, differentiate, and recall visual elements such as
                letters, numbers, and images. This component focuses on
                identifying visual discrimination and memory difficulties using
                machine learning classification techniques. Based on the
                detected difficulty level, the system provides targeted
                intervention exercises to improve visual recognition and memory
                skills.
              </p>
            </div>
          </div>

          <div className="timeline-row right">
            <div className="content">
              <h4>Visual Closure Deficit Detection and Intervention</h4>
              <p>
                The second objective is to evaluate children’s ability to
                identify incomplete visual stimuli, including shapes, objects,
                and letters. The system classifies students into different
                ability levels using machine learning models and provides
                adaptive intervention tasks designed to enhance visual closure
                skills and improve reading accuracy.
              </p>
            </div>
          </div>

          <div className="timeline-row left">
            <div className="content">
              <h4>Expressive Language Difficulty Detection and Intervention</h4>
              <p>
                The third objective is to evaluate children’s ability to express
                their ideas clearly through language using storytelling tasks.
                This assessment focuses on both story retelling and independent
                narration activities, where children describe given stories or
                create their own narratives. The system uses speech-to-text
                technology and machine learning model to analyze verbal
                responses and assess expressive ability. Based on this analysis,
                it classifies expressive language levels and generates score
                along with targeted intervention activities based on the
                detected level to support development.
              </p>
            </div>
          </div>

          <div className="timeline-row right">
            <div className="content">
              <h4>Receptive Language Assessment (RLD)</h4>
              <p>
                The fourth objective is to evaluate children’s comprehension,
                instruction-following, and overall understanding skills through
                structured tasks. The system uses speech-to-text technology and
                machine learning models to analyze children’s responses, assess
                their performance, and predict receptive language ability
                levels. Based on the identified levels, the system provides
                appropriate interventions tailored to each child’s needs, such
                as simplified instructions, guided practice, and interactive
                learning activities. Additionally, it recommends personalized
                exercises to gradually improve receptive language skills and
                enhance overall comprehension.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchObjectives;
