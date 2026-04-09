import React from "react";

const documents = [
  {
    title: "Topic Assessment",
    date: "2025/0x/xx",
    type: "Group",
    file: "https://drive.google.com/file/d/1mJXg97129L1EpbcnmWuoNslPx7E8e4mf/view?usp=sharing",
    isFolder: false,
  },
  {
    title: "Project Proposal",
    date: "2025/0x/xx",
    type: "Individual",
    file: "https://drive.google.com/drive/folders/1L9SD0R5jRkH-YqOGLv8IUU8puCREHSVj?usp=sharing",
    isFolder: true,
  },
  {
    title: "Status Documents I",
    date: "2025/xx/xx",
    type: "Individual",
    file: "/files/status1.pdf",
    isFolder: false,
  },
  {
    title: "Status Documents II",
    date: "2026/0x/xx",
    type: "Group",
    file: "/files/status2.pdf",
    isFolder: false,
  },
  {
    title: "Research Paper",
    date: "2026/0x/xx",
    type: "Group",
    file: "/files/research-paper.pdf",
    isFolder: false,
  },
  {
    title: "Final Report",
    date: "2026/0x/xx",
    type: "Group",
    file: "/files/final-report.pdf",
    isFolder: false,
  }
];

const Document = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Documents</h1>
      <p style={styles.subText}>
        Please find all documents related to this project below.
      </p>

      <div style={styles.grid}>
        {documents.map((doc, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardTop}>
              <h3 style={styles.title}>{doc.title}</h3>
              <p style={styles.date}>Submitted on {doc.date}</p>
            </div>

            <div style={styles.cardBottom}>
              <span style={styles.type}>{doc.type}</span>

              <div>
                {/* View button for individual files */}
                {!doc.isFolder && (
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ ...styles.download, marginRight: "10px" }}
                  >
                    View
                  </a>
                )}

                {/* Download button */}
                <a
                  href={doc.file}
                  {...(!doc.isFolder ? { download: true } : {})} // Only use download for files
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.download}
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Poppins, sans-serif",
    background: "#ffffff",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  subText: {
    color: "#666",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "10px",
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "0.3s",
  },
  cardTop: {
    padding: "20px",
  },
  title: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  date: {
    fontSize: "14px",
    color: "#777",
  },
  cardBottom: {
    borderTop: "1px solid #eee",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  type: {
    fontSize: "14px",
    color: "#444",
  },
  download: {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "500",
  },
};

export default Document;