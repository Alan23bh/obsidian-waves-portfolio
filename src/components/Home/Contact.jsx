"use client";

import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";
import Toast from "@/components/Common/Toast";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3 + 2, // Delay starts 2 seconds after the typing animation
      duration: 1,
    },
  }),
};

function Contact() {
  const [startTyping, setStartTyping] = useState(false);
  const [showElements, setShowElements] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const typingTimer = setTimeout(() => {
              setStartTyping(true);
            }, 1000); // Delay of 2 seconds for typing animation

            const elementsTimer = setTimeout(() => {
              setShowElements(true);
            }, 1000); // Delay of 4 seconds for showing other elements

            return () => {
              clearTimeout(typingTimer);
              clearTimeout(elementsTimer);
            };
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const section = document.querySelector("#contact");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const typingSteps = ["Let's work together"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setToast({
          isVisible: true,
          message: "Thank you! Your message has been sent successfully.",
          type: "success",
        });
        e.target.reset(); // Reset the form
      } else {
        setToast({
          isVisible: true,
          message: result.error || "Failed to send message. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setToast({
        isVisible: true,
        message: "An error occurred. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="contact section-padding bord-thin-top min-h-[500px]"
      data-scroll-index="6"
      id="contact"
      style={{
        paddingTop: "40px",
        paddingBottom: "40px",
        width: "100%",
      }}
    >
      <div
        className="container"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          maxWidth: "100%",
          width: "100%",
        }}
      >
        <div className="row" style={{ margin: 0, width: "100%" }}>
          <div
            className="col-lg-6 col-12 contact-item"
            style={{
              paddingLeft: "0",
              paddingRight: "15px",
              marginBottom: "30px",
            }}
          >
            <div className="sec-head md-mb80" style={{ marginBottom: "24px" }}>
              <h6
                className="dot-titl mb-10"
                style={{
                  fontSize: "clamp(14px, 2vw, 16px)",
                  marginBottom: "8px",
                }}
              >
                Get In Touch
              </h6>
              <h2
                className="fz-50"
                style={{
                  fontSize: "clamp(28px, 6vw, 50px)",
                  lineHeight: "1.2",
                  marginBottom: "16px",
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
              </h2>
              {showElements && (
                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  <p
                    className="fz-15 mt-10"
                    style={{
                      fontSize: "clamp(14px, 2vw, 15px)",
                      lineHeight: "1.5",
                      marginTop: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    If you would like to work with us or just want to get in
                    touch, we'd love to hear from you!
                  </p>
                  <div
                    className="phone fz-30 fw-600 mt-30 underline"
                    style={{
                      fontSize: "clamp(20px, 4vw, 30px)",
                      marginTop: "16px",
                      marginBottom: "20px",
                    }}
                  >
                    <a
                      href="#0"
                      className="main-color"
                      style={{ textDecoration: "underline" }}
                    >
                      407 - 212 - 6090
                    </a>
                  </div>
                  <ul
                    className="rest social-text d-flex mt-60"
                    style={{
                      listStyle: "none",
                      padding: 0,
                      gap: "16px",
                      flexWrap: "wrap",
                      marginTop: "20px",
                      width: "100%",
                    }}
                  >
                    <li style={{ margin: 0 }}>
                      <a
                        href="https://github.com/Alan23bh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-this"
                        title="GitHub"
                        aria-label="GitHub"
                        style={{
                          fontSize: "clamp(40px, 8vw, 48px)",
                          color: "white",
                          textDecoration: "none",
                          transition: "opacity 0.3s",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "56px",
                          minHeight: "56px",
                          width: "56px",
                          height: "56px",
                        }}
                        onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                        onMouseLeave={(e) => (e.target.style.opacity = "1")}
                      >
                        <i className="fab fa-github" aria-hidden="true"></i>
                      </a>
                    </li>
                    {/* <li style={{ margin: 0 }}>
                      <a
                        href="https://www.twitter.com/thehashton"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-this"
                        title="Twitter"
                        aria-label="Twitter"
                        style={{
                          fontSize: "clamp(40px, 8vw, 48px)",
                          color: "white",
                          textDecoration: "none",
                          transition: "opacity 0.3s",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "56px",
                          minHeight: "56px",
                          width: "56px",
                          height: "56px",
                        }}
                        onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                        onMouseLeave={(e) => (e.target.style.opacity = "1")}
                      >
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li> */}
                    <li style={{ margin: 0 }}>
                      <a
                        href="https://www.linkedin.com/in/alan-hernandez-aa8458326/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-this"
                        title="LinkedIn"
                        aria-label="LinkedIn"
                        style={{
                          fontSize: "clamp(40px, 8vw, 48px)",
                          color: "white",
                          textDecoration: "none",
                          transition: "opacity 0.3s",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "56px",
                          minHeight: "56px",
                          width: "56px",
                          height: "56px",
                        }}
                        onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                        onMouseLeave={(e) => (e.target.style.opacity = "1")}
                      >
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
          {showElements && (
            <motion.div
              className="col-lg-6 col-12 contact-item"
              style={{
                paddingLeft: "15px",
                paddingRight: "0",
              }}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              custom={2}
            >
              <div className="full-width">
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="messages"></div>
                  <div
                    className="controls row"
                    style={{ marginLeft: 0, marginRight: 0 }}
                  >
                    <div
                      className="col-lg-6 col-12"
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                      <div
                        className="form-group mb-30"
                        style={{ marginBottom: "20px" }}
                      >
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                          style={{
                            width: "100%",
                            padding: "12px 15px",
                            fontSize: "16px",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-12"
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                      <div
                        className="form-group mb-30"
                        style={{ marginBottom: "20px" }}
                      >
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                          style={{
                            width: "100%",
                            padding: "12px 15px",
                            fontSize: "16px",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="col-12"
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                      <div
                        className="form-group mb-30"
                        style={{ marginBottom: "20px" }}
                      >
                        <input
                          id="form_subject"
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          style={{
                            width: "100%",
                            padding: "12px 15px",
                            fontSize: "16px",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="col-12"
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                      <div
                        className="form-group"
                        style={{ marginBottom: "20px" }}
                      >
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required="required"
                          style={{
                            width: "100%",
                            padding: "12px 15px",
                            fontSize: "16px",
                            minHeight: "120px",
                          }}
                        ></textarea>
                      </div>
                      <div className="mt-30" style={{ marginTop: "20px" }}>
                        <button type="submit" disabled={isSubmitting}>
                          <span className="text">
                            {isSubmitting ? "Sending..." : "Send A Message"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast({ ...toast, isVisible: false })}
      />
    </section>
  );
}

export default Contact;
