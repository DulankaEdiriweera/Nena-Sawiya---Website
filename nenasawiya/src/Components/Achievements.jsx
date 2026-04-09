import { useState } from "react";
import "../css/Achievements.css";

const achievements = [
  {
    id: 1,
    badge: "IEEE · SCSE",
    year: "2026",
    title: "Research Paper Published at SCSE",
    venue:
      "9th IEEE International Research Conference on Smart Computing and Systems Engineering",
    institution: "University of Kelaniya, Sri Lanka",
    description:
      "Our research on detecting and intervening in language and visual processing disorders among Sri Lankan primary school students was accepted and published at SCSE — a premier IEEE conference indexed in Scopus and available through the IEEE Xplore Digital Library.",
    link: "https://scse.kln.ac.lk/",
    linkLabel: "View Conference",
    tags: ["IEEE", "Scopus Indexed", "IEEE Xplore"],
  },
];

export default function Achievements() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="achievements">
      <div className="achievements-page">
        <div className="ach-hero">
          <h1 className="ach-title">Achievements</h1>
        </div>

        <div className="ach-list">
          {achievements.map((item) => (
            <div
              key={item.id}
              className={`ach-card ${hovered === item.id ? "ach-card--hovered" : ""}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="ach-card__side">
                <div className="ach-card__year">{item.year}</div>
                <div className="ach-card__line" />
                <div className="ach-card__dot" />
              </div>

              <div className="ach-card__body">
                <div className="ach-card__badge-row">
                  <span className="ach-card__badge">{item.badge}</span>
                  {item.tags.map((tag) => (
                    <span key={tag} className="ach-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="ach-card__title">{item.title}</h2>
                <p className="ach-card__venue">{item.venue}</p>
                <p className="ach-card__institution">{item.institution}</p>
                <p className="ach-card__description">{item.description}</p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ach-card__link"
                >
                  {item.linkLabel}
                  <svg
                    viewBox="0 0 10 10"
                    fill="none"
                    className="ach-card__link-arrow"
                  >
                    <path
                      d="M2 5h6M5.5 2.5L8 5l-2.5 2.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="ach-footer">
          <div className="ach-footer__inner">
            <span className="ach-footer__dot" />
            <p className="ach-footer__text">More milestones on the way</p>
          </div>
        </div>
      </div>
    </section>
  );
}
