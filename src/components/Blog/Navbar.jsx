"use client";
import React, { useEffect } from "react";
import Link from "next/link";

function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 350) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  useEffect(() => {
    let elements = document.querySelectorAll(".rolling-text");

    elements.forEach((element) => {
      let innerText = element.innerText;
      element.innerHTML = "";

      let textContainer = document.createElement("div");
      textContainer.classList.add("block");

      for (let letter of innerText) {
        let span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
      }

      element.appendChild(textContainer);
      element.appendChild(textContainer.cloneNode(true));
    });

    elements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.remove("play");
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg static">
      <div className="container">
        {/* <a className="logo icon-img-100" href="#">
          <img src="/assets/imgs/logo-light.png" alt="logo" />
        </a> */}
        <a className="logo" href="#">
          Alan Hernandez
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/home-main" data-scroll-nav="0">
                <span className="rolling-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/home-main" data-scroll-nav="1">
                <span className="rolling-text">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/home-main" data-scroll-nav="2">
                <span className="rolling-text">Services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/home-main" data-scroll-nav="3">
                <span className="rolling-text">Portfolio</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/home-main" data-scroll-nav="4">
                <span className="rolling-text">Testimonials</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/home-main" data-scroll-nav="5">
                <span className="rolling-text">Blog</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/home-main" data-scroll-nav="6">
                <span className="rolling-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="md-hide">
          <div className="butn-presv">
            <a
              href="#0"
              className="butn butn-sm butn-bg bg-white radius-5 skew "
            >
              <span className="text-dark ">Hire Me!</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
