import React from "react";

const documents = [
  {
    title: "Topic Assessment Form",
    date: "2025/07/27",
    type: "Group",
    file: "https://drive.google.com/file/d/1mJXg97129L1EpbcnmWuoNslPx7E8e4mf/view?usp=sharing",
    isFolder: false,
  },
  {
    title: "Project Proposal",
    date: "2025/09/18",
    type: "Individual",
    file: "https://drive.google.com/drive/folders/1L9SD0R5jRkH-YqOGLv8IUU8puCREHSVj?usp=sharing",
    isFolder: true,
  },
  {
    title: "Status Documents I",
    date: "2026/01/04",
    type: "Individual",
    file: "/files/status1.pdf",
    isFolder: false,
  },
  {
    title: "Status Documents II",
    date: "2026/04/30",
    type: "Group",
    file: "/files/status2.pdf",
    isFolder: false,
  },
  {
    title: "Research Paper",
    date: "2026/05/08",
    type: "Group",
    file: "/files/research-paper.pdf",
    isFolder: false,
  },
  {
    title: "Final Report",
    date: "2026/05/13",
    type: "Group",
    file: "/files/final-report.pdf",
    isFolder: false,
  },
];

const Document = () => {
  return (
    <section id="documents" style={styles.container}>
      <h1 style={styles.heading}>Documents</h1>
      <p style={styles.subText}>
        Please find all documents related to this project below.
      </p>

      <div style={styles.grid}>
        {documents.map((doc, index) => (
          <div key={index} style={styles.card}>
            <div>
              <h3 style={styles.title}>{doc.title}</h3>
              <p style={styles.date}>Submitted on {doc.date}</p>
            </div>

            <div style={styles.bottom}>
              <span style={styles.type}>{doc.type}</span>

              <div>
                {!doc.isFolder && (
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ ...styles.link, marginRight: "10px" }}
                  >
                    View
                  </a>
                )}

                <a
                  href={doc.file}
                  {...(!doc.isFolder ? { download: true } : {})}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    backgroundColor: "#ffffff",
    color: "#0b1f3a",
    padding: "40px",
    fontFamily: "Poppins, sans-serif",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "10px",
    borderLeft: "5px solid #ffcc00",
    paddingLeft: "10px",
    fontWeight: "bold",
  },
  subText: {
    color: "#555",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    color: "#0b1f3a",
    padding: "20px",
    borderRadius: "20px",
    border: "3px solid #0b1f3a", // ✅ yellow border
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // ✅ same shadow
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "0.3s",
  },
  title: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  date: {
    fontSize: "14px",
    color: "#777",
  },
  bottom: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  type: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#0b1f3a",
  },
  link: {
    textDecoration: "none",
    color: "#0b1f3a",
    fontWeight: "500",
    border: "1px solid #0b1f3a",
    padding: "5px 10px",
    borderRadius: "8px",
    transition: "0.3s",
  },
};

export default Document;
