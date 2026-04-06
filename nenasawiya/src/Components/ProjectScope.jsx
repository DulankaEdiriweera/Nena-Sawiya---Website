import React from "react";
import '../css/ProjectScope.css'

function ProjectScope() {
  return (
    <section className="research-container">
      {/* Literature Survey */}
      <div className="section">
        <h2 className="section-title">Literature Review</h2>

        <div className="grid-2">
          <div>
            <div className="card">
              <img src="/images/lit1.jpg" alt="Tomato" />
              <p>
                Tomato cultivation faces yield variability due to climate stress
                and diseases. Predictive analytics helps optimize planting and
                improve farmer income.
              </p>
            </div>

            <div className="image-box">
              <img src="/images/lit2.jpg" alt="Growth" />
              <p className="caption">Tomato production growth</p>
            </div>

            <div className="image-box">
              <img src="/images/lit3.jpg" alt="Market" />
              <p className="caption">Global tomato market size</p>
            </div>
          </div>

          <div>
            <p>
              Existing research highlights the importance of early
              identification of learning disabilities, particularly visual
              processing difficulties and language processing difficulties, in
              improving children’s academic outcomes. Sarnoff proposed a
              structured model for predicting performance across visual tasks,
              emphasizing the role of systematic assessment in supporting
              learning. Studies on object discrimination indicate that early
              visual processing abilities are sufficient for learning, while
              continuous practice enhances perceptual resolution and recognition
              memory. Educational research further shows that accurate
              perception of forms and letter orientation significantly
              influences reading performance, while adaptive learning approaches
              have been proven to strengthen recognition skills. Visual
              perceptual abilities such as visual discrimination, memory, and
              closure are therefore critical for reading and overall academic
              success. Visual closure, in particular, plays a key role in
              recognizing incomplete objects and is closely associated with
              reading ability; however, difficulties in this area are commonly
              observed among primary school children with learning disorders.
              Traditional assessment methods, such as standardized paper-based
              tests, require professional administration and provide limited
              real-time or behavioral insights. Although recent IT-based
              approaches, including interactive tasks and eye-tracking studies,
              have improved understanding of visual processing difficulties,
              integrated and scalable digital solutions remain limited.
            </p>
            <br />

            <p>
              Similarly, in the domain of language processing, story retelling
              and sentence repetition tasks have been widely used to identify
              expressive language difficulties (ELD), with measures such as
              vocabulary usage and grammatical accuracy effectively
              distinguishing affected children. Automated approaches using NLP,
              machine learning, and speech recognition have been introduced to
              improve scalability and accuracy but often lack contextual depth
              and cultural relevance. Classroom-based intervention strategies
              exist but require trained educators and are less accessible in
              resource-limited settings. In Sri Lanka, most approaches remain
              manual, with limited technological integration. For receptive
              language difficulties (RLD), existing solutions include
              ontology-based platforms, ML-based detection systems, and
              tablet-based learning applications; however, these often lack
              early detection capabilities, automated assessment, or culturally
              relevant interventions. Platforms such as AdaptedMind and
              Education.com provide general cognitive exercises but do not
              specifically address Sinhala-medium learners or targeted visual
              and language skills.
            </p>
            <br />
            <p>
              Overall, while prior studies emphasize the importance of early
              detection and intervention, they reveal significant gaps in terms
              of integration, scalability, and cultural adaptation. There is a
              clear need for a unified system that combines assessment, machine
              learning-based classification, and personalized intervention.
              Addressing these limitations, the proposed system introduces a
              web-based, game-driven platform that integrates visual and
              language assessments with adaptive intervention strategies,
              offering a scalable and culturally relevant solution for
              Sinhala-speaking primary school children.
            </p>
            <br />
            <p>
              V. U. Muktamath, P. R. Hegde and S. Chand, "Types of Specific
              Learning Disability," in Learning Disabilities, IntechOpen, 2022.
            </p>
            <br />
            <p>
              J. Lubin, "A visual discrimination model for imaging system design
              and evaluation," in Visual Models for Target Detection and
              Recognition, World Scientific, 1995, pp. 245-283.
            </p>
          </div>
        </div>
      </div>

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
            <h4>Identification & Classification</h4>
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
            <h4>Assessment Methods</h4>
            <p>
              Current assessment methods heavily rely on traditional paper-based
              techniques that require trained professionals and do not provide
              real-time analysis or continuous monitoring. These methods are
              time-consuming and lack scalability, especially in large or
              resource-limited educational settings.
            </p>
          </div>

          <div className="card">
            <h4>Proactive Crop Management</h4>
            <p>Lack of early alerts and automated corrective actions.</p>
          </div>
        </div>
      </div>

      {/* Research Problem */}
      <div className="section">
        <h2 className="section-title">Research Problem & Solution</h2>

        <div className="grid-2">
          <div>
            <h4 className="highlight">Problem</h4>
            <p>
              Farmers face water scarcity, climate change, pests, and lack of
              real-time decision systems.
            </p>
          </div>

          <div>
            <h4 className="highlight">Solution</h4>
            <p>
              AgriSense360 integrates IoT, ML, and real-time analytics for smart
              irrigation, disease detection, and yield prediction.
            </p>
          </div>
        </div>
      </div>

      {/* Research Objectives */}
      <div className="section">
        <h2 className="section-title">Research Objectives</h2>

        <div className="timeline-container">
          <div className="timeline-row left">
            <div className="content">
              <h4>Intelligent Irrigation & Water Management</h4>
              <p>
                IoT + LoRa-based irrigation system to automate water usage and
                reduce wastage.
              </p>
            </div>
          </div>

          <div className="timeline-row right">
            <div className="content">
              <h4>Planting Optimization & Monitoring</h4>
              <p>
                ML-based system to optimize planting schedules and detect
                environmental changes early.
              </p>
            </div>
          </div>

          <div className="timeline-row left">
            <div className="content">
              <h4>Disease Detection & Prevention</h4>
              <p>
                Early detection using image processing and sensor analytics.
              </p>
            </div>
          </div>

          <div className="timeline-row right">
            <div className="content">
              <h4>Insect & Bird Detection</h4>
              <p>
                Detect threats using sound/image analysis and trigger
                deterrents.
              </p>
            </div>
          </div>

          <div className="timeline-row left">
            <div className="content">
              <h4>Crop Yield Prediction</h4>
              <p>
                ML models predict yield using real-time and historical data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="section">
        <h2 className="section-title">Methodology</h2>

        <div className="grid-2">
          <div>
            <img
              src="/images/architecture.jpg"
              alt="Architecture"
              className="method-img"
            />
            <p className="caption">System Architecture</p>
          </div>

          <div>
            <p>System consists of 4 main modules:</p>
            <ol>
              <li>Smart Irrigation System</li>
              <li>Environmental Monitoring</li>
              <li>Threat Detection System</li>
              <li>Yield Prediction System</li>
            </ol>

            <p>
              IoT sensors collect real-time field data and send it via LoRa to a
              central system where ML models analyze and generate insights.
            </p>

            <p>
              The system provides automated irrigation, disease alerts, pest
              detection, and yield forecasting via mobile/web app.
            </p>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="section">
        <h2 className="section-title">Technologies Used</h2>

        <div className="tech-grid">
          {[
            { name: "Python", img: "/tech/python.png" },
            { name: "Raspberry Pi", img: "/tech/raspberrypi.png" },
            { name: "TensorFlow", img: "/tech/tensorflow.png" },
            { name: "Keras", img: "/tech/keras.png" },
            { name: "Arduino", img: "/tech/arduino.png" },
            { name: "Firebase", img: "/tech/firebase.png" },
            { name: "LoRaWAN", img: "/tech/lorawan.png" },
            { name: "Android", img: "/tech/android.png" },
          ].map((tech, i) => (
            <div key={i} className="tech-card">
              <img src={tech.img} alt={tech.name} className="tech-img" />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectScope;
