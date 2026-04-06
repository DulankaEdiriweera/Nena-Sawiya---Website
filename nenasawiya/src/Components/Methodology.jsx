import React from "react";
import "../css/ProjectScope.css";
import Architecture from "../assets/SystemArchitecture.png";

const Methodology = () => {
  return (
    <div>
      {/* Methodology */}
      <div className="section">
        <h2 className="section-title">Methodology</h2>

        <div className="grid-2">
          <div>
            <img src={Architecture} alt="Architecture" className="method-img" />
            <p className="caption">System Architecture</p>
          </div>

          <div>
            <p>
              The proposed system, Nena Sawiya, is structured around four main
              components:
            </p>
            <ol>
              <li>
                Visual Discrimination and Memory Detection and Intervention
              </li>
              <li>Visual Closure Deficit Detection and Intervention</li>
              <li>Expressive Language Assessment (ELD)</li>
              <li>Receptive Language Assessment (RLD)</li>
            </ol>

            <p>
              The proposed system, Nena Sawiya, is structured around four main
              components: Visual Discrimination and Memory Assessment, Visual
              Closure Assessment, Expressive Language Assessment (ELD), and
              Receptive Language Assessment (RLD). The system is designed as a
              multi-domain, machine learning–driven platform that integrates
              assessment and intervention to support early identification of
              learning difficulties in Sinhala-speaking primary school children.
              Each component is implemented using structured, curriculum-based,
              multi-level tasks ranging from easy to complex, ensuring
              age-appropriate evaluation and engagement.
            </p>

            <p>
              The system was designed by collecting data from children aged 8–10
              through interactive quizzes, image-based tasks, storytelling
              activities, and verbal responses. These responses are processed
              using a web-based interface, where speech inputs are converted to
              text using the Web Speech API for language-related tasks. The
              collected data is preprocessed using Python libraries, while
              feature extraction for language tasks is performed using TF-IDF
              vectorization to represent linguistic patterns effectively.
              Machine learning models, including Random Forest Classifier,
              Random Forest Regressor, and Ridge Regression, are used to analyze
              student performance. These models are trained using an 80:20
              train-test split along with cross-validation to ensure reliability
              and accuracy. The system predicts ability levels such as Weak,
              Average, and Normal, as well as performance scores for each child
              based on their responses across different tasks. The system
              workflow begins when the user completes interactive assessments
              through the frontend interface. Then the responses are sent to the
              backend via RESTful APIs, where it is processed and analyzed by
              the trained machine learning models. The results are used to
              classify the student’s ability level along with the score.
            </p>
            <p>
              Based on the predicted outcomes, the system provides intervention
              activities based on the ability level. Students identified as Weak
              receive basic guided exercises (easy to hard), Average-level
              students are given moderate practice tasks, and High-performing
              students are provided with advanced and enrichment activities.
              This structured approach ensures continuous learning support,
              intervention, and improved monitoring of student progress through
              a scalable and intelligent web-based platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
