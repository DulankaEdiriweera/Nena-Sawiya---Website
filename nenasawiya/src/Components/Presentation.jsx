import React from "react";

const presentations = [
  {
    title: "Proposal Presentation",
    date: "2025/09/09",
    type: "Group",
    view: "https://docs.google.com/presentation/d/1SbhYRfz5fiChcecNvKDX1PZ-dzQu2bh5/preview",
    download:
      "https://docs.google.com/presentation/d/1SbhYRfz5fiChcecNvKDX1PZ-dzQu2bh5/export/pptx",
  },
  {
    title: "Progress Presentation 1",
    date: "2026/01/04",
    type: "Group",
    view: "https://docs.google.com/presentation/d/11GJWBaBP1uZl1ZrC-i2bGkmw9Qous00L/preview",
    download:
      "https://docs.google.com/presentation/d/11GJWBaBP1uZl1ZrC-i2bGkmw9Qous00L/export/pptx",
  },
  {
    title: "Progress Presentation 2",
    date: "2026/03/10",
    type: "Group",
    view: "https://docs.google.com/presentation/d/1AOjeOykilXjQoYzlyMbesWXZY2zVcQGG/preview",
    download:
      "https://docs.google.com/presentation/d/1AOjeOykilXjQoYzlyMbesWXZY2zVcQGG/export/pptx",
  },
  {
    title: "Final Presentation",
    date: "2025/05/04",
    type: "Group",
    view: "https://docs.google.com/presentation/d/YOUR_FILE_ID_FINAL/preview",
    download:
      "https://docs.google.com/presentation/d/YOUR_FILE_ID_FINAL/export/pptx",
  },
];

const Presentation = () => {
  return (
    <section id="presentations" style={styles.container}>
      <h1 style={styles.heading}>Presentations</h1>
      <p style={styles.subText}>
        Please find all presentations related to this project below.
      </p>

      <div style={styles.grid}>
        {presentations.map((item, index) => (
          <div key={index} style={styles.card}>
            <div>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.date}>Submitted on {item.date}</p>
            </div>

            <div style={styles.bottom}>
              <span style={styles.type}>{item.type}</span>

              <div style={styles.buttonGroup}>
                <a
                  href={item.view}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.button}
                >
                  View
                </a>

                <a
                  href={item.download}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.button}
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
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    color: "#0b1f3a",
    padding: "20px",
    borderRadius: "20px",
    border: "3px solid #0b1f3a", // yellow border
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // shadow
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
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
  },
  button: {
    textDecoration: "none",
    color: "#0b1f3a",
    fontWeight: "500",
    border: "1px solid #0b1f3a",
    padding: "5px 10px",
    borderRadius: "8px",
  },
};

export default Presentation;
