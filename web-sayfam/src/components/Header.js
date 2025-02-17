import React from "react";
import { Link } from "react-scroll";

export default function Header({ language }) {
  return (
    <div className="header">
      <p className="logo">E</p>
      {language === "en" ? (
        <nav className="headerNav">
          <Link to="skills" smooth={true} duration={1000}>
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={2000}>
            Projects
          </Link>
          <Link to="footer" smooth={true} duration={2000}>
            Contact Me
          </Link>
        </nav>
      ) : (
        <nav className="headerNav">
          <Link to="skills" smooth={true} duration={1000}>
            Yetenekler
          </Link>
          <Link to="projects" smooth={true} duration={2000}>
            Projeler
          </Link>
          <Link to="footer" smooth={true} duration={2000}>
            İletişime Geç
          </Link>
        </nav>
      )}
    </div>
  );
}
