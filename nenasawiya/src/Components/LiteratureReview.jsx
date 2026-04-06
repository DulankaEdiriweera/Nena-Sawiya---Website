import React from "react";
import "../css/ProjectScope.css";
import Chart from "../assets/Chart.jpeg";

const LiteratureReview = () => {
  return (
    <div>
      {/* Literature Survey */}
      <div className="section">
        <h2 className="section-title">Literature Review</h2>

        <div className="grid-2">
          <div>
            <div className="image-box">
              <img src={Chart} alt="Learning Dsiabilities" />
              <p className="caption">
                Different types of Learning Disabilities
              </p>
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

            <p>
              V. U. Muktamath, P. R. Hegde and S. Chand, "Types of Specific
              Learning Disability," in Learning Disabilities, IntechOpen, 2022.
            </p>

            <p>
              J. Lubin, "A visual discrimination model for imaging system design
              and evaluation," in Visual Models for Target Detection and
              Recognition, World Scientific, 1995, pp. 245-283.
            </p>

            <p>
              J. I. Sanders, A Visual Closure Study Associated with Reading
              Comprehension and Some Visual Perceptual Skills of Fourth Grade
              Pupils, The University of Tulsa, 1971.
            </p>

            <p>
              Y. Zee, M. Kooiker, M. Ojeda and J. Pel, "Gestalt Perception in
              Children With Visual Impairments: Item-Specific Performance and
              Looking Behavior," Developmental Neuropsychology, vol. 44, 2019.
            </p>
            <p>
              A. Auza, M. T. Harmon and C. Murata, "Retelling stories:
              Grammatical and lexical measures for identifying monolingual
              Spanish-speaking children with specific language impairment
              (SLI)," Journal of Communication Disorders, vol. 71, pp. 52-60,
              2018.
            </p>
            <p>
              R. Gale, J. Dolata, E. Prud’hommeaux, J. v. Santen and M. Asgari,
              "Automatic Assessment of Language Ability in Children with and
              without Typical Development," in 42nd Annual International
              Conference of the IEEE Engineering in Medicine & Biology Society
              (EMBC), 2020.
            </p>
            <p>
              S. Alhazbi, A. Aboeleneen, N. Kamal, M. Khader, A. Azzouza, A. Al
              Kababji, … and A. Zaza, "Faheem: A Tablet-Based Application to
              Improve Receptive Language for Arab Autistic Children," in 2018
              International Conference on Computer and Applications (ICCA),
              2018.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiteratureReview;
