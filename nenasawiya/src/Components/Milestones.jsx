import React from "react";
import "../css/Milestones.css";

// Rotating gear/star icon — different per status
const DoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2l2.09 4.26L18.18 7l-3.09 3.01.73 4.24L12 12.25l-3.82 2 .73-4.24L5.82 7l4.09-.74L12 2z" />
  </svg>
);

const ActiveIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const UpcomingIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 1L9.5 8.5H2l6 4.5-2.5 7.5L12 16l6.5 4.5-2.5-7.5 6-4.5h-7.5L12 1z" />
  </svg>
);

const milestones = [
  {
    date: "September 2025",
    title: "Proposal Presentation",
    desc: "Formal presentation of the project proposal to the evaluation panel for approval.",
    marks: 6,
    status: "done",
  },
  {
    date: "September 2025",
    title: "Proposal Report",
    desc: "Detailed written report outlining project objectives, scope, methodology and expected outcomes.",
    marks: 6,
    status: "done",
  },
  {
    date: "January 2026",
    title: "Progress Presentation I (50%)",
    desc: "Mid-point presentation demonstrating 50% completion and addressing any design gaps.",
    marks: 15,
    status: "active",
  },
  {
    date: "March 2026",
    title: "Progress Presentation II (90%)",
    desc: "Near-final presentation with working prototype, demonstrating 90% project completion.",
    marks: 18,
    status: "active",
  },
  {
    date: "April 2026",
    title: "Final Report",
    desc: "Comprehensive individual report covering research, implementation, results and conclusions.",
    marks: 15,
    status: "upcoming",
  },
  {
    date: "April 2026",
    title: "Final Report (Group)",
    desc: "Collaborative group report summarising the combined project outcomes and contributions.",
    marks: 4,
    status: "upcoming",
  },
  {
    date: "April 2026",
    title: "Final Presentation",
    desc: "Final live demonstration of the completed project presented before the evaluation panel.",
    marks: 10,
    status: "upcoming",
  },
  {
    date: "April 2026",
    title: "Viva",
    desc: "Oral examination defending the research, methodology and individual contributions.",
    marks: 10,
    status: "upcoming",
  },
  {
    date: "April 2026",
    title: "Website",
    desc: "Project website showcasing the research, team, milestones and downloadable documents.",
    marks: 2,
    status: "upcoming",
  },
  {
    date: "April 2026",
    title: "Research Paper",
    desc: "Academic paper documenting original contributions and findings to the knowledge base.",
    marks: 10,
    status: "upcoming",
  },
  {
    date: "April 2026",
    title: "Check Lists",
    desc: "Completion checklists verifying all deliverables and project requirements are met.",
    marks: 2,
    status: "upcoming",
  },
  {
    date: "April 2026",
    title: "Logbook",
    desc: "Weekly progress logbook recording tasks, decisions and individual contributions throughout.",
    marks: 2,
    status: "upcoming",
  },
];

const iconMap = {
  done: <DoneIcon />,
  active: <ActiveIcon />,
  upcoming: <UpcomingIcon />,
};

export default function Milestones() {
  return (
    <div className="milestones-page" id="milestones">
      <div className="milestones-header">
        <span className="label">Project Timeline</span>
        <h1>Milestones in Brief</h1>
      </div>

      <div className="timeline">
        <div className="timeline-line" />

        {milestones.map((m, i) => (
          <div key={i} className={`milestone-item ${m.status}`}>
            <div className="milestone-dot">{iconMap[m.status]}</div>
            <div className="milestone-card">
              <div className="milestone-date">{m.date}</div>
              <div className="milestone-title">{m.title}</div>
              <div className="milestone-desc">{m.desc}</div>
              <div className="marks-badge">
                Marks Allocated: <span>{m.marks}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
