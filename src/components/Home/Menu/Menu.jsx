"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Menu.css";

const Menu = () => {
  const [navActive, setNavActive] = useState(false);
  const [targetSection, setTargetSection] = useState("");
  const router = useRouter();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (navActive) {
      body.classList.add("nav-active");
    } else {
      body.classList.remove("nav-active");
    }
  }, [navActive]);

  useEffect(() => {
    if (targetSection) {
      scrollToSection(targetSection);
      setTargetSection(""); // Reset target section after scrolling
    }
  }, [targetSection]);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (href, sectionId) => {
    if (router.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      setTargetSection(sectionId);
      router.push(href);
    }
    setNavActive(false);
  };

  return (
    <>
      <div className="menu-icon" onClick={toggleNav}>
        <span className="menu-icon__line menu-icon__line-left"></span>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line menu-icon__line-right"></span>
      </div>

      <div className={`nav ${navActive ? "nav--active" : ""}`}>
        <div className="nav__content">
          {navActive && (
            <div className="nav__signature">
              {/* <img 
                src="/assets/imgs/harryashton_signature.png" 
                alt="Signature" 
                className="signature-img"
              /> */}
              <span className="signature-text">Alan Hernandez</span>
            </div>
          )}
          <ul className="nav__list">
            <li className="nav__list-item">
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/", "home");
                  scrollToSection("home");
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav__list-item">
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/#about", "about");
                  scrollToSection("about");
                }}
              >
                About
              </Link>
            </li>
            <li className="nav__list-item">
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/#projects", "projects");
                  scrollToSection("projects");
                }}
              >
                Projects
              </Link>
            </li>
            <li className="nav__list-item">
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/#contact", "contact");
                  scrollToSection("contact");
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
