import React, { useEffect, useRef, useState } from "react";
import "../css/Milestones.css";

// ─────────────────────────────────────────
// DOT ICONS
// ─────────────────────────────────────────
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
       strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ActiveDotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
       strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" fill="currentColor" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
       strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const dotIconMap = {
  done:     <CheckIcon />,
  active:   <ActiveDotIcon />,
  upcoming: <ClockIcon />,
};

// ─────────────────────────────────────────
// CARD ICONS
// ─────────────────────────────────────────
const PresentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const GroupIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const MicIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const PaperIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const ChecklistIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const LogbookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const milestones = [
  { date: "September 2025", title: "Proposal Presentation", desc: "Formal presentation of the project proposal to the evaluation panel for approval.", marks: 6, status: "done", icon: "present" },
  { date: "September 2025", title: "Proposal Report", desc: "Detailed written report outlining project objectives, scope, methodology and expected outcomes.", marks: 6, status: "done", icon: "doc" },
  { date: "January 2026", title: "Progress Presentation I (50%)", desc: "Mid-point presentation demonstrating 50% completion and addressing any design gaps.", marks: 15, status: "active", icon: "present" },
  { date: "March 2026", title: "Progress Presentation II (90%)", desc: "Near-final presentation with working prototype, demonstrating 90% project completion.", marks: 18, status: "active", icon: "present" },
  { date: "April 2026", title: "Final Report", desc: "Comprehensive individual report covering research, implementation, results and conclusions.", marks: 15, status: "upcoming", icon: "doc" },
  { date: "April 2026", title: "Final Report (Group)", desc: "Collaborative group report summarising the combined project outcomes and contributions.", marks: 4, status: "upcoming", icon: "group" },
  { date: "April 2026", title: "Final Presentation", desc: "Final live demonstration of the completed project presented before the evaluation panel.", marks: 10, status: "upcoming", icon: "present" },
  { date: "April 2026", title: "Viva", desc: "Oral examination defending the research, methodology and individual contributions.", marks: 10, status: "upcoming", icon: "mic" },
  { date: "April 2026", title: "Website", desc: "Project website showcasing the research, team, milestones and downloadable documents.", marks: 2, status: "upcoming", icon: "web" },
  { date: "April 2026", title: "Research Paper", desc: "Academic paper documenting original contributions and findings to the knowledge base.", marks: 10, status: "upcoming", icon: "paper" },
  { date: "April 2026", title: "Check Lists", desc: "Completion checklists verifying all deliverables and project requirements are met.", marks: 2, status: "upcoming", icon: "checklist" },
  { date: "April 2026", title: "Logbook", desc: "Weekly progress logbook recording tasks, decisions and individual contributions throughout.", marks: 2, status: "upcoming", icon: "logbook" },
];

const cardIconMap = {
  present: <PresentIcon />,
  doc: <DocIcon />,
  group: <GroupIcon />,
  mic: <MicIcon />,
  web: <WebIcon />,
  paper: <PaperIcon />,
  checklist: <ChecklistIcon />,
  logbook: <LogbookIcon />,
};

export default function Milestones() {
  const [visible, setVisible] = useState({});
  const itemRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.idx);
            setVisible((prev) => ({ ...prev, [idx]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="milestones-page">

      <div className="milestones-header">
        <h1>Milestones in Brief</h1>
      </div>

      <div className="timeline">
        <div className="timeline-line" />

        {milestones.map((m, i) => (
          <article
            key={i}
            data-idx={i}
            ref={(el) => (itemRefs.current[i] = el)}
            className={`milestone-item ${m.status}${visible[i] ? " visible" : ""}`}
          >
            <div className="milestone-dot">
              {dotIconMap[m.status]}
            </div>

            <div className="milestone-card">
              <div className="card-inner">

                <div className="card-top">
                  <div className="card-icon">{cardIconMap[m.icon]}</div>
                  <span className="milestone-date">{m.date}</span>
                </div>

                <h3 className="milestone-title">{m.title}</h3>
                <p className="milestone-desc">{m.desc}</p>

                <div className="card-footer">
                  <div className="marks-badge">
                    Marks Allocated: <span>{m.marks}%</span>
                  </div>
                </div>

              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}