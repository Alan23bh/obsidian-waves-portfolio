"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "react-modal";
import "./AtlasGroomingDetails.css"; // Ensure to import the CSS file for styling

const AtlasGroomingDetails = () => {
  const [stickyItemWidth, setStickyItemWidth] = useState(undefined);
  const [stickyItemTop, setStickyItemTop] = useState(undefined);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const stickyItemEl = document
      .querySelector("#sticky_item")
      .getBoundingClientRect();
    setStickyItemWidth(stickyItemEl.width);
    setStickyItemTop(stickyItemEl.top);
  }, []);

  useEffect(() => {
    if (!stickyItemTop) return;
    window.addEventListener("scroll", isSticky);
    return () => window.removeEventListener("scroll", isSticky);
    // eslint-disable-next-line
  }, [stickyItemTop]);

  function isSticky() {
    const stickyItemEl = document.querySelector("#sticky_item");
    const stickyItemParentEl =
      document.querySelector("#sticky_item").parentElement;

    if (stickyItemParentEl.getBoundingClientRect().top < 0)
      stickyItemEl.classList.add("is-sticky");
    else stickyItemEl.classList.remove("is-sticky");

    if (stickyItemParentEl.getBoundingClientRect().top < -250) {
      stickyItemEl.classList.add("is-positioned");
      stickyItemParentEl.style.position = "relative";
    } else {
      stickyItemEl.classList.remove("is-positioned");
    }
  }

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage("");
  };
  const projectImageStyle = {
    cursor: "pointer",
    width: "100%",
    aspectRatio: "16 / 12",
    objectFit: "cover",
    display: "block",
  };

  return (
    <section className="project section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="img mb-80">
              {/*<img src="/assets/imgs/works/project/1.png" alt="" className="radius-5" />*/}
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="cont md-mb50">
                  <h3 className="mb-15 fw-500">Atlas Grooming Store</h3>
                  <p>
                    This project focuses on fullstack architecture, dynamic data
                    handling, and building a realistic e-commerce experience
                    with persistent state and a complete checkout flow.
                  </p>
                  <p className="mt-15">
                    We walk through the Atlas Grooming store from the product
                    listing page into a multi‑step checkout. The goal is to
                    mirror how real online stores manage dynamic product data,
                    cart state, and user flow, then rebuild that experience
                    using modern frontend tools.
                  </p>
                  <div className="mt-30">
                    <h6 className="mb-15 line-height-28">
                      Re‑create a realistic e‑commerce flow from browsing to
                      checkout, while learning how production apps handle data,
                      state, and UI at every step.
                    </h6>
                    <p>
                      We go deeper into using Next.js, TypeScript, and Supabase
                      to power the storefront, manage global cart state, and
                      deliver a smooth checkout experience. It becomes a strong
                      portfolio piece you can walk hiring managers through, from
                      architecture to user experience.
                    </p>
                    <ul className="rest list-arrow mt-50">
                      <li>
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-18">
                          Build a real‑world e‑commerce product and checkout
                          flow
                        </h6>
                      </li>
                      <li className="mt-20">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-18">
                          Fullstack app using Next.js, TypeScript, and Supabase
                        </h6>
                      </li>
                      <li className="mt-20">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-18">
                          Global cart state with React Context and reducer
                        </h6>
                      </li>
                      <li className="mt-20">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-18">
                          Multi‑step checkout and responsive UI
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="info"
                  id="sticky_item"
                  style={{ width: stickyItemWidth }}
                >
                  <ul>
                    <li className="mb-30">
                      <span className="sub-title">
                        <i className="far fa-calendar-alt mr-10"></i> Date :
                      </span>
                      <p>February, 2025</p>
                    </li>
                    <li className="mb-30">
                      <span className="sub-title">
                        <i className="fas fa-list-ul mr-10"></i> Categories :
                      </span>
                      <p>
                        UI/UX, Next.js, TypeScript, Supabase, React Context,
                        E‑Commerce UI
                      </p>
                    </li>
                    <li className="mb-30">
                      <span className="sub-title">
                        <i className="far fa-user mr-10"></i> Client :
                      </span>
                      <p>FrontendNow</p>
                    </li>
                    {/*<li>*/}
                    {/*  <span className="sub-title">*/}
                    {/*    <i className="fas fa-globe mr-10"></i> Website :*/}
                    {/*  </span>*/}
                    {/*  <p>learnfrontendnow.com</p>*/}
                    {/*</li>*/}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="image-modal"
          overlayClassName="overlay"
        >
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
          <img src={currentImage} alt="" />
        </Modal>
      </div>
      <div className="imgs mt-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="row md-marg">
                <div className="col-md-6">
                  <div className="img sm-mb30">
                    <img
                      src="/assets/imgs/works/nextshop3.png"
                      alt=""
                      onClick={() =>
                        openModal("/assets/imgs/works/nextshop3.png")
                      }
                      style={projectImageStyle}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img">
                    <img
                      src="/assets/imgs/works/nextshop2.png"
                      alt=""
                      onClick={() =>
                        openModal("/assets/imgs/works/nextshop2.png")
                      }
                      style={projectImageStyle}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="next-prev">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="d-flex align-items-center mt-80 pt-80 bord-thin-top">
                <div className="prev">
                  <h6 className="sub-title">
                    <Link href="/project/phone-app/">
                      <i className="fas fa-long-arrow-alt-left"></i> Prev
                      Project
                    </Link>
                  </h6>
                </div>
                <div className="next ml-auto">
                  <h6 className="sub-title">
                    <a href="#">
                      next Project{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtlasGroomingDetails;
