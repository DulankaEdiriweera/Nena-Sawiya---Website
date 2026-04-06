// src/Components/Header.jsx
import { useState, useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../assets/HomePage/Logo.png";
import "../css/Header.css";

const projectScopeItems = [
  { label: "Literature Survey", to: "/scope#literature-review" },
  { label: "Research Gap", to: "/scope#research-gap" },
  { label: "Research Problem & Solution", to: "/scope#research-problem" },
  { label: "Research Objectives", to: "/scope#research-objectives" },
  { label: "Methodology", to: "/scope#methodology" },
  { label: "Technologies", to: "/scope#technologies" },
];

const aboutUsItems = [
  { label: "Supervisors", to: "/about#supervisors" },
  { label: "Team Members", to: "/about#team" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  const handleMouseEnter = (menu) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__row">
          {/* Logo */}
          <Link to="/" className="header__logo">
            <img
              src={Logo}
              alt="Nena Sawiya Logo"
              className="header__logo-img"
            />
            <div className="header__logo-text">
              <h1 className="header__logo-title">නැණ සවිය</h1>
              <span className="header__logo-subtitle">Nena Sawiya</span>
            </div>
          </Link>

          {/* Nav */}
          <nav className="header__nav">
            <Link to="/" className="nav__link">
              Home
            </Link>

            {/* Project Scope Dropdown */}
            <div
              className="nav__dropdown"
              onMouseEnter={() => handleMouseEnter("scope")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="nav__dropdown-btn">
                Project Scope
                <svg
                  className={`nav__dropdown-icon ${openMenu === "scope" ? "nav__dropdown-icon--open" : ""}`}
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    d="M2 3.5L5 6.5L8 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {openMenu === "scope" && (
                <div
                  className="nav__dropdown-menu nav__dropdown-menu--wide"
                  onMouseEnter={() => handleMouseEnter("scope")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="nav__dropdown-bridge" />
                  {projectScopeItems.map((item) => (
                    <Link
                      key={item.to}
                      smooth
                      to={item.to}
                      onClick={() => setOpenMenu(null)}
                      className="nav__dropdown-item"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link smooth to="#milestones" className="nav__link">
              Milestones
            </Link>
            <Link to="/documents" className="nav__link">
              Documents
            </Link>
            <Link to="/presentations" className="nav__link">
              Presentations
            </Link>
            <Link to="/achievements" className="nav__link">
              Achievements
            </Link>

            {/* About Us Dropdown */}
            <div
              className="nav__dropdown"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="nav__dropdown-btn">
                About Us
                <svg
                  className={`nav__dropdown-icon ${openMenu === "about" ? "nav__dropdown-icon--open" : ""}`}
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    d="M2 3.5L5 6.5L8 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {openMenu === "about" && (
                <div
                  className="nav__dropdown-menu nav__dropdown-menu--narrow"
                  onMouseEnter={() => handleMouseEnter("about")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="nav__dropdown-bridge" />
                  {aboutUsItems.map((item) => (
                    <Link
                      key={item.to}
                      smooth
                      to={item.to}
                      onClick={() => setOpenMenu(null)}
                      className="nav__dropdown-item"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link smooth to="#contact-us" className="nav__link">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
