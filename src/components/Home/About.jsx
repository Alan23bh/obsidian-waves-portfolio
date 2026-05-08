"use client";
import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";
import data from "@/data/info.json";
import DotsPattern from "@/components/DotsPattern/DotsPattern";
import "@/styles/animations.css";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.5,
      duration: 1,
    },
  }),
};

function About() {
  const [showH1, setShowH1] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const h1Timer = setTimeout(() => {
      setShowH1(true);
    }, 500); // Delay of 2 seconds for H1

    const typingTimer = setTimeout(() => {
      setStartTyping(true);
    }, 1000); // Delay of 2.5 seconds for typing animation

    return () => {
      clearTimeout(h1Timer);
      clearTimeout(typingTimer);
    };
  }, []);

  const typingSteps = [
    "Hi, I'm Alan Hernandez a Front-end Developer who loves making great UI 💻",
    100, // Adjust this delay to slow down the typing effect
  ];

  return (
    <div
      className="about pt-40"
      data-scroll-index="1"
      id="about"
      style={{
        paddingTop: "clamp(40px, 6vw, 100px)",
        paddingBottom: "clamp(30px, 5vw, 80px)",
        paddingLeft: "clamp(20px, 4vw, 40px)",
        paddingRight: "clamp(20px, 4vw, 40px)",
      }}
    >
      <motion.div
        custom={5}
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="py-4 hidden lg:block"
      >
        <DotsPattern />
      </motion.div>
      <div
        className={"min-h-[300px]"}
        style={{
          minHeight: "clamp(150px, 30vw, 300px)",
          marginBottom: "clamp(20px, 3vw, 40px)",
        }}
      >
        {showH1 && (
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="flex flex-wrap cont"
            style={{
              justifyContent: "center",
            }}
          >
            <h1
              className="text-5xl leading-[60px] md:text-6xl md:leading-[80px] about-hero-title"
              style={{
                fontSize: "clamp(36px, 8vw, 60px)",
                lineHeight: "clamp(44px, 9vw, 80px)",
                marginBottom: "clamp(16px, 2vw, 30px)",
                width: "100%",
              }}
            >
              {startTyping && (
                <Typical
                  steps={typingSteps}
                  wrapper="span"
                  loop={1}
                  className="main-color font-bold"
                />
              )}
            </h1>
          </motion.div>
        )}
      </div>
      <motion.div
        custom={5}
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="stauts mt-10 about-button-container"
        style={{
          marginTop: "clamp(16px, 2vw, 40px)",
          marginBottom: "clamp(24px, 4vw, 80px)",
        }}
      >
        <div className="d-flex align-items-center">
          <div className="butn-presv">
            <a
              href="/Alan_Hernandez_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="butn butn-md butn-bord radius-5 skew !border-orange-500 text-xl"
            >
              <span>Download C.V</span>
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        custom={6}
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="text mt-80 about-text-section"
        style={{
          marginTop: "clamp(30px, 6vw, 80px)",
        }}
      >
        <motion.h6
          custom={7}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="sub-title mb-15 about-me-subtitle"
          style={{ marginBottom: "12px" }}
        >
          About Me.
        </motion.h6>
        <motion.p
          custom={8}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="fz-20"
          style={{ fontSize: "clamp(16px, 3vw, 20px)", lineHeight: "1.6" }}
        >
          {data.brief}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default About;
