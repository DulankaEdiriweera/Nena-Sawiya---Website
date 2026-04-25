// src/Components/Header.jsx
import { useState, useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
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

const allSections = [
  { label: "Home", to: "/", keywords: ["home", "main", "start"] },

  // Project Scope
  {
    label: "Literature Survey",
    to: "/scope#literature-review",
    keywords: ["literature", "survey", "review", "papers"],
  },
  {
    label: "Research Gap",
    to: "/scope#research-gap",
    keywords: ["gap", "research gap", "problem area"],
  },
  {
    label: "Research Problem & Solution",
    to: "/scope#research-problem",
    keywords: ["problem", "solution", "research problem"],
  },
  {
    label: "Research Objectives",
    to: "/scope#research-objectives",
    keywords: ["objectives", "goals", "aims"],
  },
  {
    label: "Methodology",
    to: "/scope#methodology",
    keywords: ["methodology", "method", "approach", "process"],
  },
  {
    label: "Technologies",
    to: "/scope#technologies",
    keywords: ["technologies", "tech", "tools", "stack", "frameworks"],
  },

  // Milestones
  {
    label: "Milestones",
    to: "/#milestones",
    keywords: ["milestones", "timeline", "progress", "deadlines"],
  },

  // Documents
  {
    label: "Documents",
    to: "/#documents",
    keywords: ["documents", "docs", "files", "reports"],
  },
  {
    label: "Topic Assessment",
    to: "/#documents",
    keywords: ["topic", "assessment", "topic assessment"],
  },
  {
    label: "Project Proposal",
    to: "/#documents",
    keywords: ["proposal", "project proposal"],
  },
  {
    label: "Status Documents I",
    to: "/#documents",
    keywords: ["status", "status 1", "status documents", "status i"],
  },
  {
    label: "Status Documents II",
    to: "/#documents",
    keywords: ["status 2", "status ii", "status documents ii"],
  },
  {
    label: "Research Paper",
    to: "/#documents",
    keywords: ["research paper", "paper", "journal"],
  },
  {
    label: "Final Report",
    to: "/#documents",
    keywords: ["final report", "report", "final"],
  },

  // Presentations
  {
    label: "Presentations",
    to: "/#presentations",
    keywords: ["presentations", "slides", "decks", "ppt"],
  },
  {
    label: "Proposal Presentation",
    to: "/#presentations",
    keywords: ["proposal presentation", "proposal slides"],
  },
  {
    label: "Progress Presentation 1",
    to: "/#presentations",
    keywords: ["progress 1", "progress presentation 1", "pp1"],
  },
  {
    label: "Progress Presentation 2",
    to: "/#presentations",
    keywords: ["progress 2", "progress presentation 2", "pp2"],
  },
  {
    label: "Final Presentation",
    to: "/#presentations",
    keywords: ["final presentation", "final slides"],
  },

  // Achievements
  {
    label: "Achievements",
    to: "/#achievements",
    keywords: ["achievements", "awards", "accomplishments"],
  },

  // About
  {
    label: "Supervisors",
    to: "/about#supervisors",
    keywords: ["supervisors", "supervisor", "advisors", "mentors"],
  },
  {
    label: "Team Members",
    to: "/about#team",
    keywords: ["team", "members", "students", "group"],
  },

  // Contact
  {
    label: "Contact Us",
    to: "/#contact-us",
    keywords: ["contact", "email", "reach", "get in touch"],
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const closeTimer = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

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
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length === 0) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const q = query.toLowerCase();
    const results = allSections.filter(
      (section) =>
        section.label.toLowerCase().includes(q) ||
        section.keywords.some((kw) => kw.includes(q)),
    );

    setSearchResults(results);
    setShowResults(true);
  };

  const handleResultClick = (to) => {
    setSearchQuery("");
    setShowResults(false);

    if (to.startsWith("/#")) {
      navigate("/");
      setTimeout(() => {
        const id = to.replace("/#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(to);
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Escape") {
      setShowResults(false);
      setSearchQuery("");
    }
    if (e.key === "Enter" && searchResults.length > 0) {
      handleResultClick(searchResults[0].to);
    }
  };

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
            <Link smooth to="#documents" className="nav__link">
              Documents
            </Link>
            <Link smooth to="#presentations" className="nav__link">
              Presentations
            </Link>
            <Link smooth to="#achievements" className="nav__link">
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

          {/* Search Bar */}
          <div className="header__search" ref={searchRef}>
            <div className="search__input-wrapper">
              <svg
                className="search__icon"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8.5"
                  cy="8.5"
                  r="5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M13 13L17 17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                className="search__input"
                placeholder="Search sections..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
                onFocus={() => searchQuery && setShowResults(true)}
              />
              {searchQuery && (
                <button
                  className="search__clear"
                  onClick={() => {
                    setSearchQuery("");
                    setShowResults(false);
                  }}
                >
                  ×
                </button>
              )}
            </div>

            {showResults && (
              <div className="search__results">
                {searchResults.length > 0 ? (
                  searchResults.map((result) => (
                    <button
                      key={result.to + result.label}
                      className="search__result-item"
                      onClick={() => handleResultClick(result.to)}
                    >
                      <svg
                        className="search__result-icon"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M2 8h10M8 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {result.label}
                    </button>
                  ))
                ) : (
                  <p className="search__no-results">No sections found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
