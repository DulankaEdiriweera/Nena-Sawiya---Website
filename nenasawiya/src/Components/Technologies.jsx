import React from "react";
import "../css/ProjectScope.css";
import ReactJS from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Python from "../assets/python.png";
import Flask from "../assets/flask.png";
import MongoDB from "../assets/mongodb.png";
import Colab from "../assets/colab.png";
import VSCode from "../assets/vscode.png";
import JWT from "../assets/jwt.png";
import Drawio from "../assets/draw.io.png";
import Github from "../assets/github.png";

const Technologies = () => {
    const technologies = [
        { name: "ReactJS", img: ReactJS },
        { name: "TailwindCSS", img: Tailwind },
        { name: "Python", img: Python },
        { name: "Flask", img: Flask },
        { name: "MongoDB", img: MongoDB },
        { name: "Colab", img: Colab },
        { name: "VS Code", img: VSCode },
        { name: "JWT", img: JWT },
        { name: "Draw.io", img: Drawio },
        { name: "GitHub", img: Github },
      ];
  return (
    <div>
      {/* Technologies */}
      <div className="section">
        <h2 className="section-title">Technologies Used</h2>

        <div className="tech-grid">
          {technologies.map((tech, i) => (
            <div key={i} className="tech-card">
              <img src={tech.img} alt={tech.name} className="tech-img" />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
