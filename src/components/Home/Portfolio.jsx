"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
//= Static Data
import data from "@/data/portfolio.json";

function Portfolio() {
  const portfolioRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    portfolioRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      if (portfolioRef.current) {
        portfolioRef.current.forEach((item) => {
          if (item) {
            observer.unobserve(item);
          }
        });
      }
    };
  }, []);

  return (
    <section
      className="portfolio section-padding pt-0"
      data-scroll-index="3"
      id={"projects"}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-head bord-thin-bottom pb-20 mb-30">
              <h4 className="sub-title fz-28">Portfolio</h4>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div
              className="col-lg-6 mb-30"
              key={item.id}
              ref={(el) => (portfolioRef.current[index] = el)}
            >
              <div className="item mt-50">
                <div className="img">
                  {item.href ? (
                    <Link href={item.href}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="radius-5"
                        style={{
                          width: "100%",
                          aspectRatio: "16 / 9",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Link>
                  ) : (
                    <img src={item.image} alt="" className="radius-5" />
                  )}
                </div>
                <div className="cont mt-30 d-flex align-items-center">
                  <div>
                    <span className="tag">{item.tag}</span>
                    <h6 className="line-height-1">
                      {item.href ? (
                        <Link href={item.href}>{item.title}</Link>
                      ) : (
                        item.title
                      )}
                    </h6>
                  </div>
                  {item.href && (
                    <div className="ml-auto">
                      <div className="arrow">
                        <Link href={item.href}>
                          <svg
                            className="arrow-right"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 34.2 32.3"
                            xmlSpace="preserve"
                            style={{ strokeWidth: 2 }}
                          >
                            <line x1="0" y1="16" x2="33" y2="16"></line>
                            <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                            <line
                              x1="17.3"
                              y1="31.6"
                              x2="33.5"
                              y2="15.4"
                            ></line>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
