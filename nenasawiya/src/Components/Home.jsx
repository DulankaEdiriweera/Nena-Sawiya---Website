import { useState, useEffect } from "react";
import Header from "../Components/Header";
import "../css/Home.css";

import classroom from "../assets/HomePage/classroom.png";
import classroomHover from "../assets/HomePage/classroom-hover.png";
import slide2 from "../assets/HomePage/slide2.jpeg";
import slide2Hover from "../assets/HomePage/slide2Hover.jpeg";
import slide3 from "../assets/HomePage/slide3.png";
import slide3Hover from "../assets/HomePage/slide3Hover.png";
import slide4 from "../assets/HomePage/slide4.jpeg";
import slide4Hover from "../assets/HomePage/slide4Hover.jpeg";
import slide5 from "../assets/HomePage/slide5.jpeg";
import slide5Hover from "../assets/HomePage/slide5-hover.jpeg";

const slides = [
  {
    base: classroom,
    hover: classroomHover,
    label: "Research Project",
    title: "නැණ සවිය",
    subtitle: "NENA SAWIYA",
    description:
      "Detection and Intervention of Language and Visual Processing Disorders in Sri Lankan Primary School Students",
  },
  {
    base: slide2,
    hover: slide2Hover,
    label: "Research Project",
    title: "නැණ සවිය",
    subtitle: "NENA SAWIYA",
    description: "Expressive Language Disorder Detection and Intervention.",
  },
  {
    base: slide3,
    hover: slide3Hover,
    label: "Research Project",
    title: "නැණ සවිය",
    subtitle: "NENA SAWIYA",
    description: "Receptive Language Disorder Detection and Intervention.",
  },
  {
    base: slide4,
    hover: slide4Hover,
    label: "Research Project",
    title: "නැණ සවිය",
    subtitle: "NENA SAWIYA",
    description: "Visual Closure Deficits Detection and Intervention .",
  },
  {
    base: slide5,
    hover: slide5Hover,
    label: "Research Project",
    title: "නැණ සවිය",
    subtitle: "NENA SAWIYA",
    description:
      "Visual Discrimination and memory Difficulties Detection and Intervention .",
  },
];

export default function Home() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Auto slideshow — changes every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goToSlide = (index) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;
    setMouse({ x: mouseX, y: mouseY });
  };

  const slide = slides[current];

  return (
    <div className="home" onMouseMove={handleMouseMove}>
      {/* Header */}
      <Header />

      {/* Base image */}
      <img
        src={slide.base}
        alt="Slide Base"
        className={`home__img ${animating ? "home__img--hidden" : ""}`}
      />

      {/* Hover reveal image — circular mask follows cursor */}
      <img
        src={slide.hover}
        alt="Slide Hover"
        className={`home__img home__img--hover ${animating ? "home__img--hidden" : ""}`}
        style={{
          clipPath: `circle(160px at ${mouse.x}% ${mouse.y}%)`,
        }}
      />

      {/* Soft ring around cursor */}
      <div
        className="home__cursor-ring"
        style={{ left: `${mouse.x}%`, top: `${mouse.y}%` }}
      />

      {/* Inner cursor dot */}
      <div
        className="home__cursor-dot"
        style={{ left: `${mouse.x}%`, top: `${mouse.y}%` }}
      />

      {/* Dark gradient overlay */}
      <div className="home__overlay" />

      {/* Text content */}
      <div className={`home__text ${animating ? "home__text--hidden" : ""}`}>
        <p className="home__label">{slide.label}</p>
        <h1 className="home__title">
          {slide.title}
          <span className="home__subtitle">{slide.subtitle}</span>
        </h1>
        <p className="home__description">{slide.description}</p>
        <p className="home__hint">
          <span className="home__hint-line" />
          Move your cursor to explore
        </p>
      </div>

      {/* Slide dots */}
      <div className="home__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`home__dot ${i === current ? "home__dot--active" : "home__dot--inactive"}`}
          />
        ))}
      </div>

      {/* Prev arrow */}
      <button
        className="home__arrow home__arrow--left"
        onClick={() => goToSlide((current - 1 + slides.length) % slides.length)}
      >
        <svg className="w-4 h-4" viewBox="0 0 10 10" fill="none">
          <path
            d="M6.5 2L3.5 5L6.5 8"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        className="home__arrow home__arrow--right"
        onClick={() => goToSlide((current + 1) % slides.length)}
      >
        <svg className="w-4 h-4" viewBox="0 0 10 10" fill="none">
          <path
            d="M3.5 2L6.5 5L3.5 8"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
