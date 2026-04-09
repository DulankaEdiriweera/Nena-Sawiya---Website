// src/pages/Presentation.jsx
import React from "react";

const presentations = [
  {
    title: "Proposal Presentation",
    date: "2025/0x/xx",
    type: "Group",
    view: "https://docs.google.com/presentation/d/1SbhYRfz5fiChcecNvKDX1PZ-dzQu2bh5/preview",
    download:
      "https://docs.google.com/presentation/d/1SbhYRfz5fiChcecNvKDX1PZ-dzQu2bh5/export/pptx",
  },
  {
    title: "Progress Presentation 1",
    date: "2025/0x/xx",
    type: "Group",
    view: "https://docs.google.com/presentation/d/11GJWBaBP1uZl1ZrC-i2bGkmw9Qous00L/preview",
    download:
      "https://docs.google.com/presentation/d/11GJWBaBP1uZl1ZrC-i2bGkmw9Qous00L/export/pptx",
  },
  {
    title: "Progress Presentation 2",
    date: "2025/0x/xx",
    type: "Group",
    view: "https://docs.google.com/presentation/d/1AOjeOykilXjQoYzlyMbesWXZY2zVcQGG/preview",
    download:
      "https://docs.google.com/presentation/d/1AOjeOykilXjQoYzlyMbesWXZY2zVcQGG/export/pptx",
  },
  {
    title: "Final Presentation",
    date: "2025/0x/xx",
    type: "Group",
    view: "https://docs.google.com/presentation/d/YOUR_FILE_ID_FINAL/preview",
    download:
      "https://docs.google.com/presentation/d/YOUR_FILE_ID_FINAL/export/pptx",
  },
];

const Presentation = () => {
  return (
    <section id="presentations" className="presentations-page">
      <div style={styles.container}>
        <h1 style={styles.heading}>Presentations</h1>
        <p style={styles.subText}>
          Please find all presentations related to this project below.
        </p>

        <div style={styles.grid}>
          {presentations.map((item, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.cardTop}>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.date}>Submitted on {item.date}</p>
              </div>

              <div style={styles.cardBottom}>
                <span style={styles.type}>{item.type}</span>

                <div style={styles.buttonGroup}>
                  <a
                    href={item.view}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.view}
                  >
                    View
                  </a>

                  <a
                    href={item.download}
                    target="_blank"
                    rel="noreferrer"
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
    </section>
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
    gridTemplateColumns: "repeat(4, 1fr)",
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
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
  },
  view: {
    textDecoration: "none",
    color: "#6c63ff",
    fontWeight: "500",
  },
  download: {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "500",
  },
};

export default Presentation;
